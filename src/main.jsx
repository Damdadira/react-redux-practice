import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'
import rootReducer from './modules'
import App from './App.jsx'
import './index.css'

const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
