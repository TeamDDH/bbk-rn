import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import SettingList from '../components/SettingList'

const avatarCell = {
  title: 'Avatar',
  desc: 'Avatar & Cell',
  type: 'avatar',
  hook: 'Avatar'
}

const sections = [
  {
    data: [avatarCell]
  },
  {
    data: [
      {
        title: '收藏文章',
        hook: 'CollectedArticles'
      },
      {
        title: '关注话题',
        hook: 'FollowedTopics'
      }
    ],
    title: '阅读'
  },
  {
    data: [
      {
        title: '我发表的评论',
        hook: 'PostedComments'
      }
    ],
    title: '社区'
  },
  {
    data: [
      {
        title: '设置',
        hook: 'Settings'
      }
    ],
    title: ' '
  }
]

class Me extends React.Component {
  static navigationOptions = {
    title: '我'
  }

  _onPressItem = hook => {
    if (hook === 'Avatar') {
      this.props.navigation.navigate(
        this.props.isAuth ? 'Profile' : 'AuthModal'
      )
    } else if (this.props.isAuth) {
      this.props.navigation.navigate(hook)
    }
  }

  _onPressSettingsItem = navigation => {}

  render() {
    const { isAuth, user } = this.props
    if (isAuth) {
      avatarCell.hasUser = true
      avatarCell.user = user
    } else {
      avatarCell.hasUser = false
      avatarCell.user = null
    }

    return (
      <View style={styles.wrapper}>
        <SettingList onPressItem={this._onPressItem} sections={sections} />
      </View>
    )
  }
}

export default connect(state => ({
  isAuth: !!state.user.token,
  user: state.user
}))(Me)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20
  }
})
