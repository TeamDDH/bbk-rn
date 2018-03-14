import React from 'react'
import { WebView, ActivityIndicator, View } from 'react-native'

import { container } from '../assets/styles/mixins'

const loadingIndicator = props => {
  return (
    <View style={container}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default class ArticleDisplayer extends React.Component {
  render() {
    const { articleUrl } = this.props
    return (
      <WebView renderLoading={loadingIndicator} source={{ url: articleUrl }} />
    )
  }
}
