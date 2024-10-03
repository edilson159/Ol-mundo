import "./Footer.css";
import TradMark from "../../assets/marca_registrada.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={TradMark} alt="" />
      Desenvolvido por Alura.
    </footer>
  );
};

export default Footer;
