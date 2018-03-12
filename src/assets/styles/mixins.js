import * as VARS from './variables'

// MARK: Form
export const defaultInputStyle = {
  borderRadius: 4,
  borderColor: VARS.borderColor,
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

// MARK: Container
export const container = {
  flex: 1
}
export const centeredContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

// MARK: Cell
export const cellContainer = {
  flex: 1,
  justifyContent: 'center'
}
export const articleCell = {
  height: 100,
  backgroundColor: VARS.backgroundColor,
  paddingHorizontal: 20,
  marginBottom: 8
}
export const topicCellWrapper = {
  marginBottom: 8
}
export const topicCell = {
  height: 100,
  backgroundColor: VARS.backgroundColor,
  paddingHorizontal: 20
}
export const cellTitleText = {
  fontSize: 18
}
export const cellDescText = {
  fontSize: 14,
  color: VARS.secondaryTextColor
}
export const cellTimeWrapper = {
  position: 'absolute',
  right: 0,
  top: 20,
  height: 20,
  width: 180
}
export const cellTimeText = {
  color: VARS.secondaryTextColor,
  textAlign: 'right',
  fontSize: 12
}
export const cellFooter = {
  height: 36,
  backgroundColor: VARS.backgroundColor
}
