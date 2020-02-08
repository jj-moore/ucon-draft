
import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

{/* EACH COMPONENT SHOULD INCLUDE EVERYTHING IT NEEDS TO FUNCTION
  ANY FUNCTIONS, STYLES, ETC... */}
export class ApiButton extends Component {

  state = { title: this.props.title }

  _onPressButton = () => {
    callApi();
    this.setState({ title: 'Yay!' });
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title={this.state.title} color={this.props.color} />
      </View>
    )
  }
}

{ /* THIS IS THE FETCH FUNCTION THAT MAKES THE API CALL */}
function callApi() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(text => {
    alert(text.title);
  })
  .catch(error => {
    alert(error);
  });
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20
  }
});
