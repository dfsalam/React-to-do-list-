import PropTypes from 'prop-types';
import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object,
    PropTypes.bool, PropTypes.func]).isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
