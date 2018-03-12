import React from 'react'
import { View } from 'react-native'

import ArticleList from '../components/lists/ArticleList'
import { fetchArticlesInTopic } from '../api/articles'
import { container } from '../assets/styles/mixins'
import { find } from '../utils/array'

export default class TopicDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.topicTitle : '主题详情'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      topicId: null,
      pageNumber: 1
    }
  }

  componentDidMount() {
    const { params } = this.props.navigation.state
    const topicId = params ? params.topicId : null
    this.setState({ topicId })
    this._fetchArticlesInTopic(topicId, this.state.pageNumber)
  }

  _selectArticle = id => {
    const target = find('id', this.state.articles, id)
    if (target) {
      this.props.navigation.navigate('ArticleDetail', {
        articleId: id,
        articleTitle: target.title,
        articleUrl: target.url
      })
    }
  }

  _fetchArticlesInTopic(topicId, pageNumber) {
    fetchArticlesInTopic(topicId, pageNumber)
      .then(topics => {
        const resetArticles = this.state.articles.concat(topics)
        this.setState({ articles: resetArticles })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={container}>
        <ArticleList
          data={this.state.articles}
          selectArticle={this._selectArticle}
        />
      </View>
    )
  }
}
