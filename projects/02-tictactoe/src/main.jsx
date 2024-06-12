import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/output.css' // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// css bg-slate-900