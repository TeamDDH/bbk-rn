import React from 'react'

import ArticleDisplayer from '../components/ArticleDisplayer'

export default class ArticleDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params ? params.articleTitle : '阅读文章'
    }
  }

  constructor(props) {
    super(props)
    const { params } = props.navigation.state
    const articleUrl = params ? params.articleUrl : null
    this.state = { articleUrl }
  }

  render() {
    return <ArticleDisplayer articleUrl={this.state.articleUrl} />
  }
}
