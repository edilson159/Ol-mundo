import "./ButtonMain.css";
import PropTypes from "prop-types";

const ButtonMain = ({ children, size }) => {
  return <button className={`${"ButtonMain"} ${size}`}>{children}</button>;
};

ButtonMain.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default ButtonMain;
