import React from 'react'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'

import { store } from './src/store'
import { appDidMount } from './src/lifecycle'

import HomeView from './src/pages/Home'
import WatchView from './src/pages/Watch'
import MeView from './src/pages/Me'
import ArticleDetail from './src/pages/ArticleDetail'
import TopicDetail from './src/pages/TopicDetail'
import Auth from './src/pages/Auth'
import CollectedArticles from './src/pages/CollectedArticles'
import FollowedTopics from './src/pages/FollowedTopics'
import Settings from './src/pages/Settings'
import Profile from './src/pages/Profile'

const icon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state
  let iconName
  switch (routeName) {
    case 'Main':
      iconName = 'ios-home'
      break
    case 'Me':
      iconName = 'ios-contact'
      break
    default:
      iconName = 'ios-eye'
  }
  if (!focused) iconName += '-outline'
  return <Ionicons name={iconName} size={25} color={tintColor} />
}

const RootStack = StackNavigator(
  {
    Main: {
      screen: StackNavigator(
        {
          MainTab: {
            screen: TabNavigator(
              {
                Main: { screen: HomeView },
                Watch: { screen: WatchView },
                Me: { screen: MeView }
              },
              {
                navigationOptions: ({ navigation }) => ({
                  tabBarIcon: ({ focused, tintColor }) =>
                    icon(navigation, focused, tintColor)
                }),
                tabBarOptions: {
                  activeTintColor: '#85cf3a'
                },
                tabBarComponent: TabBarBottom,
                tabBarPosition: 'bottom',
                animationEnabled: false,
                swipeEnabled: true
              }
            )
          },
          ArticleDetail: { screen: ArticleDetail },
          TopicDetail: { screen: TopicDetail },
          CollectedArticles: { screen: CollectedArticles },
          FollowedTopics: { screen: FollowedTopics },
          Settings: { screen: Settings },
          Profile: { screen: Profile }
        },
        {
          navigationOptions: {
            headerTintColor: '#85cf3a'
          }
        }
      )
    },
    AuthModal: { screen: Auth }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default class App extends React.Component<{}> {
  componentDidMount() {
    appDidMount()
  }

  render() {
    return (
      // Provide React Redux support.
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
