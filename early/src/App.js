import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Components/Shared/Nav";
import Footer from "./Components/Shared/Footer";
import Home from "./Components/Routes/Home";
import AdminDash from "./Components/Routes/AdminDash";
import TeacherDash from "./Components/Routes/TeacherDash";
import CareGiverDash from "./Components/Routes/CareGiverDash";
import StudentReport from "./Components/Routes/StudentReport";
import "./App.css";

function App() {
  // const [user, setUser] = useState("admin");
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teacher" component={TeacherDash} />
        <Route exact path="/caregiver" component={CareGiverDash} />
        <Route exact path="/admin" component={AdminDash} />
        <Route exact path="/childreport/:childid"
          render={(routerProps) => <StudentReport {...routerProps} />}
          />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
