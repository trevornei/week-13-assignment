import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Creates a root node on that renders on the DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Strict mode looks for problems in the app. 
  // App is the primary component that runs all of the other components in the app.
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
