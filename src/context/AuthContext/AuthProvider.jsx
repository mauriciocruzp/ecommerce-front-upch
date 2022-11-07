import { useReducer } from 'react';

import authReducer from '../../reducers/authReducer';
import AuthContext from './AuthContext';

const INITIAL_STATE = {
  accessToken: null,
  isAthenticathed: false,
};

const AuthProvider = ({ children }) => {
  const init = initialState => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken === null) return initialState;

    return {
      ...initialState,
      accessToken,
      isAuthenticated: true,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE, init);

  const setAccessToken = accessToken => {
    dispatch({
      type: 'SET_ACCESS_TOKEN',
      payload: accessToken,
    });
    localStorage.setItem('accessToken', authState.accessToken);
  };

  const deleteToken = () => {
    localStorage.removeItem('accessToken');
  };

  const logout = () => {
    deleteToken();
    dispatch({
      type: 'LOGOUT',
      payload: INITIAL_STATE,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAccessToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;