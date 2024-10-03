import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./MenuLink.css";

const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "link active" : "link")}
    >
      {children}
    </NavLink>
  );
};

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuLink;
