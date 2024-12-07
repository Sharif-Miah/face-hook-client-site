import LikeIcon from '../../assets/icons/like.svg';
import Comment from '../../assets/icons/comment.svg';
import Share from '../../assets/icons/share.svg';
import { useState } from 'react';
import useAxios from '../../hook/useAxios';
import LikeField from '../../assets/icons/like-filled.svg';
import useAuth from '../../hook/useAuth';

const PostAction = ({ postComments, post }) => {
  const { auth } = useAuth();
  const [like, setLike] = useState(post?.likes?.includes(auth?.user?.id));
  const { api } = useAxios();

  const handleLike = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
      );

      if (response.status === 200) {
        setLike(true);
      }
    } catch (error) {
      console.error(error);
      setLike(false);
    }
  };

  return (
    <div className='flex items-center justify-between py-6 lg:px-10 lg:py-8'>
      <button
        onClick={handleLike}
        className='flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm'>
        <img
          src={like ? LikeField : LikeIcon}
          alt='Like'
          className='w-6'
        />
        <span>Like</span>
      </button>

      <button className='icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm'>
        <img
          src={Comment}
          alt='Comment'
        />
        <span>Comment({postComments ?? 0})</span>
      </button>

      <button className='flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm'>
        <img
          src={Share}
          alt='Share'
        />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostAction;
