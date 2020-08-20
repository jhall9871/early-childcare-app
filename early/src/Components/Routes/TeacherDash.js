import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../App";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import apiUrl from '../../apiConfig';

const TeacherDash = () => {
  const [students, setStudents] = useState([]);
  const { user, userType } = useContext(DataContext);

console.log('teacherdash user', user)

  // When component mounts, get all students and set in state.
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({
          url: `${apiUrl}/teachers/${user.id}`,
          method: "GET",
        });
        setStudents(response.data.children);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  // Zip back to the login page if no user.
  if (user.id === undefined) {
    console.log('redirecting')
    return <Redirect to={'/'} />
  }

  return (
    <div className="dashboard" id="teacher-dash">
      <h2>{user.salutation} {user.last_name}'s Dashboard</h2>
      <h3>Your class:</h3>
      <div className="student-map">
        {students.map((student) => (
          <Link key={student.id} to={`/childreport/${student.id}`}>
            <div className="child-tile">
              <img src={student.photo} />
              <h4>
                {student.first_name} {student.last_name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeacherDash;
