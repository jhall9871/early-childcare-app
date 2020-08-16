import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { DataContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faChalkboardTeacher,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Home = ({ handleLogIn, handleLogInChange }) => {
    const { userType } = useContext(DataContext);

    // if (userType.length > 0) {
    //     return <Redirect to={`/${userType}`} />
    // }

  return (
    <div id="home">
      <div id="logo-container">
        <img src="https://res.cloudinary.com/des92wft8/image/upload/v1597434344/Early%20App/logo_transparent_qcf47g.png" />
      </div>
      <h2>A Childcare App</h2>
      <div className="login-wrapper">
        <h3>Log in:</h3>
        <form onSubmit={handleLogIn}>
          <div className="form-row">
            <FontAwesomeIcon icon={faIdBadge} />
            <label htmlFor="admin">Admin</label>
            <input
              type="text"
              name="admin"
              placeholder="Admin ID"
              onChange={handleLogInChange}
            ></input>
          </div>
          <div className="form-row">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <label htmlFor="teacher">Teacher</label>
            <input
              type="text"
              name="teacher"
              placeholder="Teacher ID"
              onChange={handleLogInChange}
            ></input>
          </div>
          <div className="form-row">
            <FontAwesomeIcon icon={faUserFriends} />
            <label htmlFor="caregiver">Caregiver</label>
            <input
              type="text"
              name="caregiver"
              placeholder="Caregiver ID"
              onChange={handleLogInChange}
            ></input>
          </div>
          <input type="submit" id="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Home;
