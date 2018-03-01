import React from 'react'
import { View } from 'react-native'

/**
 * ArticlesDetail contains a WebView displaying the article and a commenting
 * box.
 *
 * @export
 * @class ArticleDetail
 * @extends {React.Component}
 */
export default class ArticleDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.articleTitle : '阅读文章'
    }
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // TODO: load article and display it in web view.
  }

  render() {
    return <View />
  }
}
