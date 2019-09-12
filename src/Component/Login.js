import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Button,
    ScrollView,
    Dimensions,
    Image, default as AsyncStorage
} from 'react-native';
import Logo from "./Logo";
import Home from "./Home";
import Registration from "./Registration";
import { withNavigation } from 'react-navigation';
class LoginView extends Component {

    render() {


        return (
            <ScrollView>
            <View style={styles.container}>
                <Logo/>
                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               onChangeText={(username) => this.setState({username})}
                               underlineColorAndroid='transparent'/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               onChangeText={(password) => this.setState({password})}
                               underlineColorAndroid='transparent'/>
                </View>

                <TouchableOpacity style={styles.restoreButtonContainer}>
                    <Text>Forgot?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.login}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Registration');
                }}>
                    <Text>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Continue with facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>
            </View>

            </ScrollView>

        );

    }
    //addCommand(){
     //   navigate("CreateCommand");
    //}
    constructor(props)
    {
        super(props);
        //this.addCommand = this.addCommand.bind(this);
        this.state={username:'',password:''};
    }

    login=()=>{

        fetch("http://124.43.130.154:3000/accountexist",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email:this.state.username,
                password:this.state.password,
            })
        }).then((response) => {
            return response.text();
        })
            .then((responseJson) => {
               alert('Response:'+responseJson);
                if(responseJson==='OK'){

                    var username=this.state.username;

                    //AsyncStorage.setItem('username',username);

                    //this.addCommand
                    this.props.navigation.navigate('Home');
                }
                else {
                    alert(responseJson.message);
                }
            })
            .catch((error) => {
                alert('Error '+error);
            }).done();

    }


}

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffbd4b',
        height:ScreenHeight
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:20,
        borderBottomWidth: 1,
        width:260,
        height:45,

        marginBottom:10,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    icon:{
        width:30,
        height:30,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        width:260,
        borderRadius:20,
    },
    loginButton: {
        backgroundColor: '#3498db',
    },
    fabookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    loginText: {
        color: 'white',
    },
    restoreButtonContainer:{
        width:250,
        marginBottom:10,
        alignItems: 'flex-end'
    },
    socialButtonContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon:{
        color: "#FFFFFF",
        marginRight:5
    }
});
export default withNavigation(LoginView);