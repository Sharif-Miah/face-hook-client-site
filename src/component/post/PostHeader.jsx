/* eslint-disable no-undef */
import TreeDots from '../../assets/icons/3dots.svg';
import Time from '../../assets/icons/time.svg';
import Delete from '../../assets/icons/delete.svg';
import Edit from '../../assets/icons/edit.svg';

import { useState } from 'react';
import { getDateDifferntFormNow } from '../../utils';
import { useAvatar } from '../../hook/useAvatar';
import useAuth from '../../hook/useAuth';
import usePost from '../../hook/usePost';
import { actions } from '../../action';
import useAxios from '../../hook/useAxios';
import PostEdit from './PostEdit';
import { Link } from 'react-router';

const PostHeader = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const { avatarURL } = useAvatar(post);
  const { auth } = useAuth();
  const { dispatch } = usePost();
  const { api } = useAxios();

  const isMe = post?.author?.id == auth?.user?.id;

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleDeletePost = async () => {
    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}`
      );

      if (response.status === 200) {
        dispatch({ type: actions.post.POST_DELETED, data: post.id });
      }
    } catch (error) {
      console.error(error);
      dispatch({ type: actions.post.DATA_FETCH_ERROR, error: response.error });
    }
  };

  return (
    <>
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
                {`${getDateDifferntFormNow(post?.createAt)} ago`}
              </span>
            </div>
          </div>
        </div>

        <div className='relative'>
          {isMe && (
            <button onClick={handleShowModal}>
              <img
                src={TreeDots}
                alt='3dots of Action'
              />
            </button>
          )}

          {showModal && (
            <div className='action-modal-container'>
              <Link to='/edit'>
                <button
                  className='action-menu-item hover:text-lwsGreen'
                  onClick={() => setEditModal(true)}>
                  <img
                    src={Edit}
                    alt='Edit'
                  />
                  Edit
                </button>
              </Link>
              <button
                className='action-menu-item hover:text-red-500'
                onClick={handleDeletePost}>
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
    </>
  );
};

export default PostHeader;
