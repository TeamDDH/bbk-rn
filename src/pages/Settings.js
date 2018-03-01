import React from 'react'
import { View } from 'react-native'
import SettingList from '../components/SettingList'

const sections = [
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

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <SettingList sections={sections} onPressItem={this._onPressItem} />
      </View>
    )
  }
}
