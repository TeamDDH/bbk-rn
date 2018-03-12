import React from 'react'
import _ from 'lodash'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import {
  topicCell,
  container,
  cellContainer,
  cellTitleText,
  cellTimeWrapper,
  cellTimeText,
  cellDescText,
  cellFooter,
  topicCellWrapper
} from '../../assets/styles/mixins'

const TopicCell = ({ onPressItem, desc, title, id, timeUpdated }) => (
  <View style={topicCellWrapper}>
    <TouchableOpacity style={topicCell} onPress={() => onPressItem(id)}>
      <View style={cellContainer}>
        <Text style={cellTitleText}>{title}</Text>
        {desc ? <Text style={cellDescText}>{desc}</Text> : null}
        <View style={cellTimeWrapper}>
          <Text style={cellTimeText}>
            {new Date(timeUpdated).toLocaleString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    <View style={cellFooter} />
  </View>
)

const Footer = loading => {
  return loading ? (
    <View style={styles.footer}>
      <ActivityIndicator animating size="large" />
    </View>
  ) : null
}

export default class TopicList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  _keyExtractor = (item, index) => item.id
  _onPressItem = id => this.props.selectTopic(id)
  _onRefresh = () => this.props.onRefresh()

  _onRequireMore = _.debounce(() => {
    this.props.onRequireMore()
  }, 300)

  _itemRenderer = ({ item }) => (
    <TopicCell
      onPressItem={this._onPressItem}
      id={item.id}
      title={item.title}
      desc={item.desc}
      timeUpdated={item.timeUpdated}
    />
  )

  render() {
    return (
      <FlatList
        ListFooterComponent={Footer(this.state.loading)}
        style={container}
        data={this.props.topics}
        keyExtractor={this._keyExtractor}
        renderItem={this._itemRenderer}
        onRefresh={this._onRefresh}
        onEndReached={this._onRequireMore}
        onEndReachedThreshold={0}
        refreshing={this.props.refreshing}
      />
    )
  }
}

const styles = StyleSheet.create({
  emptyTable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8
  },
  footer: {
    paddingVertical: 20
  }
})
