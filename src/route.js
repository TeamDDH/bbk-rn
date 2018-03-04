import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import HomeView from './pages/Home'
import WatchView from './pages/Watch'
import MeView from './pages/Me'
import ArticleDetail from './pages/ArticleDetail'
import TopicDetail from './pages/TopicDetail'
import Auth from './pages/Auth'
import CollectedArticles from './pages/CollectedArticles'
import FollowedTopics from './pages/FollowedTopics'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

export default StackNavigator(
  {
    Main: {
      screen: StackNavigator({
        MainTab: {
          screen: TabNavigator(
            {
              Main: { screen: HomeView },
              Watch: { screen: WatchView },
              Me: { screen: MeView }
            },
            {
              tabBarComponent: TabBarBottom,
              tabBarPosition: 'bottom',
              animationEnabled: false,
              swipeEnabled: false
            }
          )
        },
        ArticleDetail: { screen: ArticleDetail },
        TopicDetail: { screen: TopicDetail },
        CollectedArticles: { screen: CollectedArticles },
        FollowedTopics: { screen: FollowedTopics },
        Settings: { screen: Settings },
        Profile: { screen: Profile }
      })
    },
    AuthModal: { screen: Auth }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
