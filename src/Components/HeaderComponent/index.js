import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, Image, StatusBar, StyleSheet } from 'react-native';
import { Title, Header, Right, Badge, Left, Body, Icon, Input, Item, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, Metrics } from '../../Theme';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';
import GLOBALS from "./../../Constants/Settings";


const messageImage = require('../../Assets/messageicon.png');


const HeaderComponent = (props) => {

    const navigation = useNavigation();

    return (
        <React.Fragment>
            <LinearGradient colors={[ '#000',  '#000']} >
                <View style={styles.headerDashboard}>
                    <StatusBar backgroundColor={Colors.black} barStyle={Colors.darkContent} />

                    <TouchableOpacity style={styles.left} onPress={() => navigation.openDrawer()} >
                        <Left style={styles.profileImageContainer}>
                            <Icon name='align-right' type='FontAwesome' style={styles.blackDownArrowIconStyle} />
                        </Left>
                    </TouchableOpacity>


                    <Body style={styles.body}>
                        {props.bodyText !== undefined &&
                            <Item style={styles.searchBarStyle} >
                                <View style={styles.logoContainer} >
                                    <Image source={require("../../Assets/logo/logowhite.png")} style={styles.logo} />
                                </View>
                            </Item>
                        }
                    </Body>
                    <Right style={styles.right}>
                        {props.right &&
                            <View >
                                <TouchableOpacity style={styles.profileImageContainer}
                                    onPress={() => { navigation.navigate('Cart');}}
                                >
                                        {/* <Image source={messageImage} style={styles.messageImageStyle} /> */}
                                        <Icon  type="FontAwesome"  name='shopping-cart'  style={styles.blackDownArrowIconStyle} />
                                </TouchableOpacity>
                            </View>
                        }
                    </Right>
                </View>

            </LinearGradient>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        width: Metrics.WIDTH * 0.75,
        height: Metrics.HEIGHT * 0.09,
    },
    logo: {
        width: "auto",
        height: "100%",
        resizeMode: 'contain',
    },
    headerDashboard: {
        flexDirection: 'row',
        backgroundColor: Colors.transparent,
        height: Metrics.HEIGHT * 0.09,
    },
    left: {
        flex: 0.125,
        // paddingHorizontal: Metrics.WIDTH * 0.009,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center'
        // paddingHorizontal: Metrics.WIDTH * 0.004,
    },
    right: {
        flex: 0.125,
        justifyContent: 'center',
        alignItems: 'center'
        // paddingHorizontal: Metrics.WIDTH * 0.009,
    },
    backArrow: {
        fontSize: Fonts.moderateScale(16),
        justifyContent: 'center',
        alignItems: 'center'
    },
    blackDownArrowIconStyle: {
        fontSize: Fonts.moderateScale(22),
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.white
    },
    profileImageContainer: {
        width: Metrics.HEIGHT * 0.05,
        height: Metrics.HEIGHT * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.HEIGHT * 0.05,
        borderRadius: 500,
        alignItems: 'center',
        justifyContent: 'center',

    },
    messageImageStyle: {
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.HEIGHT * 0.05,
        borderRadius: 50,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    searchBarStyle: {
        width: '100%',
        // backgroundColor: Colors.white,
        color: '#727272',
        height: Metrics.HEIGHT * 0.045,
        borderRadius: 5,
        borderColor: 'transparent'
        // borderWidth: 1,
        // borderColor: Colors.white
    },
    searchicon: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.black,
        marginLeft: Metrics.WIDTH * 0.01
    },
    chatbox: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.white,
    },
    badgeCountView: {
        color: Colors.white,
        position: "absolute",
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'top',
        justifyContent: 'center',
        backgroundColor: Colors.errorText,
        marginLeft: -Metrics.WIDTH * 0.04,
        marginTop: -Metrics.HEIGHT * 0.027,
        height: Metrics.HEIGHT * 0.0245,
        width: Metrics.HEIGHT * 0.0245,
        borderRadius: Metrics.HEIGHT * 0.5
    },
    badgeText: {
        color: Colors.white,
        fontSize: Fonts.moderateScale(9)
    }
});

export default HeaderComponent;
