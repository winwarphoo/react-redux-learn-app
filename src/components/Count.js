import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from "../store/index";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const posts = useSelector((state) => state.postsReducer.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <div>Countコンポーネント: {count}</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return { count: state.count};
// };


//export default connect(mapStateToProps)(Count);
export default Count;