import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root container
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
