import React from 'react'
import ReactDOM from 'react-dom/client'

// Components 
import Layout from './components/Layout/Layout'
import App from './App'

// CSS File
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<Layout>
			<App />
		</Layout>
  </React.StrictMode>,
)
