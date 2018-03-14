import React from 'react'
import { View } from 'react-native'
import '@expo/vector-icons'
import Toast from 'react-native-easy-toast'

import TopicList from '../components/lists/TopicList'
import { fetchNewTopicsInPage } from '../api/topics'
import { find } from '../assets/js/array'
import { container } from '../assets/styles/mixins'

export default class Main extends React.Component<{}> {
  static navigationOptions = {
    title: '首页'
  }

  constructor(props: Object) {
    super(props)
    this.state = {
      topics: [],
      currentPage: 1,
      refreshing: true,
      fetching: false,
      hasNext: true
    }
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

  render() {
    return (
      <View style={container}>
        <TopicList
          topics={this.state.topics}
          selectTopic={this._selectTopic}
          onRefresh={this._refresh}
          refreshing={this.state.refreshing}
          onRequireMore={this._onRequireMore}
        />
        <Toast
          ref="toast"
          style={{ backgroundColor: 'red' }}
          position="bottom"
          positionValue={250}
          opacity={0.8}
          textStyle={{ color: 'white' }}
        />
      </View>
    )
  }

  _onRequireMore = () => {
    const currentPage = this.state.currentPage
    this._fetchTopicsInPage(currentPage).then(() => {
      this.setState({ currentPage: currentPage + 1 })
    })
  }

  _refresh = () => {
    this.setState({ topics: [], refreshing: true })
    this._fetchTopicsInPage(1).then(() => {
      this.setState({ currentPage: 2 })
    })
  }

  _fetchTopicsInPage(pageNumber) {
    if (this.state.fetching) return

    this.setState({ fetching: true })

    return fetchNewTopicsInPage(pageNumber)
      .then(({ newTopics, hasNext }) => {
        if (newTopics && newTopics.length === 0) {
          this.refs.toast.show('没有更多的主题了', 4000)
        } else {
          this.setState({
            topics: this.state.topics.concat(newTopics)
          })
        }
        this.setState({
          hasNext,
          fetching: false,
          refreshing: false
        })
      })
      .catch(() => {
        this.setState({ fetching: false, refreshing: false })
        this.refs.toast.show('网络错误，请检查网络连接', 2000)
      })
  }
}
