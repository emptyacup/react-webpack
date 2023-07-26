import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import RouterConfig from './router/index.tsx'
// 全局引入样式
// import 'antd/dist/reset.css'
// redux
import { Provider } from 'react-redux'
import { store } from './store/app/rootStore.ts'

class App extends Component {
  render() {
    return <div>hello World</div>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutersConfig />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
