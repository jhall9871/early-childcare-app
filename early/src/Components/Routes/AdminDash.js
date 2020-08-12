import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDash = () => {
  const [students, setStudents] = useState([]);

  console.log(students);
  // When component mounts, get all students and set in state.
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({
          url: `http://localhost:3000/children`,
          method: "GET",
        });
        setStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);
  return (
    <div className="dashboard" id="admin-dash">
      <h2>Admin Dash</h2>
      <ul>
        {students.map((student) => (
            <li className="admin-row">
                Name: {student.first_name} {student.last_name} |
                Birthday: {student.birthday} |
                Caregiver: {student.caregivers[0].first_name} {student.caregivers[0].last_name}:
                Teacher: {student.teachers[0].first_name} {student.teachers[0].last_name}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDash;
