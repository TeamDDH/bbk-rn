import React from 'react'
import { TextInput, View } from 'react-native'
import { withFormik } from 'formik'

import PlainButton from '../components/PlainButton'

const enhancer = withFormik({
  mapPropsToValues: props => ({ username: '', password: '', repeat: '' })
})

const RegisterForm = props => (
  <View>
    <TextInput
      onChangeText={text => props.setFieldValue('username', text)}
      value={props.values.username}
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
      style={{
        borderRadius: 0,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        borderBottomWidth: 0,
        height: 44,
        fontSize: 20,
        paddingHorizontal: 4
      }}
    />
    <TextInput
      onChangeText={text => props.setFieldValue('repeat', text)}
      value={props.values.repeat}
      style={{
        borderRadius: 4,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 44,
        fontSize: 20,
        paddingHorizontal: 4,
        marginBottom: 8
      }}
    />
    <PlainButton onPress={props.handleSubmit} title={'注册'} />
  </View>
)

export default enhancer(RegisterForm)
