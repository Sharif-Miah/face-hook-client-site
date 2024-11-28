import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </AuthProvider>
  </StrictMode>
);
