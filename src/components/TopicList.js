import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native'

class TopicCell extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id)
  }

  render() {
    const { title, desc } = this.props

    return (
      <TouchableOpacity onPress={this._onPress} style={styles.topicCell}>
        <View style={styles.cellContent}>
          <Text style={styles.cellTitle}>{title}</Text>
          {desc ? <Text>{desc}</Text> : null}
        </View>
      </TouchableOpacity>
    )
  }
}

class EmptyTopicTable extends React.PureComponent {
  render() {
    return (
      <View style={styles.emptyTable}>
        <Text>暂无主题</Text>
      </View>
    )
  }
}

export default class TopicList extends React.Component {
  constructor(props) {
    super(props)
  }

  _keyExtractor = (item, index) => item.id

  _onPressItem = id => {
    this.props.selectTopic(id)
  }

  _onRefresh = () => {
    this.props.onRefresh()
  }

  _itemRenderer = ({ item }) => (
    <TopicCell
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
        style={styles.wrapper}
        data={this.props.topics}
        keyExtractor={this._keyExtractor}
        renderItem={this._itemRenderer}
        onRefresh={this._onRefresh}
        refreshing={this.props.refreshing}
      />
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  emptyTable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8
  },
  topicCell: {
    height: 80,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
    marginBottom: 8
  },
  cellContent: {
    flex: 1,
    justifyContent: 'center'
  },
  cellTitle: {
    fontSize: 22
  }
})
