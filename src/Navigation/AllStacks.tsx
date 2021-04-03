import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Home
import Dashboard from "../Screens/Dashboard";
import Chicken from "../Screens/Chicken";
import Fish from "../Screens/Fish";
import Goat from "../Screens/Goat";
import Cart from "../Screens/Cart";

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="Chicken" component={Chicken} options={{ headerShown: true }} />
            <Stack.Screen name="Fish" component={Fish} options={{ headerShown: true }} />
            <Stack.Screen name="Goat" component={Goat} options={{ headerShown: true }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};
