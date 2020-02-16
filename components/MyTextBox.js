import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export class MyTextBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeholder}
          onChangeText={(text) => this._update(text)}
          value = {this.props.plaintext}
        />
    </View>
  )};

  _update = (text) => {
    this.setState({value: text});
    this.props.onchange(text)
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    height: 50,
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 16,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 50,
    width: 300
  }
});
