import React, { useState, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import apiUrl from "./apiConfig";

import Nav from "./Components/Shared/Nav";
import Home from "./Components/Routes/Home";
import AdminDash from "./Components/Routes/AdminDash";
import TeacherDash from "./Components/Routes/TeacherDash";
import CareGiverDash from "./Components/Routes/CareGiverDash";
import StudentReport from "./Components/Routes/StudentReport";
import Messages from "./Components/Routes/Messages";
import MessageDetail from "./Components/Routes/MessageDetail";
import MessageDetailCg from './Components/Routes/MessageDetailCg';
import "./App.css";

export const DataContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({}); //includes associated messages and children!
  const [userType, setUserType] = useState("");
  const [caregivers, setCaregivers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [teachers, setTeachers] = useState([]);

  // On login, set the user based on the id input.
  const handleLogIn = async (e) => {
    e.preventDefault();
    const inputUserType = Object.keys(input)[0];
    const userId = parseInt(Object.values(input)[0]);
    setUserType(inputUserType);
    const getUser = async () => {
      try {
        const response = await axios({
          url: `${apiUrl}/${inputUserType}s/${userId}`,
          method: "GET",
        });
        setUser(response.data);
        setMessages(response.data.messages);
      } catch (err) {
        console.error(err);
      }
    };
    getUser();
    // If the user is a teacher, construct a list of their associated caregivers.
    const getCaregivers = async () => {
      try {
        const response = await axios({
          url: `${apiUrl}/caregivers/fromteacher/${userId}`,
          method: "GET",
        });
        setCaregivers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    // If the user is a caregiver, construct a list of their associated teachers.
    const getTeachers = async () => {
      try {
        const response = await axios({
          url: `${apiUrl}/teachers/fromcaregiver/${userId}`,
          method: "GET",
        });
        setTeachers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (inputUserType === "teacher") {
      getCaregivers();
      setTeachers([]);
    } else if (inputUserType === "caregiver") {
      getTeachers();
      setCaregivers([]);
    }
  };

  const handleLogInChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  // When messages are sent (in MessageDetail), refresh the user.messages
  const messageReload = async () => {
    try {
      const response = await axios({
        url: `${apiUrl}/${userType}s/${user.id}`,
        method: "GET",
      });
      setMessages(response.data.messages);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogOut = () => {
    setUser({});
  };

  return (
    <div className="App">
      <DataContext.Provider value={{ user, userType }}>
        <Nav handleLogOut={handleLogOut} />
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
          <Route
            exact
            path="/messages"
            render={(routerProps) => (
              <Messages
                {...routerProps}
                caregivers={caregivers}
                teachers={teachers}
                messages={messages}
              />
            )}
          />
          <Route
            exact
            path="/messages/detail"
            render={(routerProps) => (
              <MessageDetail
                {...routerProps}
                messages={messages}
                messageReload={messageReload}
                caregivers={caregivers}
              />
            )}
          />
          <Route
            exact
            path="/messages/detail-caregiver"
            render={(routerProps) => (
              <MessageDetailCg
                {...routerProps}
                messages={messages}
                messageReload={messageReload}
                teachers={teachers}
              />
            )}
          />
        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;
