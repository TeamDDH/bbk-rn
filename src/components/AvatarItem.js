import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

export default class AvatarItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem()
  }

  render() {
    const { hasUser, user } = this.props
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.wrapper}>
        {hasUser ? (
          <View>
            <Text style={styles.titleText}>{user.username}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.titleText}>你尚未登录</Text>
            <Text style={styles.descText}>点击以登录或注册</Text>
          </View>
        )}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 120,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center'
  },
  titleText: { fontSize: 22 },
  descText: {
    marginTop: 4,
    color: '#9d9d9d'
  }
})
