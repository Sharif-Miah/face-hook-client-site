/* eslint-disable no-undef */
import { useForm } from 'react-hook-form';
import useAuth from '../../hook/useAuth';
import useAxios from '../../hook/useAxios';
import usePost from '../../hook/usePost';
import useProfile from '../../hook/useProfile';
import AddPhotoIcon from '../../assets/icons/addPhoto.svg';
import Field from '../common/Field/Field';
import { actions } from '../../action';
import { useRef } from 'react';

const PostEntry = ({ onCreate }) => {
  const { auth } = useAuth();
  const { state, dispatch } = usePost();
  const { api } = useAxios();
  const { state: profile } = useProfile();
  const fileUploadRef = useRef();

  // const [imagePreviwe, setImagePreviwe] = useState(null);

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.addEventListener('change', updateImageDisplay);
    fileUploadRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();

      for (const file of fileUploadRef.current.files) {
        formData.append('image', file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts`,
        { formData }
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = profile?.user ?? auth?.user;

  const submitForm = async (formData) => {
    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts`,
        { formData }
      );

      if (response.status === 200) {
        dispatch({ type: actions.post.DATA_CREATED, data: response.data });
        // close this UI
        onCreate();
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: actions.post.DATA_FETCH_ERROR, error: response.error });
    }
  };

  return (
    <div className='card relative'>
      <h6 className='mb-3 text-center text-lg font-bold lg:text-xl'>
        Create Post
      </h6>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className='mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4'>
          <div className='flex items-center gap-3'>
            <img
              className='max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]'
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                auth?.user?.avatar
              }`}
              alt='avatar'
            />
            <div>
              <h6 className='text-lg lg:text-xl'>
                {user?.firstName} {user?.lastName}
              </h6>

              <span className='text-sm text-gray-400 lg:text-base'>Public</span>
            </div>
          </div>

          <label
            className='btn-primary cursor-pointer !text-gray-100'
            htmlFor='photo'>
            <img
              src={AddPhotoIcon}
              alt='Add Photo'
            />
            Add Photo
          </label>
          <input
            type='file'
            name='photo'
            id='photo'
            accept='image/*'
            {...register('image')}
            onChange={handleImageUpload}
            ref={fileUploadRef}
            className='hidden'
          />
        </div>

        <Field
          label=''
          error={errors.content}>
          <textarea
            {...register('content', {
              required: 'Adding some text is mandatory!',
            })}
            name='content'
            id='content'
            placeholder='Share your thoughts...'
            className='h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]'></textarea>
        </Field>
        {state.image && (
          <img
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state.image}`}
            name='image'
            id='image'
            alt='Selected'
            className='w-1/2 mx-auto'
          />
        )}
        <div className='border-t border-[#3F3F3F] pt-4 lg:pt-6'>
          <button
            className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
            type='submit'>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEntry;
