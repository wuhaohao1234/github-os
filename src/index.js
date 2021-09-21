import { Button } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom'
import BasicExample from './components/basic-example'
import './index.less'

const App = () => <div>
  <BasicExample/>
</div>

ReactDOM.render(<React.StrictMode>
  <App/>
</React.StrictMode>, document.getElementById('root'))