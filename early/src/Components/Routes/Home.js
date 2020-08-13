import React from 'react';

const Home = ({handleLogIn, handleLogInChange}) => {
    return (
        <div id="home">
            <h1>Early</h1>
            <h2>A childcare App</h2>
            <h3>Log in:</h3>
            <form onSubmit={handleLogIn}>
                <label>First Name:</label>
                <input type="text" name="first_name" onChange={handleLogInChange}></input>
                <label>Last Name:</label>
                <input type="text" name="last_name" onChange={handleLogInChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    );
};

export default Home;