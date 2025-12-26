import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import json from './paginator.json'
import { Table } from './testingData/table'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App json={json} Component={Table}/>
  </React.StrictMode>,
)
