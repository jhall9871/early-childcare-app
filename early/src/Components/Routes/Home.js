import React from 'react';

const Home = ({handleLogIn, handleLogInChange}) => {
    return (
        <div id="home">
            <h1>Early</h1>
            <h2>A childcare App</h2>
            <h3>Log in:</h3>
            <form onSubmit={handleLogIn}>
                <label for="admin">Administrator</label>
                <input type="radio" name="user" value="admin" onChange={handleLogInChange}></input><br/>
                <label for="teacher">Teacher</label>
                <input type="radio" name="user" value="teacher" onChange={handleLogInChange}></input><br/>
                <label for="caregiver">Caregiver</label>
                <input type="radio" name="user" value="caregiver" onChange={handleLogInChange}></input><br/>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default Home;