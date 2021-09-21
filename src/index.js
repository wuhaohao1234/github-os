import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

const App = () => <div>
  <h1>
    hello world
  </h1>
</div>

ReactDOM.render(<React.StrictMode>
  <App/>
</React.StrictMode>, document.getElementById('root'))