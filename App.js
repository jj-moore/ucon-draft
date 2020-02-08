import React, { Component } from 'react';

{ /* IMPORTS FOR BUILT IN TAGS. ADD MORE IMPORTS IF YOU NEED DIFFERENT TAGS */ }
import { Button, Image, StyleSheet, View } from 'react-native';

{ /* IMPORTS FOR CUSTOM COMPONENTS.
 I PUT THEM IN A FOLDER NAME COMPONENTS.
 NOT POSITIVE IT'S STANDARD, BUT SEEMSED LIKE A GOOD IDEA */ }
import { ApiButton } from './components/ApiButton';
import { EncodeButton } from './components/EncodeButton';

{ /* ALL COMPONENTS EXTEND THE COMPONENT CLASS
 THE COMPONENT IN THE APP.JS FILE IS THE MAIN COMPONENT
 TECHNICALLY YOU COULD WRITE THE ENTIRE APP IN THIS CLASS
 BUT IT'S TYPICAL TO BREAK IT UP INTO SEPARATE REUSABLE COMPONENT CLASSES
 ALL COMPONENT CLASSES HAVE A RENDER FUNCTION WHICH DECLARES WHAT THEY
 END UP COMPILING TO. */ }
export default class ButtonBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('./images/logo.png')} style={styles.image} />
        </View>
        <View style={styles.buttonsContainer}>
          <EncodeButton title="Press toggle encoding" />
          <ApiButton title="Press to call fake api" color="#841584" />
          <View style={styles.alternativeLayoutButtonContainer}>
            <EncodeButton title="Press me!" />
            <ApiButton title="Me too!!" color="#841584" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-start',
   backgroundColor: 'lightblue',
   height: '100%'
  },
  buttonsContainer: {
    flex: 3,
    justifyContent: 'space-around'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer:{
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});
