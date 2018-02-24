import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeView from './views/Home'
import WatchView from './views/Watch'
import MeView from './views/Me'
import ArticleDetail from './views/ArticleDetail'
import TopicDetail from './views/TopicDetail'
import Auth from './views/Auth'
import CollectedArticles from './views/CollectedArticles'
import FollowedTopics from './views/FollowedTopics'
import Settings from './views/Settings'

export default StackNavigator(
  {
    Main: {
      screen: StackNavigator({
        MainTab: {
          screen: TabNavigator({
            Main: { screen: HomeView },
            Watch: { screen: WatchView },
            Me: { screen: MeView }
          })
        },
        ArticleDetail: { screen: ArticleDetail },
        TopicDetail: { screen: TopicDetail },
        CollectedArticles: { screen: CollectedArticles },
        FollowedTopics: { screen: FollowedTopics },
        Settings: { screen: Settings }
      })
    },
    AuthModal: { screen: Auth }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Main'
  }
)
