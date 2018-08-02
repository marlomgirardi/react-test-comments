import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import base from './base'

const rootElement = document.getElementById('root')
ReactDOM.render(<App base={base} />, rootElement)
