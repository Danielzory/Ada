import React from "react"
import ReactDOM  from "react-dom/client"


import { App } from './pages/App'


//ReactDOM.creatRoot(document.getElementById('root')).render(<App />)

const root = document.getElementById('root')
const rootElement = ReactDOM.createRoot(root)
rootElement.render(<App />)