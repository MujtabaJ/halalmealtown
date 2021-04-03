import React, { Component } from "react";
import { FlatList,TextInput, Image, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, View } from 'react-native';
import { Translate } from "../../i18n/localization";
import { Colors, Fonts, Metrics } from "../../Theme";
import { Container } from "native-base";
import HeaderComponent from "../../Components/Components/HeaderComponent";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";

class Cart extends Component<any, any> {

    constructor(props) {
        super(props);
        console.log(props?.item);
        this.state = {
            // item: this.props.route.params.item,
            item: {},
            createNetworkMessage: "",
            loading: false,
            customModalVisible: false,
            selectedItem: {}
        }
    }

    componentDidMount = () => {

    }
    onChangeQuantity = (text) => {

    }
    onDoneButtonClick = (text) => {

    }
    setCustomModalVisible = (value) => {
        this.setState({ customModalVisible: value })
    }

    addToCart = (item) => {
        this.setState({ selectedItem: item, customModalVisible: true })
    }

    render() {
        // const { item } = this.props.route.params;
        const item = {};
        return (
            <Container >

                <View style={{ flexDirection: 'column', height: Metrics.WIDTH * 0.9, }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.itemTitleTextStyle}>dfg</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={Styles.greyView}>
                            <Image source={{ uri: 'https://halalmeattown.com/wp-content/uploads/2021/01/images-6.jpg' }} style={Styles.logo1} />
                        </View>
                        <View style={Styles.section3} >
                            <Text style={Styles.thankYouTextStyle}>itemPrice</Text>
                            <Text style={Styles.thankYouDescriptionTextStyle}>itemWeight</Text>
                        </View>
                    </View>
                    <View>
                        <TextInput
                            placeholder='Enter Quantity'
                            style={Styles.textInputStyle}
                            value={this.state.quantity}
                            keyboardType='numeric'
                            onChangeText={(text) => this.onChangeQuantity(text)}
                        />
                    </View>
                    <View>
                        <CustomButton title={'Add to cart'} buttonContainerStyle={Styles.doneButton} buttonTextStyle={Styles.doneButtonText} onPress={() => this.onDoneButtonClick(false)} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.categoryDescriptionTextStyle}>Category: item.itemName</Text>
                    </View>
                </View>
                <View style={Styles.ListViewStyle}>
                    <FlatList
                        style={Styles.flatListStyle}
                        numColumns={2}
                        columnWrapperStyle={Styles.row}
                        data={[]}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item, index }) => (
                            <View style={Styles.networkList} key={index}>

                                <View style={Styles.createNetworkView}>
                                    <View style={Styles.greyView}>
                                        <Image source={{ uri: 'https://halalmeattown.com/wp-content/uploads/2021/01/images-6.jpg' }} style={Styles.logo1} />
                                    </View>
                                    <View style={Styles.lightView}>
                                        <View style={[Styles.logoContainer1]}>
                                            <Text numberOfLines={1} style={Styles.categoryTitle}>
                                                {item.itemName}
                                            </Text>
                                        </View>

                                        <Text numberOfLines={1} style={Styles.itemPriceText}>
                                            {item.itemPrice}
                                        </Text>

                                        <Text numberOfLines={1} style={Styles.itemWeightText}>
                                            {item.itemPrice}
                                        </Text>

                                        <TouchableOpacity onPress={() => { this.addToCart(item) }} style={Styles.addToCardButtonStyle}>
                                            <Text numberOfLines={1} style={Styles.addToCartTextStyle}>
                                                Add To Cart
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                    <CustomModal
                        item={this.state.selectedItem}
                        customModalVisible={this.state.customModalVisible}
                        setCustomModalVisible={this.setCustomModalVisible}
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
    addToCardButtonStyle: {
        backgroundColor: Colors.redHalal,
        padding: Metrics.HEIGHT * 0.015,
        paddingHorizontal: Metrics.HEIGHT * 0.025,
        borderRadius: 20
    },
    addToCartTextStyle: {
        fontSize: Fonts.moderateScale(13),
        fontWeight: 'bold',
        color: Colors.white,
    },
    banner: {
        height: Metrics.HEIGHT * 0.3,
        width: Metrics.WIDTH,

    },
    logoContainer: {
        width: Metrics.WIDTH * 0.75,
        height: Metrics.HEIGHT * 0.09,
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
        height: Metrics.HEIGHT * 0.455,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Colors.grey,
        shadowOffset: {
            width: 1,
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
    
    createlogo: {
        width: "50%",
        height: "50%",
    },
    logoContainer1: {
        // width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.06,
        justifyContent: "center",
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
    
    flatListStyle: {
        // width: Metrics.WIDTH * 0.95,
        marginBottom: Metrics.HEIGHT * 0.1
    },
    row: {
        // flex: 1,
    },
    categoryTitle: {
        fontSize: Fonts.moderateScale(18),
        fontWeight: 'bold',
        marginTop: Metrics.WIDTH * 0.015,
        marginHorizontal: Metrics.WIDTH * 0.02,
        color: Colors.black
    },
    itemPriceText: {
        fontSize: Fonts.moderateScale(19),
        fontWeight: 'bold',
        marginTop: Metrics.WIDTH * 0.015,
        marginHorizontal: Metrics.WIDTH * 0.02,
        color: Colors.redHalal,
    },
    itemWeightText: {
        fontSize: Fonts.moderateScale(13),
        // fontWeight: 'bold',
        marginHorizontal: Metrics.WIDTH * 0.02,
        color: Colors.black,
        marginBottom: Metrics.HEIGHT * 0.02
    },
    seperator: {
        width: Metrics.WIDTH * 0.04,
    },
    heightSeperator: {
        height: Metrics.HEIGHT * 0.024
    },

    itemTitleTextStyle: {
        fontWeight: 'bold',
        fontSize: Fonts.moderateScale(18),
        marginBottom: 5,
        alignItems: 'center'
    },
    thankYouDescriptionTextStyle: {
        fontSize: Fonts.moderateScale(13),
        marginBottom: 5
    },
    categoryDescriptionTextStyle: {
        fontSize: Fonts.moderateScale(11),
    },
    thankYouDescriptionTextStyle2: {
        fontSize: Fonts.moderateScale(13),
        marginBottom: 5,
        textAlign: "center",
        flexWrap: 'wrap'
    },
    textInput: {
        fontSize: Fonts.moderateScale(12)
    },
    logo1: {
        width: "auto",
        height: "100%",
        borderRadius: 50,
        borderWidth: 2
    },
    greyView: {
        flex: 1,
        width: Metrics.HEIGHT * 0.2,
        height: Metrics.HEIGHT * 0.2,
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
    logo: {
        width: "auto",
        height: "100%",
        borderRadius: 50,
        borderColor: Colors.themeBlue,
        borderWidth: 2
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Metrics.HEIGHT * 0.001,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    thanksModalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Metrics.HEIGHT * 0.001,

    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    thankYouModalView: {
        width: Metrics.WIDTH * 0.8,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: Colors.themeBlue,
        width: Metrics.WIDTH * 0.75
    },
    textStyle: {
        color: Colors.white,
        fontWeight: "normal",
        textAlign: "center"
    },
    section3: {
        alignItems: "center",
        height: Metrics.HEIGHT * 0.2,
        width: '50%',
        justifyContent: "center"
    },
    doneButton: {
        width: Metrics.WIDTH * 0.6,
        backgroundColor: Colors.redHalal
    },
    textInputStyle: {
        width: Metrics.WIDTH * 0.6,
        borderColor: Colors.redHalal,
        borderWidth: Metrics.WIDTH * 0.001
    },
    doneButtonText: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: "normal"
    },
    thankYouTextStyle: {
        fontWeight: 'bold',
        fontSize: Fonts.moderateScale(15),
        marginBottom: 5
    },
    lightView: {
        flex: 1,
        // backgroundColor: Colors.white,
        width: '100%',
        alignItems: "center",
    },
});

export default Cart;
