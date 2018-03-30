import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Theme from './Theme'

const app = (
  <Theme>
    <App/>
  </Theme>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
