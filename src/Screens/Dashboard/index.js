import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native';
import { Container, Content } from "native-base";
import HeaderComponent from '@Components/HeaderComponent';
import { Translate } from '../../i18n/localization';
import { Colors, Fonts, Metrics } from '../../Theme';

import Loader from '@Components/Loader';



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            categoryList: [
                {
                    id: 1,
                    categoryName: 'Halal Chicken',
                    cetegoryImage: require("../../Assets/icon/chickred.png"),
                    cetegoryBanner: require("../../Assets/finalbanner/chickenfinalbanner.jpg"),
                    type:"chicken",
                    chicksCategory:[
                        {
                            id: 1,
                            categoryName: 'Halal Chicken',
                            cetegoryImage: require("../../Assets/icon/checkwhite.jpg"),
                            cetegoryBanner: require("../../Assets/finalbanner/chickenfinalbanner.jpg"),
                        },
                        {
                            id: 1,
                            categoryName: 'Halal Zabiha Chicken',
                            cetegoryImage: require("../../Assets/icon/checkwhite.jpg"),
                            cetegoryBanner: require("../../Assets/finalbanner/chickenfinalbanner.jpg"),
                        },
                        {
                            id: 1,
                            categoryName: 'Halal Zabiha Organic',
                            cetegoryImage: require("../../Assets/icon/checkwhite.jpg"),
                            cetegoryBanner: require("../../Assets/finalbanner/chickenfinalbanner.jpg"),
                        }
                    ],
                },
                {
                    id: 2,
                    categoryName: 'Halal Fish',
                    cetegoryImage: require('../../Assets/icon/fishred.png'),
                    cetegoryBanner: require("../../Assets/finalbanner/fishfinalbanner.jpeg"),
                    type:"fish",
                    fishCategory:[
                        {
                            id: 1,
                            itemName: 'Fish',
                            itemPrice:'$2.50',
                            itemWeight:'Weight: 1 lbs',
                            itemImage: require("../../Assets/icon/checkwhite.jpg"),
                            itemBanner: require("../../Assets/finalbanner/chickenfinalbanner.jpg"),
                        }
                    ],
                },
                {
                    id: 3, 
                    categoryName: 'Halal Meat Goat',
                    cetegoryImage: require('../../Assets/icon/goatred.png'),
                    cetegoryBanner: require("../../Assets/finalbanner/goatfnalbanner.jpg"),
                    type:"goat",
                    goatCategory:[
                        {
                            id: 1,
                            itemName: 'Goat Brain',
                            itemPrice:'$4.99 /lbs',
                            itemWeight:'Weight: 1 lbs',
                            itemImage: 'https://halalmeattown.com/wp-content/uploads/2021/01/images-6.jpg',
                            itemBanner: require("../../Assets/finalbanner/chickenfinalbanner.jpg"),
                        }
                    ],
                },
                {
                    id: 4, 
                    categoryName: 'Halal Meat Lamb',
                    cetegoryImage: require('../../Assets/icon/bafelowred.png'),
                    cetegoryBanner: require("../../Assets/finalbanner/Lambfinalbanner.jpg"),
                    type:"lamb"
                },
                {
                    id: 5, 
                    categoryName: 'Halal Meat Beef',
                    cetegoryImage: require('../../Assets/icon/cowred.png'),
                    cetegoryBanner: require("../../Assets/finalbanner/beeffinalbanner.jpg"),
                    type:"beef"
                }
            ],
            isRefreshing: false,
            loading: false
        };
    }


    async componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    openChickenPage = (item) => {
        switch (item.type) {
            case 'chicken':
                this.props.navigation.navigate('Chicken', { item: item });
                break;
            case 'fish':
                this.props.navigation.navigate('Fish', { item: item });
                break;
            case 'goat':
                this.props.navigation.navigate('Goat', { item: item });
                break;
            case 'lamb':
                this.props.navigation.navigate('Chicken', { item: item });
                break;
            case 'beef':
                this.props.navigation.navigate('Chicken', { item: item });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            this.state.isRefreshing
                ?
                <Loader />
                :
                <Container>
                    <HeaderComponent
                        profilePicture={this.props.profilePicture}
                        navigation={this.props.navigation}
                        backIcon={false}
                        menuIcon={true}
                        bodyText={'Home'}
                        right={true}
                        placeholder={'Search'}
                        onChangeText={text => this.onChangeText(text)}
                    />
                    <ImageBackground source={require('../../Assets/finalbanner/banner.jpg')} style={styles.background} >
                        <View style={styles.backgroundColor}>
                            {/* <View style={styles.logoContainer} >
                                <Image source={require("../../Assets/logo/logowhite.png")} style={styles.logo} />
                            </View> */}

                            <View style={styles.ListViewStyle}>
                                <FlatList
                                    style={styles.flatListStyle}
                                    numColumns={2}
                                    columnWrapperStyle={styles.row}
                                    data={this.state.categoryList}
                                    keyExtractor={(item, index) => item.id}
                                    renderItem={({ item, index }) => (
                                        <View style={styles.networkList} key={index}>
                                            <TouchableOpacity onPress={() => { this.openChickenPage(item) }} >
                                                <View style={styles.createNetworkView}>
                                                    <View style={styles.greyView}></View>
                                                    <View style={styles.lightView}>
                                                        <View style={[styles.logoContainer1, { marginTop: '-30%', }]}>
                                                            <Image source={item.cetegoryImage} style={styles.logo1} />
                                                        </View>
                                                        <Text numberOfLines={1} style={styles.categoryTitle}>
                                                            {item.categoryName}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                />
                            </View>

                        </View>
                    </ImageBackground>
                </Container>
        )
    }
};

export default Dashboard;

const styles = StyleSheet.create({
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
        marginTop: Metrics.WIDTH * 0.01,
        marginHorizontal: Metrics.WIDTH * 0.02,
        color: Colors.white
    },
    seperator: {
        width: Metrics.WIDTH * 0.04,
    },
    heightSeperator: {
        height: Metrics.HEIGHT * 0.024
    },
    logoContainer: {
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.2,
    },
    logo: {
        width: "auto",
        height: '100%',
        resizeMode: 'contain',
    },
    background: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        flex: 1,
        // justifyContent: "center",
        // alignItems: 'center'
    },
    backgroundColor: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
    },
    jobsTitle: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: '4%',
        paddingBottom: '1%',
        marginEnd: "3%", marginStart: "3%",
        borderColor: Colors.blue,
        borderBottomWidth: 0.5
    },
    recommendedText: {
        fontSize: Fonts.moderateScale(12),
    },
    buttonViewAll: {
        color: Colors.blue,
        fontSize: Fonts.moderateScale(11),
    },
    networkList: {
        flexDirection: 'row',
        marginHorizontal: Metrics.WIDTH * 0.01,
        // marginRight: Metrics.WIDTH * 0.015,
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
    }
});