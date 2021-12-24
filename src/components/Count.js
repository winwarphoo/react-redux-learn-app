import React from "react";
import { useSelector } from 'react-redux';


const Count = () => {
  const count = useSelector((state) => state.countReducer.count);
  const posts = useSelector((state) => state.postsReducer.posts);
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