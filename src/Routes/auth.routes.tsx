import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
    Entrar: undefined
    Cadastrar: undefined
}

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator<StackParamList>()

function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
            name="Entrar"
            component={SignIn}
            options={{
                headerShown: false
            }}
            />

            <AuthStack.Screen
            name="Cadastrar"
            component={SignUp}
            options={{
                headerStyle: {
                    backgroundColor: '#2225C3'
                },
                headerTintColor: "white"
            }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes