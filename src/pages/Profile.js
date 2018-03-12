import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { centeredContainer } from '../assets/styles/mixins'

export default class Profile extends React.Component {
  render() {
    return (
      <View style={centeredContainer}>
        <Text style={styles.title}>Profile</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#9d9d9d'
  }
})
