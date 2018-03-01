import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { withFormik } from 'formik'
import {
  topInputStyle,
  middleInputStyle,
  bottomInputStyle
} from '../assets/styles/mixins'

import PlainButton from '../components/PlainButton'

const enhancer = withFormik({
  mapPropsToValues: props => ({ username: '', password: '', repeat: '' })
})

const RegisterForm = props => (
  <View>
    <TextInput
      onChangeText={text => props.setFieldValue('username', text)}
      value={props.values.username}
      style={topInputStyle}
      clearButtonMode={'while-editing'}
      autoCorrect={false}
      autoCapitalize={'none'}
      placeholder={'用户名'}
    />
    <TextInput
      onChangeText={text => props.setFieldValue('password', text)}
      value={props.values.password}
      style={middleInputStyle}
      secureTextEntry={true}
      clearButtonMode={'while-editing'}
      clearTextOnFocus={true}
      placeholder={'密码'}
    />
    <TextInput
      onChangeText={text => props.setFieldValue('repeat', text)}
      value={props.values.repeat}
      style={bottomInputStyle}
      secureTextEntry={true}
      clearButtonMode={'while-editing'}
      clearTextOnFocus={true}
      placeholder={'重复密码'}
    />
    <View style={styles.plainButtonWrapper}>
      <PlainButton onPress={props.handleSubmit} title={'注册'} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  plainButtonWrapper: {
    marginVertical: 8
  }
})

export default enhancer(RegisterForm)
