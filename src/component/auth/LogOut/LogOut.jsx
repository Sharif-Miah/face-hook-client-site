import { useNavigate } from 'react-router';
import LogoutIcon from '../../../assets/icons/logout.svg';
import useAuth from '../../../hook/useAuth';

const LogOut = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogOut = () => {
    setAuth({});
    navigate('/login');
  };

  return (
    <button
      className='icon-btn'
      title='Logout'
      onClick={handleLogOut}>
      <img
        src={LogoutIcon}
        alt='Logout'
      />
    </button>
  );
};

export default LogOut;
