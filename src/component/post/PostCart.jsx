import PostCation from './PostAcation';
import PostBody from './PostBody';
import PostComment from './PostComment';
import PostHeader from './PostHeader';

const PostCart = ({ post }) => {
  return (
    <article className='card mt-6 lg:mt-8'>
      <PostHeader post={post} />
      <PostBody />
      <PostCation />
      <PostComment />
    </article>
  );
};

export default PostCart;
