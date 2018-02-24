import React from 'react'
import { View } from 'react-native'

import { fetchNewTopicsInPage } from '../api/topics'
import { find } from '../utils/array'
import TopicList from '../components/TopicList'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      currentPage: 1,
      refreshing: false
    }
  }

  static navigationOptions = {
    title: '首页'
  }

  componentDidMount() {
    const currentPage = this.state.currentPage
    this.fetchTopicsInPage(currentPage)
    this.setState({ currentPage: currentPage + 1 })
  }

  _selectTopic = id => {
    const target = find('id', this.state.topics, id)
    if (target) {
      this.props.navigation.navigate('TopicDetail', {
        topicId: target.id,
        topicTitle: target.title
      })
    }
  }

  _refresh = () => {
    this.setState({ topics: [], currentPage: 2, refreshing: true })
    this.fetchTopicsInPage(1)
  }

  fetchTopicsInPage(pageNumber) {
    fetchNewTopicsInPage(pageNumber)
      .then(newTopics => {
        const resetTopics = this.state.topics.concat(newTopics)
        this.setState({ topics: resetTopics, refreshing: false })
      })
      .catch(err => {
        // Notify user.
        this.setState({ refreshing: false })
      })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TopicList
          data={this.state.topics}
          selectTopic={this._selectTopic}
          onRefresh={this._refresh}
          refreshing={this.state.refreshing}
        />
      </View>
    )
  }
}
