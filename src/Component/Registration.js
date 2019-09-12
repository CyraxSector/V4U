import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { withNavigation } from 'react-navigation';
class Register extends Component {

    constructor(props) {
        super(props);
        state = {
            email   : '',
            name   : '',
            mobile   : '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Full name"
                               underlineColorAndroid='transparent'
                               onChangeText={(name) => this.setState({name})}/>
                    <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png'}}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Mobile No"
                               underlineColorAndroid='transparent'
                               onChangeText={(mobile) => this.setState({mobile})}/>
                    <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/phone.png'}}/>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                    <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png'}}/>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                    <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/color/40/000000/password.png'}}/>
                </View>

                <TouchableOpacity style={styles.btnByRegister} onPress={() => this.onClickListener('restore_password')}>
                    <Text style={styles.textByRegister}>By registering on this App you confirm that you have read and accept our policy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('Home');
                }}>
                    <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonContainer}  onPress={this.register}>
                    <Text style={styles.btnText}>Have an account?</Text>
                </TouchableOpacity>
            </View>
        );
    }


    register=()=>{

        fetch("http://124.43.130.154:3000/RegisterCustomer",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email:this.state.email,
                username:this.state.name,
                password:this.state.password,
                mobile:this.state.mobile,
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

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffbd4b',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginRight:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:300,
        borderRadius:30,
        backgroundColor:'transparent'
    },
    btnByRegister: {
        height:15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:20,
        width:300,
        backgroundColor:'transparent'
    },
    loginButton: {
        backgroundColor: "#00b5ec",

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage:{
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText:{
        color:"white",
        fontWeight:'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    textByRegister:{
        color:"white",
        fontWeight:'bold',
        textAlign:'center',

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});
export default withNavigation(Register);