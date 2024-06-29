import React from "react";
import { NavigationContext } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serialzable values were found in the navigation state'
])


function AppNavigation() {
    return (
        <NavigationContext>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContext>

    )
}


export default AppNavigation;