import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Registration from '../Screens/Registration';
import ForgotPassword from "../Screens/ForgotPassword";
import ResetPassword from "../Screens/ForgotPassword/ResetPassword";


const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Registration"
                component={Registration}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{
                    animationTypeForReplace: 'pop',
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;