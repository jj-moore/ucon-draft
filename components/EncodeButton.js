import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import base64 from 'react-native-base64';

export class EncodeButton extends Component {
  state = { title: this.props.title, encoded: false }

  _onPressButton = () => {
    if (this.state.encoded) {
      this.setState({ title: base64.decode(this.state.title), encoded: false});
    } else {
        this.setState({ title: base64.encode(this.state.title), encoded: true});
    }
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title={this.state.title} color={this.props.color} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20
  }
});
