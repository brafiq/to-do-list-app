import React, { Component } from 'react';
import {
  SafeAreaView, View, ImageBackground,
} from 'react-native';

import Header from './header';
import CurrItems from './currItems';
import NewItem from './newItem';
import styles from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // add a task
  addItem = (itemData) => {
    this.setState(oldState => ({ items: [...oldState.items, itemData] }));
  }

  // remove a task
  removeItem = (itemData) => {
    this.setState(oldState => ({ items: oldState.items.filter(item => item.id !== itemData.id) }));
  }

  // remove all tasks
  removeAll = (itemData) => {
    this.setState(oldState => ({ items: [] }));
  }

  render() {
    console.log('Rendering App');
    console.log(this.state.items);

    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('./images/background.jpg')}>

      <SafeAreaView style={{ flex: 1}}>
        <View style={{ flex: 3 }}>
          <Header
            style={{ flex: 1 }}
          />
        </View>
        <View style={{ flex: 10 }}>
          <CurrItems
            items={this.state.items}
            removeItemCallBack={(itemData) => { this.removeItem(itemData); }}
          />
        </View>

        <View style={{ flex: 3 }}>
          <NewItem
            addItemCallBack={(itemData) => { this.addItem(itemData); }}
            removeAllCallBack={(itemData) => { this.removeAll(itemData); }}
          />
        </View>

      </SafeAreaView>
      </ImageBackground>
    );
  }
}
