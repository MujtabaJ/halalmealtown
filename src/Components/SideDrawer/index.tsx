import React, { useState } from "react";
import { View, StyleSheet, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import ProfileHeader from "./components/ProfileHeader";
import Networks from "./components/Networks";
import About from "./components/About";
import Help from "./components/Help";
import Settings from "./components/Settings";
import SignOut from "./components/SignOut";
import { Content } from "native-base";
import { Colors } from "../../Theme";


const SideDrawer = (props) => {

    const [modalVisible, setmodalVisible] = useState(false);

    const setModalVisible = (visible) => {
        setmodalVisible(visible)
    }

    return <View style={Styles.mainContainer} >
        <ProfileHeader {...props} />
        <DrawerContentScrollView {...props} style={{ color: Colors.white }} >            
            {/* <Networks {...props} modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
            <About style={{ color: Colors.white }} />
            <Help />
            <Settings />
        </DrawerContentScrollView>


        {/* <SignOut {...props} /> */}
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        color: Colors.white
    }
})

export default SideDrawer;
