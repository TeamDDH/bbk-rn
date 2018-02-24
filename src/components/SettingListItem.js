import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

export default class SettingListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.navigation)
  }

  render() {
    const type = this.props.type || 'default'
    return type === 'avatar' ? (
      <TouchableOpacity
        onPress={this._onPress}
        style={{
          height: 120,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 20
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 22 }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={this._onPress}
        style={{
          height: 44,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 20
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
