import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import { dateFormmater } from '../../assets/js/datetime'

import {
  container,
  cellContainer,
  articleCell,
  cellTitleText,
  cellDescText,
  cellTimeWrapper,
  cellTimeText
} from '../../assets/styles/mixins'

const ArticleItem = ({ onPressItem, id, title, desc, timeUpdated }) => (
  <TouchableOpacity onPress={() => onPressItem(id)} style={articleCell}>
    <View style={cellContainer}>
      <Text style={cellTitleText}>{title}</Text>
      <Text style={cellDescText}>{desc}</Text>
      <View style={cellTimeWrapper}>
        <Text style={cellTimeText}>{dateFormmater(timeUpdated)}</Text>
      </View>
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
      desc={item.content}
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
