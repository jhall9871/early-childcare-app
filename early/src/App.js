import React, { useState, createContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Nav from "./Components/Shared/Nav";
import Home from "./Components/Routes/Home";
import AdminDash from "./Components/Routes/AdminDash";
import TeacherDash from "./Components/Routes/TeacherDash";
import CareGiverDash from "./Components/Routes/CareGiverDash";
import StudentReport from "./Components/Routes/StudentReport";
import Messages from "./Components/Routes/Messages";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DataContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});
  const [userType, setUserType] = useState("");


  const handleLogIn = async (e) => {
    e.preventDefault();
    const inputUserType = Object.keys(input)[0];
    const userId = parseInt(Object.values(input)[0]);
    setUserType(inputUserType);
    try {
      const response = await axios({
        url: `http://localhost:3000/${inputUserType}s/${userId}`,
        method: "GET",
      });
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }

    // return <Redirect to={`/${userType}`} />

  };

  const handleLogInChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <DataContext.Provider value={{ user, userType }}>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <Home
                {...routerProps}
                handleLogIn={handleLogIn}
                handleLogInChange={handleLogInChange}
              />
            )}
          />
          <Route exact path="/teacher" component={TeacherDash} />
          <Route exact path="/caregiver" component={CareGiverDash} />
          <Route exact path="/admin" component={AdminDash} />
          <Route
            exact
            path="/childreport/:childid"
            render={(routerProps) => <StudentReport {...routerProps} />}
          />
          <Route exact path="/messages" component={Messages} />
        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;
