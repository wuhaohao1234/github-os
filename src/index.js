import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <div>
  hello world
  react
</div>

ReactDOM.render(<React.StrictMode>
  <App/>
</React.StrictMode>, document.getElementById('root'))