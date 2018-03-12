import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import ArticleList from '../components/lists/ArticleList'
import { container, centeredContainer } from '../assets/styles/mixins'

const UnAuth = () => (
  <View style={centeredContainer}>
    <Text style={styles.titleText}>你尚未登录</Text>
    <Text style={styles.text}>加入新闻比比看 订阅你关心的新闻</Text>
  </View>
)

const Empty = () => (
  <View style={centeredContainer}>
    <Text style={styles.titleText}>暂无新文章</Text>
    <Text style={styles.text}>关注一些主题 新动态就会出现在这里</Text>
  </View>
)

class Watch extends React.Component {
  static navigationOptions = {
    title: '关注'
  }

  constructor(props) {
    super(props)

    this.state = { articles: [] }
  }

  render() {
    const { isAuth } = this.props

    return (
      <View style={container}>
        {isAuth ? (
          this.state.articles.length ? (
            <ArticleList />
          ) : (
            <Empty />
          )
        ) : (
          <UnAuth />
        )}
      </View>
    )
  }
}

// MARK: Bind

export default connect(
  state => ({
    isAuth: !!state.authInfo.token
  }),
  dispatch => ({})
)(Watch)

// MARK: Styles

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 4
  },
  text: {
    textAlign: 'center',
    color: '#9d9d9d'
  }
})
