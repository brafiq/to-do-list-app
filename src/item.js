import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

export default class Item extends Component {
  // remove item method
  onPressButton = () => {
    this.props.removeItemCallBack(this.props.itemData);
  };

  render() {
    console.log('Rendering new item');

    return (
      <View style={{
        flex: 2, flexDirection: 'row', justifyContent: 'center',
      }}
      >

        <View style={{
          flex: 1.5, flexDirection: 'column', justifyContent: 'center',
        }}
        />
        <View style={{
          flex: 9, flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <Text
            style={{ height: 40, fontWeight: 'bold', fontSize: 25 }}
          >
            {this.props.itemData.input}
          </Text>
        </View>

        <View style={{
          flex: 1, flexDirection: 'column', justifyContent: 'center',
        }}
        />

        <View style={{
          flex: 3, flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <TouchableOpacity
            onPress={this.onPressButton}
          >
            <Image source={require('./images/delete.png')} style={{ height: 40, width: 40, justifyContent: 'flex-start' }} a />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
