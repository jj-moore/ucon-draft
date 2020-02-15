import React, { Component } from 'react';
import { Text, TextInput, Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class StorageButton extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    this._onLoadData();
  }

  _onPressButton = async () => {
    try {
      await AsyncStorage.setItem('username', `${this.state.text}`);
      alert(`${this.state.text} stored!`);
    } catch (error) {
      alert("Error storing data!");
    }
  }

  _onLoadData = async () => {
    const username = await AsyncStorage.getItem('username');
    const publicKey = await AsyncStorage.getItem('public');
    console.log(publicKey);
    this.setState({ text: username });
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text styles={{fontSize: 20, marginRight: 10}}>User Name: </Text>
          <TextInput style={styles.textBox} placeholder="Type data to store!"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text} />
          </View>
        <View style={styles.buttons}>
          <Button onPress={this._onPressButton} title={this.props.title} color={this.props.color}/>
          <Button onPress={this._onLoadData} title='Load Data' color={this.props.color}/>
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
