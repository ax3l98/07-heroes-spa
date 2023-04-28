// React Router Dom
import { Navigate } from 'react-router-dom';

// /Hooks React
import { useContext } from 'react';

// AuthContext
import { AuthContext } from '../auth';

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/marvel" />;
};
