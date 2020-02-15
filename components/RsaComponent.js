import React, { Component } from 'react';
import { Button, TextInput, Text, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { RSA } from 'react-native-rsa-native';

export class RsaComponent extends Component {

  _onPressButton = async () => {
    //const keys = await RSA.generate();

    const publicKey = await AsyncStorage.getItem('public');
    const privateKey = await AsyncStorage.getItem('private');

    let message = "my secret message";

    console.log('2048 private:', privateKey);
    console.log('2048 public:', publicKey);

    const encrypted = await RSA.encrypt(message, publicKey)
    console.log(`the encoded message is ${encrypted}`);

    const decrypted = await RSA.decrypt(encrypted, privateKey);
    console.log(`The original message was ${decrypted}`);
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text styles={{fontSize: 20, marginRight: 10}}>Encrypt: </Text>
          <TextInput style={styles.textBox} placeholder="Encrypt" />
          </View>
        <View style={styles.buttons}>
          <Button onPress={this._onPressButton} title={this.props.title} color={this.props.color}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  textBox: {
    flex: 2,
    fontSize: 20,
    height: 30,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 3
  },
  buttonContainer: {
    margin: 20
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
