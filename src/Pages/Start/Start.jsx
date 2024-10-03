import "./Start.css";

import posts from "../../json/posts.json";
import PostCard from "../../Components/PostCard/PostCard";

const Start = () => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Start;
