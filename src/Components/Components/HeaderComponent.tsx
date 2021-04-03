import React from 'react';
import { ImageBackground, TouchableOpacity, Text, View, Image, StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, Metrics } from '../../Theme';


class HeaderComponent extends React.Component<any, any> {

    constructor(props) {
        super(props)
    }
    
    render() {
        const {item} = this.props;
        return (
            <React.Fragment>
                <LinearGradient colors={['#000', '#000']} >
                    <StatusBar backgroundColor={Colors.black} barStyle={Colors.darkContent} />
                    <ImageBackground source={item.cetegoryBanner} style={styles.banner} >
                        <View style={styles.backgroundColor}>
                            <Text style={styles.categoryTextStyle}>{item.categoryName}</Text>
                        </View>
                    </ImageBackground>
                </LinearGradient>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    banner: {
        height: Metrics.HEIGHT * 0.3,
        width: Metrics.WIDTH,

    },
    logoContainer: {
        width: Metrics.WIDTH * 0.75,
        height: Metrics.HEIGHT * 0.09,
    },
    logo: {
        width: "auto",
        height: "100%",
        resizeMode: 'contain',
    },
    categoryTextStyle: {
        fontSize: Fonts.moderateScale(19),
        color: Colors.white,
        fontWeight: 'bold'
    },
    background: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,

    },
    backgroundColor: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: Metrics.HEIGHT * 0.3,
        width: Metrics.WIDTH,
        justifyContent: "center",
        alignItems: 'center'
    },
    headerDashboard: {
        flexDirection: 'row',
        backgroundColor: Colors.transparent,
        height: Metrics.HEIGHT * 0.09,

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
});

export default HeaderComponent;
