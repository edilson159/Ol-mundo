import "./NotFound.css";
import erro404 from "../../assets/erro_404.png";
import ButtonMain from "../../Components/ButtonMain/ButtonMain";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const browse = useNavigate();
  return (
    <>
      <div className="contentContainer">
        <span className="text404">404</span>
        <h1 className="title">Ops! Página não encontrada.</h1>

        <p className="paragraph">
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className="paragraph">
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div className="buttonContainer" onClick={() => browse(-1)}>
          <ButtonMain size="lg">Voltar</ButtonMain>
        </div>
        <img
          src={erro404}
          alt="Cachorro de oculos e vestido como Humano"
          className="dogImage"
        />
      </div>
      <div className="emptySpace"></div>
    </>
  );
};

export default NotFound;
