import React, { Component } from 'react';
import { View, Image } from 'react-native';
// import styles from './styles';

export default class Header extends Component {
  render() {
    console.log('Render Header');

    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          resizeMode="contain"
          style={{ width: 1000, height: 150 }}
          source={require('./images/girlytodo.png')}
        />
      </View>
    );
  }
}
