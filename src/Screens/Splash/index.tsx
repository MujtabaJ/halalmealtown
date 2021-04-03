import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import LocalStorageHelper from "../../Helpers/localStorageHelper";
import { Translate } from "../../i18n/localization";
import { Colors, Fonts, Metrics } from "../../Theme";
import { CommonActions } from '@react-navigation/native';

class Splash extends Component<any, any> {

    async componentDidMount() {
        let token = await LocalStorageHelper.getRemeberMeCheckAsync();
        if (token === true) {
        setTimeout(() => {
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'DrawerNavigation' }
                    ],
                })
            )
        }, 500)
        }
        else {
            setTimeout(() => {
                this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'AuthStack' }
                        ],
                    })
                )
            }, 500)
        }
    }


    render() {
        return (
            <ImageBackground source={require('../../Assets/finalbanner/banner.jpg')} style={Styles.background} >
                <View style={Styles.backgroundColor}>
                    <View style={Styles.container}>
                        <View style={Styles.logoContainer} >
                            <Image source={require("../../Assets/logo/logowhite.png")} style={Styles.logo} />
                        </View>
                        <View style={Styles.logoView}>
                            <Text style={Styles.yourText}>{Translate("splash.halalmeal")}</Text>
                        </View>
                        <View style={Styles.title2}>
                            <Text style={Styles.networthText}>{Translate("splash.title2")}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        justifyContent: "center",
        alignItems: 'center'
    },
    background: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        alignItems: 'center'
    },
    backgroundColor: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    logo: {
        width: "auto",
        height: "100%",
        resizeMode: 'contain',
    },
    logoContainer: {
        width: Metrics.WIDTH ,
        height: Metrics.HEIGHT * 0.3
    },
    logoView: {
        flexDirection: 'row',
        marginTop: Metrics.HEIGHT * 0.003,
    },
    title2: {
        marginTop: Metrics.HEIGHT * 0.001,
    },
    yourText: {
        color: Colors.themeLightYellow,
        fontSize: Fonts.moderateScale(18),
        fontWeight: 'bold'
    },
    networkText: {
        color: Colors.white,
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold'
    },
    networthText: {
        color: Colors.themeLightYellow,
        fontSize: Fonts.moderateScale(22),
        fontWeight: 'bold'
    },
});

export default Splash;
