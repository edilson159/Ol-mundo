import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./Post.css";

import posts from "../../json/posts.json";
import PostModel from "../../Components/PostModel/PostModel";
import NotFound from "../../Pages/NotFound/NotFound";
import DefaultPage from "../../Components/DefaultPage/DefaultPage";

const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModel
              coverPhoto={`../../public/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
