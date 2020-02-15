import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
const Realm = require('realm');

export class RealmComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentDidMount() {
    const key = new Int8Array(64);  // pupulate with a secure key
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}], encryptionKey: key
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({ realm });
    });
  }

  componentWillUnmount() {
    // Close the realm if there is one open.
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  render() {
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
      : 'Loading...';

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {info}
        </Text>
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
  welcome: {
  }
});
