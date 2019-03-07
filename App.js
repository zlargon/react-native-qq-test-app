/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import * as QQ from 'react-native-qqsdk';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: 'USER_ID'
    }

    this.setState = this.setState.bind(this);
    this.login = this.login.bind(this);
  }

  async login () {
    try {
      const result = await QQ.ssoLogin();
      const { userid, access_token, expires_time } = result;
      this.setState({ userId: userid });
    } catch (e) {
      Alert.alert(e.message);
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Text style={styles.welcome}>{this.state.userId}</Text>
        <Button
          onPress={this.login}
          title="QQ Login"
        />
      </View>
    );
  }
}

export default App;
