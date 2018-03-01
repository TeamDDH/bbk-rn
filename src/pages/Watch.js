import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
// import { ArticleList } from '../components/ArticleList'

class Watch extends React.Component {
  static navigationOptions = {
    title: '关注'
  }

  render() {
    const { isAuth } = this.props

    return (
      <View style={styles.container}>
        {isAuth ? <Text /> : <EmptyContent />}
      </View>
    )
  }
}

const EmptyContent = () => (
  <View>
    <Text style={styles.titleText}>你尚未登录</Text>
    <Text style={styles.text}>加入新闻比比看 订阅你关心的新闻</Text>
  </View>
)

export default connect(
  state => ({
    isAuth: !!state.user.token
  }),
  dispatch => ({})
)(Watch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
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
