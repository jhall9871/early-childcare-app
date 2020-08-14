import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faChalkboardTeacher, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Home = ({handleLogIn, handleLogInChange}) => {
    return (
        <div id="home">
            <h1>Early</h1>
            <h2>A childcare App</h2>
            <h3>Log in:</h3>
            <form onSubmit={handleLogIn}>
                <label htmlFor="admin"><FontAwesomeIcon icon={faIdBadge} /> Admin</label>
                <input type="radio" name="user" value="admin" onChange={handleLogInChange}></input><br/>
                <label htmlFor="teacher"><FontAwesomeIcon icon={faChalkboardTeacher} /> Teacher</label>
                <input type="radio" name="user" value="teacher" onChange={handleLogInChange}></input><br/>
                <label htmlFor="caregiver"><FontAwesomeIcon icon={faUserFriends} /> Caregiver</label>
                <input type="radio" name="user" value="caregiver" onChange={handleLogInChange}></input><br/>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default Home;