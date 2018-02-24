import React from 'react'
import { Text, View } from 'react-native'

export default class Watch extends React.Component {
  static navigationOptions = {
    title: '关注'
  }

  render() {
    return (
      <View>
        <Text>This is Watch View, holding topics followed.</Text>
      </View>
    )
  }
}
