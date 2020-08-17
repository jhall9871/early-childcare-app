import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faComments,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../App";

const Nav = ({ handleLogOut }) => {
  const [open, setOpen] = useState(true);
  const { userType } = useContext(DataContext);

  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/messages">
        <FontAwesomeIcon icon={faComments} />
      </Link>
      <Link to={`/${userType}`}>
        <FontAwesomeIcon icon={faTachometerAlt} />
      </Link>
      <Link to="/" onClick={handleLogOut}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Link>
    </nav>
  );
};

export default Nav;
