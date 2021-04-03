import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack'
import DrawerNavigation from "./DrawerNavigation";
import { HomeStack } from './AllStacks';
import Splash from "../Screens/Splash";

const RootStack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer >
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="AuthStack"
                    component={AuthStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
                <RootStack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                    options={{
                        animationTypeForReplace: 'pop',
                        headerShown: false
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;