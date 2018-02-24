import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class PlainButton extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: '#85cf3a',
    height: 44,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  }
})
