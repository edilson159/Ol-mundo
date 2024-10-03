import PropTypes from "prop-types";
import "./PostModel.css";

const PostModel = ({ coverPhoto, titulo, children }) => {
  return (
    <article className="postModelContainer">
      <div
        className="coverPhoto"
        style={{ backgroundImage: `url(${coverPhoto})` }}
      ></div>
      <h2 className="title">{titulo}</h2>

      <div className="postContentContainer">{children}</div>
    </article>
  );
};

PostModel.propTypes = {
  coverPhoto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PostModel;
