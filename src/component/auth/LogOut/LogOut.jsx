import { useNavigate } from 'react-router';
import LogoutIcon from '../../../assets/icons/logout.svg';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/');
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
