import React from 'react'
import { TextInput, View } from 'react-native'
import { withFormik } from 'formik'

import PlainButton from '../components/PlainButton'

const enhancer = withFormik({
  mapPropsToValues: props => ({ username: '', password: '' }),
  handleSubmit: props => props.handleOnSubmit
})

// TODO: config placeholder, underline and password field.
const LoginForm = props => (
  <View>
    <TextInput
      onChangeText={text => props.setFieldValue('username', text)}
      value={props.values.username}
      autoCapitalize={'none'}
      autoCorrect={false}
      style={{
        borderRadius: 4,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        height: 44,
        fontSize: 20,
        paddingHorizontal: 4
      }}
    />
    <TextInput
      onChangeText={text => props.setFieldValue('password', text)}
      value={props.values.password}
      autoCapitalize={'none'}
      autoCorrect={false}
      style={{
        marginBottom: 8,
        borderRadius: 4,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingHorizontal: 4,
        height: 44,
        fontSize: 20
      }}
    />
    <PlainButton onPress={props.handleSubmit} title={'登录'} />
  </View>
)

export default enhancer(LoginForm)
