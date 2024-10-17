import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustomDrawer from "../Componentes/CustomDrawer";
import Debit from "../pages/Debit";

export type DrawerParamList = {
    Home: undefined
    New: undefined
    Perfil: undefined
    Débitos: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>()

function AppDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: "#642CA9",
                    paddingTop: 20
                },

                drawerActiveBackgroundColor: "#00B94A",
                drawerActiveTintColor: "#FFF",

                drawerInactiveBackgroundColor: "#F0F2FF",
                drawerInactiveTintColor: "#121212"
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
            />

            <Drawer.Screen
                name="New"
                component={New}
            />

            <Drawer.Screen
                name="Débitos"
                component={Debit}
            />


            <Drawer.Screen
                name="Perfil"
                component={Profile}
            />
        </Drawer.Navigator>
    )
}

export default AppDrawer