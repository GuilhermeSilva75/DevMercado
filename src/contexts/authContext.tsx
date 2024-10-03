import React, { useState, createContext, ReactNode, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../Routes/auth.routes";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import api from "../service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps {
    children: ReactNode
}

type AuthContextData = {
    signUp: (name: any, email: any, password: any) => void
    loadingAuth: boolean
    user: DataProps | null
    signed: boolean
    signIn: (email: any, password: any) => void
    loading: boolean
    signOut: () => void
}

interface DataProps {
    id?: any
    name?: any
    email?: any

}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {

    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()
    const [user, setUser] = useState<DataProps | null>(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('@Token')

            if (storageUser) {
                const response: any = await api.get("/me", {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })

                // const response1 = response.data
                    .catch(() => {
                        setUser(null)
                    })

                api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
                setUser(response.data)
                setLoading(false)
            }

            setLoading(false)
        }

        loadStorage()
    }, [])

    async function signUp(name: any, email: any, password: any) {
        setLoadingAuth(true)

        try {
            const response = await api.post('/users', {
                name: name,
                password: password,
                email: email
            })

            setLoadingAuth(false)
            navigation.goBack()

        } catch (err) {
            console.log('ERRO AO CADASTRAR', err)
            setLoadingAuth(false)

        }
    }

    async function signIn(email: any, password: any) {
        setLoadingAuth(true)

        try {
            const response = await api.post('/session', {
                email: email,
                password: password
            })

            const { id, name, token } = response.data;

            const data = {
                id,
                name,
                token,
                email
            }


            api.defaults.headers['Authorization'] = `Bearer ${token}`

            await AsyncStorage.setItem('@Token', token)

            setUser({
                id,
                name,
                email
            })

            setLoadingAuth(false)


        } catch (err) {
            console.log("ERRO AO LOGAR ", err);
            setLoadingAuth(false)
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
        .then(() => {
            setUser(null)
        })
    }
    return (
        <AuthContext.Provider value={{
            signUp,
            loadingAuth,
            user,
            signed: !!user,
            signIn,
            loading,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider