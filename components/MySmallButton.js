
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

{/* EACH COMPONENT SHOULD INCLUDE EVERYTHING IT NEEDS TO FUNCTION
  ANY FUNCTIONS, STYLES, ETC... */}
export class MySmallButton extends Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title }
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.props.press} style={styles.touchable}>
            <Text style={styles.text}>{this.state.title}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  touchable: {
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    padding: 12,
    borderRadius: 50,
    width: 100
  },
  text: {
    fontSize: 16,
    color: 'white'
  }
});
