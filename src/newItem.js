import React, { Component } from 'react';
import {
  View, TextInput, TouchableOpacity, Image,
} from 'react-native';

const uuid = require('uuidv4');

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  // create new task item
  onPressButtonNewItem = () => {
    const { text } = this.state;

    if (text !== '') {
      this.props.addItemCallBack({
        input: text,
        id: uuid(),
      });
    }
    this.state.text = '';
  };

  // delete all task items from array
  onPressButtonNewList = () => {
    this.props.removeAllCallBack();
  };

  onChangeText = (text) => {
    this.setState({ text });
  };

  render() {
    console.log('Rendering calculator');

    return (
      <View style={{
        flex: 3, flexDirection: 'row', justifyContent: 'center',
      }}
      >
        <View style={{
          flex: 1, flexDirection: 'column', justifyContent: 'center',
        }}
        />

        <View style={{
          flex: 13, flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <TextInput
            style={{
              height: 40, justifyContent: 'center', borderWidth: 5, borderRadius: 2,
              borderColor: 'white', textAlign: 'center', color: 'white', fontSize: 20,
            }}
            onChangeText={this.onChangeText}
            value={this.state.text}
            maxLength={16}
            placeholder="Enter new task!"
            placeholderTextColor="white"
            autoCapitalize="sentences"

          />
        </View>

        <View style={{
          flex: 1, flexDirection: 'column', justifyContent: 'center',
        }}
        />

        <View style={{
          flex: 2, flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <TouchableOpacity
            onPress={() => { this.onPressButtonNewItem(); }}
          >
            <Image
              resizeMode="contain"
              source={require('./images/submitall.png')}
              style={{
                height: 40, width: 40, fledDirection: 'row', justifyContent: 'center',
              }}

            />
          </TouchableOpacity>
        </View>

        <View style={{
          flex: 0.5, flexDirection: 'column', justifyContent: 'center',
        }}
        />

        <View style={{
          flex: 2, flexDirection: 'column', justifyContent: 'center',
        }}
        >
          <TouchableOpacity
            onPress={() => { this.onPressButtonNewList(); }}
          >
            <Image
              resizeMode="contain"
              source={require('./images/delete1.png')}
              style={{
                height: 40, width: 40, fledDirection: 'row', justifyContent: 'center',
              }}
              a
            />
          </TouchableOpacity>
        </View>

        <View style={{
          flex: 1, flexDirection: 'column', justifyContent: 'center',
        }}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//
// });
