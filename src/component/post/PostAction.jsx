/* eslint-disable no-unused-vars */
import Like from '../../assets/icons/like.svg';
import Comment from '../../assets/icons/comment.svg';
import Share from '../../assets/icons/share.svg';

const PostAction = ({ postComments, postId }) => {
  return (
    <div className='flex items-center justify-between py-6 lg:px-10 lg:py-8'>
      <button className='flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm'>
        <img
          src={Like}
          alt='Like'
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
