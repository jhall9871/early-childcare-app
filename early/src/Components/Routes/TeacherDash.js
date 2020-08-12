import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const TeacherDash = () => {
  const [students, setStudents] = useState([]);

  // When component mounts, get all students and set in state.
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({
          url: `http://localhost:3000/teachers/2`,
          method: "GET",
        });
        setStudents(response.data.children);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  return (
    <div className="dashboard" id="teacher-dash">
      <h2>Teacher Dash</h2>
      <h3>Your class:</h3>
      <div className="student-map">
        {students.map((student) => (
            <Link key={student.id} to={`/childreport/${student.id}`}>
            <div className="child-tile">
                    <h4>{student.first_name} {student.last_name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeacherDash;
