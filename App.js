import React, { Component } from 'react';

{ /* IMPORTS FOR BUILT IN TAGS. ADD MORE IMPORTS IF YOU NEED DIFFERENT TAGS */ }
import { Button, Image, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

{ /* IMPORTS FOR CUSTOM COMPONENTS.
 I PUT THEM IN A FOLDER NAME COMPONENTS.
 NOT POSITIVE IT'S STANDARD, BUT SEEMSED LIKE A GOOD IDEA */ }
import { ApiButton } from './components/ApiButton';
import { EncodeButton } from './components/EncodeButton';
import { StorageButton } from './components/StorageButton';
import { RealmComponent } from './components/RealmComponent';
import { RsaComponent } from './components/RsaComponent';

{ /* ALL COMPONENTS EXTEND THE COMPONENT CLASS
 THE COMPONENT IN THE APP.JS FILE IS THE MAIN COMPONENT
 TECHNICALLY YOU COULD WRITE THE ENTIRE APP IN THIS CLASS
 BUT IT'S TYPICAL TO BREAK IT UP INTO SEPARATE REUSABLE COMPONENT CLASSES
 ALL COMPONENT CLASSES HAVE A RENDER FUNCTION WHICH DECLARES WHAT THEY
 END UP COMPILING TO. */ }
export default class ButtonBasics extends Component {
  constructor() {
    super();
    AsyncStorage.setItem('public', `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1w8wVi2CKFeloC1yZrJo
nCgbnLl9bjOBjZOQx2dSpJaCN8hUyrfMGeGS5vUBCnWaDHuMkwJHF4km6oXyn75p
rT2/3mfGLNbBIZG2WbHNw07sdj6NHNoLG4tA91p9ZXiqDbu9xHRRFjxuRm6rESpF
S/UPsrhtUIzXf9pkFcugo8J1wXXvxLEZmleHsYnR0rA8VKB1WSquAKYN+GCV+zMo
KMN813lNAdE5ykYR4zpCU2qSzcFVbga+r57YjUEAqr3K4khh1RTnMfN5rJJYDWBw
dMhPqqAuBc8AYUZ+0+r8Gmgtz8+ZM+FnZ/btyoHJ9K50Al9znDkLzRh2cZ0XSRkP
bQIDAQAB
-----END PUBLIC KEY-----`);
    AsyncStorage.setItem('private', `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1w8wVi2CKFeloC1yZrJonCgbnLl9bjOBjZOQx2dSpJaCN8hU
yrfMGeGS5vUBCnWaDHuMkwJHF4km6oXyn75prT2/3mfGLNbBIZG2WbHNw07sdj6N
HNoLG4tA91p9ZXiqDbu9xHRRFjxuRm6rESpFS/UPsrhtUIzXf9pkFcugo8J1wXXv
xLEZmleHsYnR0rA8VKB1WSquAKYN+GCV+zMoKMN813lNAdE5ykYR4zpCU2qSzcFV
bga+r57YjUEAqr3K4khh1RTnMfN5rJJYDWBwdMhPqqAuBc8AYUZ+0+r8Gmgtz8+Z
M+FnZ/btyoHJ9K50Al9znDkLzRh2cZ0XSRkPbQIDAQABAoIBAQDUhPr0PlZ//VT7
u81wdN9xaSUYNCkiTJ26xVdt5cnCQcV+0GYSSZzU+pfLydN0fZB0w2bAI6ETPgKK
AUIo3+bYPswrQQuSZcpGnRLBAjbeyVBc7SVPnJ0bY/oYNYDzVFFf7uXxjCxRN/iV
e2lrNgVysUIJD71euz995de/vhEJoSI04jcrP/t28yy+Swhy5Z66c+py3yp0K+mm
391FxEiCYNX+2ehg1zV6b9aSEwx2cGnSvtGKmWszxkDIWgI+I2QMVK1JVPvoRRmo
HivRMQlNUMjoIV1zna/S/mIwwiBqOAYyXVhb9JL+9zcrbkPMpBsIl8834a2T4c0N
giOGIUKBAoGBAOqp81WQrOmuhtQWPuGp4DW1YZfVJcNUr1FcsviXwJm/tJPrdMuy
iQFXaiaEuTy46UMmCapCzPV2weifu78SoxhK9pTbDS17okrO7skqR58g3y0UomT9
pSRSmBdFxlALbZRbQCmdAPM5dThtD+onUa7b7LeHj2peBSPC9pIMU4ShAoGBAOqc
7AV3b5yT+dQY7ohlkWjtAQPa//FTuOwiZeOqBBWPfJnDTq0KlTGNY7ZkoOVPgfpo
JhRFKiY0bxu9NJNh63O+1WOyH1O9Js//+GUena8G/MariI98a8OeNJJ+qJk90JUr
OndL2Pef3Mc3tHuzMdnhWDs98F6SoEpnWAQov0tNAoGBAMf2xno1bIM8y3vS8QaP
IZXi2CTv5twKP9MPMRsRBXh+mbwquj4SBxlziesE0mxiDbPAqB/ECK9q4VX/N5dc
pEpBJto1x4bogaVJrMUTGDELa+IYYUG5uo23LA840ALJmjj/gS90sKiSX8cTeKpJ
kxt0IMVL6PP05mBQ9JgDlO/BAoGAC57GGec2gfzaTOUHO348W4QRns1EDAHnkNqL
TWFoXmEC/OKtjOiPRysHm0sUpQbxGyP5btuWINpL/oW6iuo4rTzweMWjw5QEzhyR
gwCnMroX3wcz9ldlRwUY+YCIfT6QjDLd7Ha3QlyKpNtfdxkDCRWeNyD0PNrqUYUY
2OvjvakCgYBx5wehZABJKXXyX8ch3RaZ7c6xgjkryxtTyW2bdEgTija5VUvaiMwp
ySz6YDTnZiLxvowiL/UFuERtGcsal1izKyflJKUlNVue4WAqVyqlnQIEg1TPjMeP
FgCkaIn42YAYxpoHrN6gx5sEVCjxBZ4FjkU9DPL1ycivCFaaT5azQQ==
-----END RSA PRIVATE KEY-----`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('./images/logo.png')} style={styles.image} />
        </View>
        <View style={styles.buttonsContainer}>
          <StorageButton title="Hey you! Store data!" />
          <ApiButton title="Press to call fake api" color="#841584"  />
          <RealmComponent />
          <RsaComponent title='Encrypt' />
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
