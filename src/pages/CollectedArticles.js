import React from 'react'
import { View } from 'react-native'
import ArticleList from '../components/ArticleList'

export default class CollectedArticles extends React.Component {
  static navigationOptions = {
    title: '收藏文章'
  }

  render() {
    return (
      <View>
        <ArticleList />
      </View>
    )
  }
}
