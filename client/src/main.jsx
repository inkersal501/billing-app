import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import {Provider} from "react-redux";
import store from '@store/store.js';

import Modal from 'react-modal';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-center" autoClose={2000} />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
Modal.setAppElement('#root');