import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ExperimentPage from './components/experiment/ExperimentPage'
import './index.css'

const isExperiment = window.location.pathname.replace(/\/+$/, '') === '/experiment'
  || new URLSearchParams(window.location.search).get('page') === 'experiment'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isExperiment ? <ExperimentPage /> : <App />}
  </React.StrictMode>
)
