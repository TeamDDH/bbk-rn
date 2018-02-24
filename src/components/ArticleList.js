import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'

/**
 * This component renders a `Article` as a cell in `ArticleList`.
 *
 * @class ArticleItem
 * @extends {React.PureComponent}
 */
class ArticleItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPress}
        style={{
          height: 120,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 20,
          borderBottomColor: 'rgba(122, 122, 122, 0.2)',
          borderBottomWidth: 1
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 22 }}>{this.props.title}</Text>
          <Text>{this.props.desc}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props)
  }

  _keyExtractor = (item, index) => item.id

  _onPressItem = id => {
    this.props.selectArticle(id)
  }

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
        style={{
          backgroundColor: '#f6f6f6'
        }}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._itemRenderer}
      />
    )
  }
}
