import React from 'react'
import { View, Text } from 'react-native'
import TopicList from '../components/lists/TopicList'

export default class RecentTopics extends React.Component {
  render() {
    return (
      <View>
        <TopicList />
      </View>
    )
  }
}
