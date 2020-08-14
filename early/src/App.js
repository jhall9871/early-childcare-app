import React, { useState, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import { faChalkboardTeacher, faUserFriends, faIdBadge } from '@fortawesome/free-solid-svg-icons'

import Nav from "./Components/Shared/Nav";
import Footer from "./Components/Shared/Footer";
import Home from "./Components/Routes/Home";
import AdminDash from "./Components/Routes/AdminDash";
import TeacherDash from "./Components/Routes/TeacherDash";
import CareGiverDash from "./Components/Routes/CareGiverDash";
import StudentReport from "./Components/Routes/StudentReport";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DataContext = createContext();

function App() {
  const [user, setUser] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    console.log("sign in", user);
  };

  const handleLogInChange = (e) => {
    setUser(e.target.value);
  }


  return (
    <div className="App">
      <Nav />
      <FontAwesomeIcon icon="id-badge" />
      <Switch>
        <DataContext.Provider value={{ user }}>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} handleLogIn={handleLogIn} handleLogInChange={handleLogInChange} />}
        />
        <Route exact path="/teacher" component={TeacherDash} />
        <Route exact path="/caregiver" component={CareGiverDash} />
        <Route exact path="/admin" component={AdminDash} />
        <Route
          exact
          path="/childreport/:childid"
          render={(routerProps) => <StudentReport {...routerProps} />}
          />
          </DataContext.Provider>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
