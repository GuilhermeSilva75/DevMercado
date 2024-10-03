import 'react-native-gesture-handler';
import Routes from "./src/Routes"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native"

import AuthProvider from "./src/contexts/authContext"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle='default' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

