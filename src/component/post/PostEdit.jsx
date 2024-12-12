import CloseIcon from '../../assets/icons/close.svg';
import Avatar1 from '../../assets/images/avatars/avatar_1.png';
import AddPhotoIcon from '../../assets/icons/addPhoto.svg';
import PosterIcon from '../../assets/images/poster.png';

const PostEdit = () => {
  return (
    <main className='mx-auto max-w-[1020px] py-8'>
      <div className='container'>
        <div className='card relative'>
          <h6 className='mb-3 text-center text-lg font-bold lg:text-xl'>
            Create Post
          </h6>
          <button className='absolute right-3 top-3 transition-all hover:opacity-80 active:scale-95 active:opacity-70'>
            <img
              src={CloseIcon}
              alt='close'
            />
          </button>

          <form>
            <div className='mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4'>
              <div className='flex items-center gap-3'>
                <img
                  className='max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]'
                  src={Avatar1}
                  alt='avatar'
                />
                <div>
                  <h6 className='text-lg lg:text-xl'>Sumit Saha</h6>
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
              />
            </div>

            <textarea
              name='post'
              id='post'
              placeholder='Share your thoughts...'
              className='mb-4 h-[120px] w-full bg-transparent focus:outline-none lg:mb-6 lg:h-[160px]'>
              Grateful for the incredible experience of serving as the President
              of the Grand Jury board for this years Digital Marketing Award
              organized by Bangladesh Brand Forum. Judging the best digital
              marketing campaigns was not just a responsibility but a journey of
              appreciation for innovation and creativity. The judging process,
              ensuring transparency, brought to light so many beautiful
              campaigns. Cheers to the dynamic world of digital
              marketing!Grateful for the incredible experience of serving as the
              President of the Grand Jury board for this years Digital Marketing
              Award organized by Bangladesh Brand Forum. Judging the best
              digital marketing
            </textarea>

            <div className='mx-auto mb-4 flex max-w-[90%] items-center justify-center lg:mb-6'>
              <div className='relative'>
                <img
                  className='max-w-full'
                  src={PosterIcon}
                  alt='image'
                />
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
  );
};

export default PostEdit;
