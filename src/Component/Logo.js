import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

//let Image_Http_URL ={ uri: 'http://124.43.130.154/Asset/dist/img/v4u.png'};
import logoImg from '../../Img/v4u.png';
export default class Logo extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Image source={logoImg} style={styles.image} />
                {/*<Text style={styles.text}>V4U</Text>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        height:130
    },
    image: {
        width: 110,
        height: 110,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 5,
    },
});