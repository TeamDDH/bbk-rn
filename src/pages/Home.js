import React from 'react'
import { View } from 'react-native'
import { fetchNewTopicsInPage } from '../api/topics'
import { container } from '../assets/styles/mixins'
import TopicList from '../components/TopicList'
import { Topic } from '../models'
import { find } from '../utils/array'

export default class Main extends React.Component<{}> {
  constructor(props: Object) {
    super(props)
    const stateTemplate = {
      topics: [],
      currentPage: 1,
      refreshing: true,
      hasNext: true
    }

    this.state = stateTemplate
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
    this.setState({ topics: [], currentPage: 1, refreshing: true })
    this.fetchTopicsInPage(1)
  }

  fetchTopicsInPage(pageNumber) {
    fetchNewTopicsInPage(pageNumber)
      .then(res => {
        // TODO: notify when there is no more topics.
        const { topics, has_next } = res
        const newTopics = []
        topics.forEach(item => {
          newTopics.push(
            new Topic({
              id: item._id,
              title: item.title,
              desc: item.desc
            })
          )
        })
        this.setState({
          // FIXME: Not concat, use the merge method actually. Because we are not sure
          // that server didn't update its data.
          topics: this.state.topics.concat(newTopics),
          refreshing: false,
          hasNext: has_next
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({ refreshing: false })
      })
  }

  render() {
    return (
      <View style={container}>
        <TopicList
          topics={this.state.topics}
          selectTopic={this._selectTopic}
          onRefresh={this._refresh}
          refreshing={this.state.refreshing}
        />
      </View>
    )
  }
}
