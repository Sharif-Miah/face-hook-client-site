import { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    const fefchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response?.data?.user);
        setPost(response?.data?.posts);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fefchProfile();
  }, []);

  if (loading) {
    return <div>Fetching your Profile data...</div>;
  }

  return (
    <div>
      <p>
        Welcome to {user?.firstName} {user?.lastName}
      </p>
      <p>You have {posts.length} posts here</p>
    </div>
  );
};

export default ProfilePage;
