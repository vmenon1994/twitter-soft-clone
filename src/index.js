import React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'



function ColorfulBorder() {

  return (
    <React.Fragment>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
      <LoadingBar/ >
    </React.Fragment>
  )
}

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <ColorfulBorder />
      <Router>
        <App />
      </Router>
  </Provider> 
  ,
  document.getElementById('root')
)