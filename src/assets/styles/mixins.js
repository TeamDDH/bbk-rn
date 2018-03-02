import * as VAR from './variables'

export const defaultInputStyle = {
  borderRadius: 4,
  borderColor: VAR.borderColor,
  borderWidth: 1,
  height: 44,
  fontSize: 20,
  paddingLeft: 8
}

export const topInputStyle = {
  ...defaultInputStyle,
  borderBottomWidth: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0
}
export const middleInputStyle = {
  ...defaultInputStyle,
  borderBottomWidth: 0,
  borderRadius: 0
}

export const bottomInputStyle = {
  ...defaultInputStyle,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0
}

export const container = {
  flex: 1
}

export const centeredContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
