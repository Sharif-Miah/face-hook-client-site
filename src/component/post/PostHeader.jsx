import TreeDots from '../../assets/icons/3dots.svg';
import Time from '../../assets/icons/time.svg';
import Delete from '../../assets/icons/delete.svg';
import Edit from '../../assets/icons/edit.svg';

import { useState } from 'react';
import { getDateDifferntFormNow } from '../../utils';
import { useAvatar } from '../../hook/useAvatar';

const PostHeader = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const { avatarURL } = useAvatar(post);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className='flex items-center justify-between gap-4'>
      <div className='flex items-center gap-3'>
        <img
          className='max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]'
          src={avatarURL}
          alt='avatar'
        />
        <div>
          <h6 className='text-lg lg:text-xl'>{post?.author?.name}</h6>
          <div className='flex items-center gap-1.5'>
            <img
              src={Time}
              alt='time'
            />
            <span className='text-sm text-gray-400 lg:text-base'>
              {`${getDateDifferntFormNow(post?.createAt)}ago`}
            </span>
          </div>
        </div>
      </div>

      <div className='relative'>
        <button onClick={handleShowModal}>
          <img
            src={TreeDots}
            alt='3dots of Action'
          />
        </button>

        {showModal && (
          <div className='action-modal-container'>
            <button className='action-menu-item hover:text-lwsGreen'>
              <img
                src={Edit}
                alt='Edit'
              />
              Edit
            </button>
            <button className='action-menu-item hover:text-red-500'>
              <img
                src={Delete}
                alt='Delete'
              />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
