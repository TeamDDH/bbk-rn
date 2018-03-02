import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { withFormik } from 'formik'
import { authUser } from '../api/auth'
import {
  topInputStyle,
  middleInputStyle,
  bottomInputStyle
} from '../assets/styles/mixins'

import PlainButton from '../components/PlainButton'

const enhancer = withFormik({
  mapPropsToValues: props => ({ username: '', password: '', repeat: '' }),
  validate: (values, props) => {
    const errors = {}
    const { username, password, repeat } = values

    if (username && !/^[A-Za-z0-9_]{4,16}$/i.test(username)) {
      errors.username = '用户名应为 4 到 8 位且只能包含字母和下划线'
    }
    if (repeat && password !== repeat) {
      errors.repeat = '两次输入的密码不一致'
    }

    return errors
  },
  handleSubmit: (values, { props, setErrors }) => {
    const { username, password, repeat } = values
    const { handleSuccess } = props

    if (!username) {
      setErrors(['用户名不能为空'])
      return
    }
    if (!password) {
      setErrors(['密码不能为空'])
      return
    }
    if (!repeat) {
      setErrors(['重复密码不能为空'])
      return
    }

    authUser('register', { username, password })
      .then(res => handleSuccess && handleSuccess(res))
      .catch(err => console.log(err, 'Err'))
  }
})

const RegisterForm = ({ setFieldValue, values, errors, handleSubmit }) => {
  const errorRenderer = errors => {
    const ret = []
    for (const key in errors) {
      ret.push(
        <Text key={key} style={styles.error}>
          {errors[key]}
        </Text>
      )
    }
    return ret
  }

  return (
    <View>
      <TextInput
        onChangeText={text => setFieldValue('username', text)}
        value={values.username}
        style={topInputStyle}
        clearButtonMode={'while-editing'}
        autoCorrect={false}
        autoCapitalize={'none'}
        placeholder={'用户名'}
      />
      <TextInput
        onChangeText={text => setFieldValue('password', text)}
        value={values.password}
        style={middleInputStyle}
        secureTextEntry={true}
        clearButtonMode={'while-editing'}
        clearTextOnFocus={true}
        placeholder={'密码'}
      />
      <TextInput
        onChangeText={text => setFieldValue('repeat', text)}
        value={values.repeat}
        style={bottomInputStyle}
        secureTextEntry={true}
        clearButtonMode={'while-editing'}
        clearTextOnFocus={true}
        placeholder={'重复密码'}
      />
      <View style={styles.plainButtonWrapper}>
        <PlainButton onPress={handleSubmit} title={'注册'} />
      </View>
      <View style={styles.errorWrapper}>{errorRenderer(errors)}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  plainButtonWrapper: {
    marginVertical: 8
  },
  errorWrapper: {
    marginVertical: 8
  },
  error: {
    color: '#ed4521'
  }
})

export default enhancer(RegisterForm)
