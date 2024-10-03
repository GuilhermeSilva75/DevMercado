import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";

export type DrawerParamList = {
    Home: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>()

function AppDrawer() {
    return (
        <Drawer.Navigator
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
        </Drawer.Navigator>
    )
}

export default AppDrawer