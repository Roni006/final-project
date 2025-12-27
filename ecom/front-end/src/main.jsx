import "./index.css"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
// import Store from "./redux/Store.js";
// import { Provider } from 'react-redux' 


createRoot(document.getElementById('root')).render(
  <>
    {/* <Provider store={Store}>  */}
      <App />
      <ToastContainer />
    {/* </Provider> */}
  </>



)
