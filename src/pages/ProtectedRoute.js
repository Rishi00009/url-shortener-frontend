import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const authToken = localStorage.getItem('authToken');

  // If no auth token is present, redirect to the login page
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the child components (like Dashboard)
  return children;
}

export default ProtectedRoute;
