import React from 'react'
import { Text, View, SectionList } from 'react-native'

import SettingListItem from '../components/SettingListItem'

// Cells.
const navigations = [
  {
    data: [
      {
        title: 'Avatar',
        desc: 'Do you have an avatar?',
        type: 'avatar',
        navigation: 'AuthModal'
      }
    ]
  },
  {
    data: [
      {
        title: '收藏文章',
        type: 'cell',
        navigation: 'CollectedArticles'
      },
      {
        title: '关注话题',
        type: 'cell',
        navigation: 'FollowedTopics'
      }
    ],
    title: '阅读'
  },
  {
    data: [{ title: '我发表的评论', navigation: 'PostedComments' }],
    title: '社区'
  },
  {
    data: [{ title: '设置', navigation: 'Settings' }],
    title: ' '
  }
]

const SettingListSectionHeaderItem = props => (
  <View style={{ padding: 16, paddingBottom: 8 }}>
    <Text style={{ color: '#5d5d5d' }}>{props.title}</Text>
  </View>
)

export default class Me extends React.Component {
  static navigationOptions = {
    title: '我'
  }

  _onPressItem = navigation => {
    this.props.navigation.navigate(navigation)
  }

  _keyExtractor = (item, index) => item.title

  _itemRenderer = cell => {
    const unwrapped = cell.item
    return (
      <SettingListItem
        onPressItem={this._onPressItem}
        desc={unwrapped.desc}
        navigation={unwrapped.navigation}
        title={unwrapped.title}
        type={unwrapped.type}
      />
    )
  }

  _sectionHeaderRenderer = ({ section }) =>
    section.title && <SettingListSectionHeaderItem title={section.title} />

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <SectionList
          keyExtractor={this._keyExtractor}
          renderItem={this._itemRenderer}
          renderSectionHeader={this._sectionHeaderRenderer}
          scrollEnabled={false}
          sections={navigations}
        />
      </View>
    )
  }
}
