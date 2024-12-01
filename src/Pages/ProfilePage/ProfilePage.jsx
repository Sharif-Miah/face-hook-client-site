/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useAxios from '../../hook/useAxios';
import useAuth from '../../hook/useAuth';
import { actions } from '../../action';
import useProfile from '../../hook/useProfile';
import ProfileInfo from '../../profile/ProfileInfo';
import MyPosts from '../../profile/MyPosts';

const ProfilePage = () => {
  const { api } = useAxios();
  const { auth } = useAuth();
  const { state, dispatch } = useProfile();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });

    const fefchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fefchProfile();
  }, []);

  if (state?.loading) {
    return <div>Fetching your Profile data...</div>;
  }

  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default ProfilePage;
