import { Navigate, Outlet } from 'react-router';
import useAuth from '../hook/useAuth';
import Header from '../component/common/Header/Header';

const PrivateRoute = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <>
          <Header />
          <main className='mx-auto max-w-[1020px] py-8'>
            <div className='container'>
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
};

export default PrivateRoute;