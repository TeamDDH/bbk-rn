import React from 'react'
import { Provider } from 'react-redux'
import RootStack from './src/route'
import { store } from './src/store'
import { appDidMount } from './src/utils/lifecycle'

export default class App extends React.Component<{}> {
  componentDidMount() {
    appDidMount()
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}
