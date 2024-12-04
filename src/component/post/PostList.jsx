import PostCart from './PostCart';

const PostList = ({ posts }) => {
  return (
    !!posts &&
    posts.map((post) => (
      <PostCart
        key={post.id}
        post={post}
      />
    ))
  );
};

export default PostList;
