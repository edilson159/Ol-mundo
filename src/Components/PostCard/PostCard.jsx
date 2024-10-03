import { Link } from "react-router-dom";
import "./PostCard.css";
import PropTypes from "prop-types";
import ButtonMain from "../../Components/ButtonMain/ButtonMain";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <img
          src={`../../../public/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
          className="cover"
        />
        <h2 className="title">{post.titulo}</h2>
        <ButtonMain>Ler</ButtonMain>
      </div>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
