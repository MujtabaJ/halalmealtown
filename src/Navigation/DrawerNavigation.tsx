import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideDrawerContent from "../Components/SideDrawer";
import { HomeStack } from './AllStacks';
import { Metrics, Colors } from "../Theme";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideDrawerContent {...props} />}
      drawerStyle={{ backgroundColor: Colors.black, width: "80%", maxWidth: Metrics.maxWidthDrawer, }}  >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          swipeEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;