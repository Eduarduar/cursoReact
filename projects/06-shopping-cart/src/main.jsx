import { FiltersProvider } from './context/filters.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/output.css' // Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
