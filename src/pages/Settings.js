import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { cache } from '../store'
import SettingList from '../components/lists/SettingList'

const sections = [
  {
    data: [
      {
        title: '退出登录',
        type: 'cell',
        hook: 'quit'
      }
    ]
  }
]

class Settings extends React.PureComponent {
  static navigationOptions = {
    title: '设置'
  }

  _onPressItem = hook => {
    if (hook === 'quit') {
      this.props.unAuth()
      this.props.navigation.goBack(null)
    }
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <SettingList sections={sections} onPressItem={this._onPressItem} />
      </View>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    unAuth: () => {
      dispatch({ type: 'UN_AUTH' })
      cache.remove({ key: 'authInfo' })
    }
  }
}

export default connect(() => ({}), mapDispatchToProps)(Settings)
