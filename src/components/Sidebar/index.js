import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoSmall from "../../assets/images/lalle1.jpg";
import LogoSubs from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-brands-svg-icons";
import "../Sidebar/index.scss";
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoSmall} alt="site logo" />
        <img className="sub-logo" src={LogoSubs} alt="rk" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">

        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
