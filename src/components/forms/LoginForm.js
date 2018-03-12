import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { withFormik } from 'formik'
import { authUser } from '../../api/auth'
import PlainButton from '../../components/PlainButton'
import { topInputStyle, bottomInputStyle } from '../../assets/styles/mixins'

const enhancer = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  validate: values => {
    const errors = {}
    const { username } = values

    if (username && !/^[A-Za-z0-9_]{4,16}$/i.test(username)) {
      errors.username = '用户名应为 4 到 8 位且只能包含字母和下划线'
    }

    return errors
  },
  handleSubmit: (values, { props, setErrors }) => {
    const { username, password } = values
    const { handleSuccess } = props

    if (!username) {
      setErrors(['用户名不能为空'])
      return
    }
    if (!password) {
      setErrors(['密码不能为空'])
      return
    }

    authUser('login', { username, password })
      .then(res => handleSuccess && handleSuccess(res))
      .catch(err => console.log(err))
  }
})

const LoginForm = ({ setFieldValue, values, errors, handleSubmit }) => {
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
        autoCapitalize={'none'}
        autoCorrect={false}
        style={topInputStyle}
        clearButtonMode={'while-editing'}
        placeholder={'用户名'}
      />
      <TextInput
        onChangeText={text => setFieldValue('password', text)}
        value={values.password}
        autoCapitalize={'none'}
        autoCorrect={false}
        clearButtonMode={'while-editing'}
        clearTextOnFocus={true}
        style={bottomInputStyle}
        secureTextEntry={true}
        placeholder={'密码'}
      />
      <View style={styles.plainButtonWrapper}>
        <PlainButton onPress={handleSubmit} title={'登录'} />
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

export default enhancer(LoginForm)
