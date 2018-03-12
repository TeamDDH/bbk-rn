import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import {
  container,
  cellContainer,
  articleCell,
  cellTitleText
} from '../../assets/styles/mixins'

const ArticleItem = ({ onPressItem, id, title, desc }) => (
  <TouchableOpacity onPress={() => onPressItem(id)} style={articleCell}>
    <View style={cellContainer}>
      <Text style={cellTitleText}>{title}</Text>
      <Text>{desc}</Text>
    </View>
  </TouchableOpacity>
)

export default class ArticleList extends React.Component {
  _keyExtractor = (item, index) => item.id
  _onPressItem = id => this.props.selectArticle(id)

  _itemRenderer = ({ item }) => (
    <ArticleItem
      onPressItem={this._onPressItem}
      id={item.id}
      title={item.title}
      desc={item.desc}
    />
  )

  render() {
    return (
      <FlatList
        style={container}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._itemRenderer}
      />
    )
  }
}
