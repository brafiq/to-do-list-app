import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import Item from './item';


export default class CurrItems extends Component {
  renderListItem({ item }) {
    console.log(this);
    return (
      <Item
        itemData={item}
        removeItemCallBack={(itemData) => { this.props.removeItemCallBack(itemData); }}
      />
    );
  }

  render() {
    console.log('Rendering calculator');

    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.props.items}
        keyExtractor={item => item.id}
        renderItem={item => this.renderListItem(item)}
      />
    );
  }
}
