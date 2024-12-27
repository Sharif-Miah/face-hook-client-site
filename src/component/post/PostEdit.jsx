import CloseIcon from '../../assets/icons/close.svg';
import Avatar1 from '../../assets/images/avatars/avatar_1.png';
import AddPhotoIcon from '../../assets/icons/addPhoto.svg';
import PosterIcon from '../../assets/images/poster.png';
import useAuth from '../../hook/useAuth';
import usePost from '../../hook/usePost';
import useAxios from '../../hook/useAxios';
import useProfile from '../../hook/useProfile';
import Field from '../common/Field/Field';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useParams } from 'react-router';

const PostEdit = ({ post }) => {
  const { id } = useParams();

  console.log(id);

  const { auth } = useAuth();
  const { dispatch } = usePost();
  const { api } = useAxios();
  const { state: profile } = useProfile();
  const fileUploadRef = useRef();

  const user = profile?.user ?? auth?.user;

  // console.log(post);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
  };

  return (
    <>
      <main className='mx-auto max-w-[1020px] py-8'>
        <div className='container'>
          <div className='card relative'>
            <h6 className='mb-3 text-center text-lg font-bold lg:text-xl'>
              Edit Post
            </h6>
            <button
              onClick={() => setEditModal(false)}
              className='absolute right-3 top-3 transition-all hover:opacity-80 active:scale-95 active:opacity-70'>
              <img
                src={CloseIcon}
                alt='close'
              />
            </button>

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
                    <span className='text-sm text-gray-400 lg:text-base'>
                      Public
                    </span>
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
                  className='hidden'
                  ref={fileUploadRef}
                />
              </div>

              <Field
                label=''
                error={errors.postEdit}>
                <textarea
                  {...register('postEdit', {
                    required: 'Adding some text is mandatory!',
                  })}
                  // value={post.content}
                  name='postEdit'
                  id='postEdit'
                  placeholder='Share your thoughts...'
                  className='mb-4 h-[120px] w-full bg-transparent focus:outline-none lg:mb-6 lg:h-[160px]'></textarea>
              </Field>

              <div className='mx-auto mb-4 flex max-w-[90%] items-center justify-center lg:mb-6'>
                <div className='relative'>
                  {/* {post.image && (
                    <img
                      className='max-w-full'
                      src={post?.image}
                      alt='image'
                    />
                  )} */}
                  <button className='absolute right-2 top-2 transition-all hover:opacity-80 active:scale-95 active:opacity-70'>
                    <img
                      src={CloseIcon}
                      alt='close'
                    />
                  </button>
                </div>
              </div>
              <div className='border-t border-[#3F3F3F] pt-4 lg:pt-6'>
                <button
                  className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
                  type='submit'>
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default PostEdit;
