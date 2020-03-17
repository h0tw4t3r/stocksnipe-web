import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root/Root'
import * as serviceWorker from './serviceWorker'
import { store } from './helpers'

ReactDOM.createRoot(document.getElementById('root')).render(<Root store={store} />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
