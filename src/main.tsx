import React from 'react'
import ReactDOM from 'react-dom/client'

// Components 
import Layout from './components/Layout/Layout'
import App from './App'

// CSS File
import './main.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  );
}