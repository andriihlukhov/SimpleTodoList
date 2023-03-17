import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './components/Layout/Layout'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Layout>
			<App />
		</Layout>
  </React.StrictMode>,
)
