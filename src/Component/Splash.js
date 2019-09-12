import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Logo from "./Logo";
import LoginView from "./Login";

class SplashScreen extends React.Component {
    state = {
        ready: false,
    }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
        setTimeout(() => {
            this.setState({ ready: true })
        }, 4000)
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render(){
      const viewStyles = [styles.container, { backgroundColor: 'orange' }];
      const textStyles = {

          fontSize: 40,
          fontWeight: 'bold'
      };
      if (this.state.ready === false) {
          return (
              <View style={styles.container}>
                  <Logo/>
              </View>
          );
      }
    return (
      <LoginView/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffbd4b',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})

export default SplashScreen;