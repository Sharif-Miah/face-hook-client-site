import { useRef } from 'react';
import Edit from '../assets/icons/edit.svg';
import useAxios from '../hook/useAxios';
import useProfile from '../hook/useProfile';
import { actions } from '../action';

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.addEventListener('change', updateImageDisplay);
    fileUploadRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();

      for (const file of fileUploadRef.current.files) {
        formData.append('avatar', file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      if (response.status === 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className='relative mb-12 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px] '>
      <img
        className='w-[250px] h-[230px] rounded-full'
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt={state?.user?.firstName}
      />

      <form>
        <button
          type='submit'
          className='flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80'
          onClick={handleImageUpload}>
          <img
            src={Edit}
            alt='Edit'
          />
        </button>
        <input
          id='file'
          type='file'
          hidden
          ref={fileUploadRef}
        />
      </form>
    </div>
  );
};

export default ProfileImage;
