import React, { Component } from 'react';
import { FlatList, TouchableWithoutFeedback, Image, TextInput, Modal, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Keyboard, } from "react-native";

import CustomButton from '../CustomButton';
import { Translate } from '../../i18n/localization';
import { Colors, Fonts, Metrics } from '../../Theme';


class CustomModal extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            Error: { hasError: false, errorText: "" },
            toggleOverlay: false,
            createNetworkMessage: "",
            loading: false,
            quantity: ''
        }
    }
    componentWillUnmount = () => {
        // this.props.setModalVisible(false)
    }
    onDoneButtonClick(value) {
        this.setState({ toggleOverlay: value })
        this.props.setCustomModalVisible(false)
    }
    onChangeQuantity(text) {
        this.setState({ quantity: text })
    }

    render() {
        const { item } = this.props;
        return (
            <View >
                <View style={styles.thanksModalCenteredView}>
                    <Modal
                        style={{ width: Metrics.WIDTH }}
                        animationType="slide"
                        transparent={true}
                        visible={this.props.customModalVisible}
                        onRequestClose={() => { this.props.setCustomModalVisible(!this.props.customModalVisible) }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.thankYouModalView}>
                                <View style={{ flexDirection: 'column', height: Metrics.WIDTH * 0.9, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.itemTitleTextStyle}>{item.itemName}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <View style={styles.greyView}>
                                            <Image source={{ uri:  item.itemImage}} style={styles.logo1} />
                                        </View>
                                        <View style={styles.section3} >
                                            <Text style={styles.thankYouTextStyle}>{item.itemPrice}</Text>
                                            <Text style={styles.thankYouDescriptionTextStyle}>{item.itemWeight}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <TextInput
                                            placeholder='Enter Quantity'
                                            style={styles.textInputStyle}
                                            value={this.state.quantity}
                                            keyboardType='numeric'
                                            onChangeText={(text) => this.onChangeQuantity(text)}
                                        />
                                    </View>
                                    <View>
                                        <CustomButton title={'Add to cart'} buttonContainerStyle={styles.doneButton} buttonTextStyle={styles.doneButtonText} onPress={() => this.onDoneButtonClick(false)} />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={styles.categoryDescriptionTextStyle}>Category: {item.itemName}</Text>
                                    </View>
                                </View>
                            </View></View>
                    </Modal>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thankYouTextStyle: {
        fontWeight: 'bold',
        fontSize: Fonts.moderateScale(15),
        marginBottom: 5
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
});

export default CustomModal;