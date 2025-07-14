import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('userData'));

  if (user) {
    return <Navigate to="/" replace />;
  }

  
  return children;
}

export default PublicRoute;
