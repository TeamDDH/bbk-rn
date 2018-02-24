import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'

/**
 * This components renders a `Topic` as a cell in `TopicList`.
 *
 * @class TopicItem
 * @extends {React.PureComponent}
 */
class TopicItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._onPress}
        style={{
          height: 80,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 20
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

class EmptyTopicTable extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8
        }}
      >
        <Text>暂无</Text>
      </View>
    )
  }
}

/**
 * This components renders a list of `Topic` s as `TopicItem` s.
 *
 * @export
 * @class TopicList
 * @extends {React.Component}
 */
export default class TopicList extends React.Component {
  constructor(props) {
    super(props)
  }

  _keyExtractor = (item, index) => item.id // item is a Topic object.

  _onPressItem = id => {
    this.props.selectTopic(id)
  }

  _onRefresh = () => {
    this.props.onRefresh()
  }

  _itemRenderer = ({ item }) => (
    <TopicItem
      onPressItem={this._onPressItem}
      id={item.id}
      title={item.title}
      desc={item.desc}
    />
  )

  render() {
    return (
      <FlatList
        ListEmptyComponent={EmptyTopicTable}
        style={{
          flex: 1
        }}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._itemRenderer}
        onRefresh={this._onRefresh}
        refreshing={this.props.refreshing}
      />
    )
  }
}
