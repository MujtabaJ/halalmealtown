import React, { Component } from "react";
import { FlatList, Image, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, View } from 'react-native';
import { Translate } from "../../i18n/localization";
import { Colors, Fonts, Metrics } from "../../Theme";

import { Container } from "native-base";
import HeaderComponent from "../../Components/Components/HeaderComponent";

class Chicken extends Component<any, any> {

    constructor(props) {
        super(props);
        console.log(props?.item);
        this.state = {
            item: this.props.route.params.item,
        }
    }

    componentDidMount = () => {

    }

    openChickenPage = (item) => {
        

    }

    render() {
        const { item } = this.props.route.params;
        return (
            <Container >
                <HeaderComponent item={item} />

                <View style={Styles.ListViewStyle}>
                    <FlatList
                        style={Styles.flatListStyle}
                        numColumns={2}
                        columnWrapperStyle={Styles.row}
                        data={item.chicksCategory}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => (
                            <View style={Styles.networkList} key={index}>
                                <TouchableOpacity onPress={() => { this.openChickenPage(item) }} >
                                    <View style={Styles.createNetworkView}>
                                        <View style={Styles.greyView}></View>
                                        <View style={Styles.lightView}>
                                            <View style={[Styles.logoContainer1, { marginTop: '-30%', }]}>
                                                <Image source={item.cetegoryImage} style={Styles.logo1} />
                                            </View>
                                            <Text numberOfLines={1} style={Styles.categoryTitle}>
                                                {item.categoryName}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />

                </View>
            </Container>
        )
    }
}

const Styles = StyleSheet.create({
    headerDashboard: {
        flexDirection: 'row',
        backgroundColor: Colors.transparent,
        height: Metrics.HEIGHT * 0.09,

    },
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
        fontWeight: 'bold',
    },
    background: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,

    },
    container: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        flex: 1
    },
    backgroundColor: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
        width: Metrics.WIDTH,
    },
    networkList: {
        flexDirection: 'row',
        marginHorizontal: Metrics.WIDTH * 0.01,
        marginBottom: Metrics.WIDTH * 0.015,
        // marginRight: Metrics.WIDTH * 0.015,
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
    ListViewStyle: {
        marginHorizontal: Metrics.WIDTH * 0.08,
        marginTop: Metrics.HEIGHT * 0.03,
    },
    createNetworkView: {
        flexDirection: 'column',
        borderColor: Colors.grey,
        width: Metrics.WIDTH * 0.4,
        height: Metrics.HEIGHT * 0.22,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Colors.grey,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 2
    },
    createButtonView: {
        marginTop: Metrics.HEIGHT * 0.0068,
        justifyContent: "center",
        alignItems: "center",
        width: Metrics.WIDTH * 0.25,
    },
    connectButtonView: {
        marginTop: Metrics.HEIGHT * 0.0068,
        justifyContent: "center",
        alignItems: "center",
        width: Metrics.WIDTH * 0.25,
    },
    createButton: {
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderWidth: 0.5,
        width: Metrics.WIDTH * 0.3,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: 'center',
    },
    connectButton: {
        backgroundColor: Colors.themeBlue,
        borderRadius: 5,
        width: Metrics.WIDTH * 0.3,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: 'center',
    },
    logo1: {
        width: "auto",
        height: "100%",
        borderRadius: 50,
        // borderColor: Colors.themeBlue,
        borderWidth: 2
    },
    createlogo: {
        width: "50%",
        height: "50%",
    },
    logoContainer1: {
        width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.1,
        zIndex: 0
    },
    createlogoContainer: {
        width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.1,
        zIndex: 0,
        borderRadius: 50,
        // borderColor: Colors.themeBlue,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    greyView: {
        flex: 1,
        // backgroundColor: Colors.lightGrey,
        width: '100%'
    },
    lightView: {
        flex: 1,
        // backgroundColor: Colors.white,
        width: '100%',
        alignItems: "center",
    },
    flatListStyle: {
        // width: Metrics.WIDTH * 0.95,
        marginBottom: Metrics.HEIGHT * 0.1
    },
    row: {
        // flex: 1,
    },
    categoryTitle: {
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold',
        marginTop: Metrics.WIDTH * 0.015,
        marginHorizontal: Metrics.WIDTH * 0.02,
        color: Colors.black
    },
    seperator: {
        width: Metrics.WIDTH * 0.04,
    },
    heightSeperator: {
        height: Metrics.HEIGHT * 0.024
    },
});

export default Chicken;
