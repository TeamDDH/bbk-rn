import React from 'react'
import { View, Text, SectionList } from 'react-native'

import SettingListItem from '../components/SettingListItem'

const navigations = [
  {
    data: [
      {
        title: '退出登录',
        type: 'cell'
      }
    ],
    title: ' '
  }
]

export default class Settings extends React.PureComponent {
  static navigationOptions = {
    title: '设置'
  }

  _onPressItem = navigation => {}

  _keyExtractor = (item, index) => item.title

  _itemRenderer = cell => {
    const unwrapped = cell.item
    return (
      <SettingListItem
        title={unwrapped.title}
        onPressItem={this._onPressItem}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <SectionList
          renderItem={this._itemRenderer}
          keyExtractor={this._keyExtractor}
          scrollEnabled={true}
          sections={navigations}
        />
      </View>
    )
  }
}
