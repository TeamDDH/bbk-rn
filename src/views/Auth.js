import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import RegisterFrom from '../components/RegisterForm'

class Auth extends React.Component {
  handleLoginSubmit = () => {}
  handleRegisterSubmit = () => {}

  render() {
    const { isLoginMode, user } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.headerText}>{isLoginMode ? '登录' : '注册'}</Text>
          {isLoginMode ? (
            <LoginForm handleOnSubmit={this.handleLoginSubmit} />
          ) : (
            <RegisterFrom handleOnSubmit={this.handleRegisterSubmit} />
          )}
        </View>
        <View style={styles.footer}>
          <Text>{isLoginMode ? '还没有账号？' : '已经拥有账号了吗？'}</Text>
          {/* <Button
            onPress={this.toggleMode}
            style={styles.footerLink}
            title={isLoginMode ? '点击这里注册' : '点击这里登录'}
          /> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
  main: {
    flex: 1
  },
  headerText: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 22
  },
  footer: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 44
  },
  footerLink: {
    fontSize: 12
  }
})

function mapStateToProps(state) {
  return {
    isLoginMode: true,
    user: state.user
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
