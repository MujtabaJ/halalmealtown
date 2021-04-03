import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Logo from "./Components/Logo";
import LoginPass from "./Components/LoginPass";
import LoginCheckBox from "./Components/LoginCheckBox";
import LoginConnect from "./Components/LoginConnect";
import SignUp from "./Components/SignUp";
import { Metrics, Colors } from "../../Theme";
import ErrorHelper from "../../Common/ErrorHelper";
import { ILoginProps, ILoginState } from "../../Types/Login";
import Loader from '@Components/Loader';
import { loginUserController } from '../../Network/Controllers/authController';
import { CommonActions } from '@react-navigation/native';
import LocalStorageHelper from '../../Helpers/localStorageHelper';

class Login extends Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      Error: { errorText: "", hasError: false },
      email: 'mujtaba@gmail.com',
      password: 'ABcde@11',
      isCheckedRememberMe: false,
      isLoading: false
    }
  }

  loginSubmit = async () => {
    const { email, password, isCheckedRememberMe, Error } = this.state;
    // this.props.setErrorMsg("");
    this.setState({
      Error: ErrorHelper.errorChecker(email, password),
    }, async () => {
      if (this.state.Error.hasError) {
        return;
      }
      else {
        // this.setState({ isLoading: true })
        
        if(email == "mujtaba@gmail.com" && password == "ABcde@11"){
          await LocalStorageHelper.setRemeberMeCheckAsync(isCheckedRememberMe);
          this.props.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'DrawerNavigation' }
                ],
            })
        )
        } else {
              this.setState({ isLoading:false, Error: { hasError: true, errorText: "Email or password does not match!" } })
        }
        // const response = await loginUserController(email, password, isCheckedRememberMe, this.props)
        // this.setState({ isLoading: false })
        // if (response) {
        //   this.setState({ Error: { hasError: true, errorText: response } })
        // }
      }
    })
  }


  render() {
    return (
      this.state.isLoading
        ?
        <Loader />
        :
        <ImageBackground source={require('../../Assets/finalbanner/meat.jpg')} style={Styles.loginBackground} >
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={Styles.containerLogin}>
              <Logo />
              <LoginPass
                onSubmit={this.loginSubmit}
                Error={this.state.Error}
                email={this.state.email}
                password={this.state.password}
                onChangeEmail={(email: string) => this.setState({ email, Error: { errorText: "" } })}
                onChangePassword={(password: string) => this.setState({ password, Error: { errorText: "" } })}
              />
              <LoginCheckBox
                navigation={this.props.navigation}
                isCheckedRememberMe={this.state.isCheckedRememberMe}
                onChangeRememberMeCheck={() => this.setState({ isCheckedRememberMe: !this.state.isCheckedRememberMe })}
              />
              {/* <LoginConnect /> */}
              <SignUp {...this.props} />
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
    );
  }
};

export default Login;


const Styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    maxWidth: Metrics.maxWidthLogin,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBackground: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    alignItems: "center",
    // backgroundColor:Colors.black,
  },
  loginBorder: {
    height: "100%",
    width: "100%",
    alignItems: 'center'
  },
})