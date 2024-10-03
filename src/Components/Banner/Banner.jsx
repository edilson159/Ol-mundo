import "./Banner.css";
import coloredCircle from "../../assets/circulo_colorido.png";
import myPhoto from "../../assets/minha_foto.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="presentation">
        <h1 className="title">Olá Mundo</h1>

        <p className="paragraph">
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>
      <div className="images">
        <img
          src={coloredCircle}
          aria-hidden={true}
          alt=""
          className="coloredCircle"
        />
        <img src={myPhoto} alt="" className="myPhoto" />
      </div>
    </div>
  );
};

export default Banner;
