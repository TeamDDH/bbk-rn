import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { persist } from '../store'
import LoginForm from '../components/LoginForm'
import RegisterFrom from '../components/RegisterForm'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginMode: true
    }
  }

  toggleMode = () => {
    this.setState({ isLoginMode: !this.state.isLoginMode })
  }

  handleAuthSuccess = ({ expire, token, user }) => {
    this.props.setUser(user)
    this.props.setToken(token)
    this.props.navigation.goBack(null)

    persist.save({
      key: 'authInfo',
      data: {
        user,
        token
      }
    })
  }

  render() {
    const { isLoginMode } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.headerText}>{isLoginMode ? '登录' : '注册'}</Text>
          {isLoginMode ? (
            <LoginForm handleSuccess={this.handleAuthSuccess} />
          ) : (
            <RegisterFrom handleSuccess={this.handleAuthSuccess} />
          )}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {isLoginMode ? '还没有账号' : '已经拥有账号'}
          </Text>
          <Button
            onPress={this.toggleMode}
            style={styles.footerLink}
            title={isLoginMode ? '点击这里注册' : '点击这里登录'}
          />
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
    marginBottom: 120
  },
  footerText: {
    fontSize: 18,
    textAlign: 'center'
  },
  footerLink: {
    fontSize: 12
  }
})

const mapStateToProps = function(state) {
  return {}
}

const mapDispatchToProps = function(dispatch) {
  return {
    setUser: user => {
      dispatch({ type: 'SET_USER', user })
    },
    setToken: token => {
      dispatch({ type: 'SET_TOKEN', token })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
