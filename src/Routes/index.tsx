import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.routes";
import AppDrawer from "./app.routes";

import { AuthContext } from "../contexts/authContext";

export default function Routes() {

    const { signed, loading } = useContext(AuthContext)
    
    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#642CA9'}}>
                <ActivityIndicator size='large' color="#FFF"/>
            </View>
        )
    }
    
    return (
        signed ? <AppDrawer /> : <AuthRoutes />
    )
}