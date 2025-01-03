import { useContext, useDebugValue } from 'react';
import { AuthContext } from '../context';

const useAuth = () => {
  const { auth } = useContext(AuthContext);

  useDebugValue(auth, (auth) =>
    auth?.user ? 'User Loged In' : 'User Loged Out'
  );

  return useContext(AuthContext);
};

export default useAuth;
