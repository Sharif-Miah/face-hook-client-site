import useProfile from '../hook/useProfile';
import Edit from '../assets/icons/edit.svg';
import { useState } from 'react';
import Checked from '../assets/icons/check.svg';
import useAxios from '../hook/useAxios';
import { actions } from '../action';

const Bio = () => {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);
  const { api } = useAxios();

  const handleEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });

    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );

      if (response.status === 200) {
        dispatch({ type: actions.profile.USER_DATA_EDIT, data: response.data });
      }
      setEditMode(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className='mt-4 flex items-start gap-2 lg:mt-6'>
      {!editMode ? (
        <div className='flex-1'>
          <p>{state?.user?.bio}</p>
        </div>
      ) : (
        <textarea
          className='p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md'
          value={bio}
          cols={55}
          rows={5}
          onChange={(e) => setBio(e.target.value)}
        />
      )}

      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className='flex-center h-7 w-7 rounded-full'>
          <img
            src={Edit}
            alt='Edit'
          />
        </button>
      ) : (
        <button
          onClick={handleEdit}
          className='flex-center h-7 w-7 rounded-full'>
          <img
            src={Checked}
            alt='check'
          />
        </button>
      )}
    </div>
  );
};

export default Bio;
