import useAuth from '../../hook/useAuth';
import { Link } from 'react-router';

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div>
      HomePage
      <div>
        <Link to='/me'>Go to Profile Page</Link>
      </div>
    </div>
  );
};

export default HomePage;
