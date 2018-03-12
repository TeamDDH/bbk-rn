import React from 'react'
import { WebView } from 'react-native'

export default class ArticleDisplayer extends React.Component {
  render() {
    const { articleUrl } = this.props
    return <WebView source={{ url: articleUrl }} />
  }
}
