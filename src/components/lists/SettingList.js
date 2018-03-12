import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  TouchableOpacity
} from 'react-native'

class Avatar extends React.PureComponent {
  render() {
    const { onPress, isAuth, user } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.avatarCell}>
        <View style={styles.cellContent}>
          <Text style={styles.avatarCellTitle}>
            {isAuth ? user.username : '你尚未登录'}
          </Text>
          {isAuth ? null : (
            <Text style={styles.avatarCellDesc}>登录或注册</Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

const AvatarCell = connect(state => ({
  isAuth: !!state.authInfo.token,
  user: state.authInfo.user
}))(Avatar)

class SettingListCell extends React.PureComponent {
  _onPress = () => this.props.onPressItem(this.props.hook)

  render() {
    const { type, title } = this.props

    switch (type) {
      case 'avatar':
        return <AvatarCell onPress={this._onPress} />
      default:
        return (
          <TouchableOpacity onPress={this._onPress} style={styles.cell}>
            <View style={styles.cellContent}>
              <Text style={styles.cellTitle}>{title}</Text>
            </View>
          </TouchableOpacity>
        )
    }
  }
}

const SectionHeader = props =>
  props.title ? (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderTitle}>{props.title}</Text>
    </View>
  ) : null

export default class SettingList extends React.PureComponent {
  _keyExtractor = (item, index) => item.title

  _onPressItem = hook => {
    this.props.onPressItem(hook)
  }

  _itemRenderer = cell => {
    const unwrapped = cell.item

    return (
      <SettingListCell
        onPressItem={this._onPressItem}
        desc={unwrapped.desc}
        hook={unwrapped.hook}
        title={unwrapped.title}
        type={unwrapped.type}
      />
    )
  }

  _sectionHeaderRenderer = ({ section }) => (
    <SectionHeader title={section.title} />
  )

  render() {
    const { sections } = this.props

    return (
      <SectionList
        keyExtractor={this._keyExtractor}
        renderItem={this._itemRenderer}
        renderSectionHeader={this._sectionHeaderRenderer}
        scrollEnabled={false}
        sections={sections}
      />
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    height: 44,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20
  },
  avatarCell: {
    height: 120,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 20
  },
  cellContent: {
    flex: 1,
    justifyContent: 'center'
  },
  avatarCellTitle: {
    fontSize: 22
  },
  avatarCellDesc: {
    fontSize: 14,
    color: '#9d9d9d'
  },
  cellTitle: {
    fontSize: 16
  },
  sectionHeader: {
    padding: 16,
    paddingBottom: 8
  },
  sectionHeaderTitle: {
    color: '#9d9d9d'
  }
})
