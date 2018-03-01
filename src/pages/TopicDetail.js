import React from 'react'
import { View } from 'react-native'

import { fetchArticlesInTopic } from '../api/articles'
import { find } from '../utils/array'

import ArticleList from '../components/ArticleList'

/**
 * TopicDetail is a list of articles belong to this topic.
 *
 * @export
 * @class TopicDetail
 * @extends {React.Component}
 */
export default class TopicDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.topicTitle : 'A Nested Details Screen'
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
        articleTitle: target.title
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
      <View>
        <ArticleList
          data={this.state.articles}
          selectArticle={this._selectArticle}
        />
      </View>
    )
  }
}
