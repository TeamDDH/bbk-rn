import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { withFormik } from 'formik'
import { login } from '../api/auth'
import PlainButton from '../components/PlainButton'
import { topInputStyle, bottomInputStyle } from '../assets/styles/mixins'

const enhancer = withFormik({
  mapPropsToValues: props => ({ username: '', password: '' }),
  handleSubmit: props => {
    login()
      .then(response => response.json())
      .then(res => {
        console.log(res)
      })
  }
})

// TODO: config placeholder, underline and password field.
const LoginForm = props => (
  <View>
    <TextInput
      onChangeText={text => props.setFieldValue('username', text)}
      value={props.values.username}
      autoCapitalize={'none'}
      autoCorrect={false}
      style={topInputStyle}
      clearButtonMode={'while-editing'}
      placeholder={'用户名'}
    />
    <TextInput
      onChangeText={text => props.setFieldValue('password', text)}
      value={props.values.password}
      autoCapitalize={'none'}
      autoCorrect={false}
      clearButtonMode={'while-editing'}
      clearTextOnFocus={true}
      style={bottomInputStyle}
      secureTextEntry={true}
      placeholder={'密码'}
    />
    <View style={styles.plainButtonWrapper}>
      <PlainButton onPress={props.handleSubmit} title={'登录'} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  plainButtonWrapper: {
    marginVertical: 8
  }
})

export default enhancer(LoginForm)
