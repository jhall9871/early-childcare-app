import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faChalkboardTeacher, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const AdminDash = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [newChild, setNewChild] = useState({});
  const [teacherAssignment, setTeacherAssignment] = useState(null);

  //helper function for ordered lists
  const compare = (a, b) => {
    let comparison = 0;
    if (a.id > b.id) {
      comparison = 1;
    } else if (b.id > a.id) {
      comparison = -1;
    }
    return comparison;
  };

  //construct ordered students list
  let orderedStudentsList = [];
  if (students.length > 0) {
    orderedStudentsList = students.sort(compare);
  } else console.log("ordered list function waiting for data");

  // Helper function (api call, set students in state, set teachers in state)
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
    try {
      const teacherResponse = await axios({
        url: `http://localhost:3000/teachers`,
        method: "GET",
      });
      setTeachers(teacherResponse.data);
    } catch (err) {
      console.error(err);
    }
  };

  // When component mounts, do api call.
  useEffect(() => {
    makeAPICall();
  }, []);

  // When delete button is pressed, delete child and re-do api call.
  // All associated Abilities, Families, and Classroom entries will be deleted first.
  const handleDelete = async (e) => {
    let childId = e.target.value;
    try {
      await axios({
        url: `http://localhost:3000/children/${childId}`,
        method: "DELETE",
      });
    } catch (err) {
      console.error(err);
    }
    makeAPICall();
  };

  // Handles input from the new child form
  const handleInputChange = (e) => {
    setNewChild({
      ...newChild,
      [e.target.name]: e.target.value,
    });
  };

  // Handles submission of the new child form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newChildApiCall = async () => {
      try {
        await axios.post(`http://localhost:3000/children`, newChild);
      } catch (err) {
        console.error(err);
      }
    };
    await newChildApiCall();
    makeAPICall();
  };

  // Handles input from the teacher select form
  // This will be a string with two integers separated by a space
  // student.id + " " + teacher.id (to be split later
  const handleTeacherSelect = (e) => {
    setTeacherAssignment(e.target.value);
  };

  // Handles submission of the teacher select form
  const handleAssignment = async (e) => {
    e.preventDefault();
    let arr = teacherAssignment.split(" ");
    let stdt = parseInt(arr[0]);
    let tchr = parseInt(arr[1]);
    // console.log('student ', stdt, ' teacher ', tchr)
    const teacherAssignAPICall = async () => {
      try {
        await axios({
          url: `http://localhost:3000/classrooms?child_id=${stdt}&teacher_id=${tchr}`,
          method: "POST"
        })
      } catch (err) {
        console.error(err)
      }
    }
    await teacherAssignAPICall();
    makeAPICall();
  };

  if (students.length > 0) {
    return (
      <div className="dashboard" id="admin-dash">
        <h2>Admin Dash</h2>
        <ul>
          {orderedStudentsList.map((student) => (
            <li key={student.id} className="admin-row">
              Name: {student.first_name} {student.last_name} | <FontAwesomeIcon icon={faBirthdayCake}/>{" "}
              {student.birthday} |
              <FontAwesomeIcon icon={faUserFriends} /> {student.caregivers.length > 0 ? student.caregivers[0].first_name : ""} | 
              <FontAwesomeIcon icon={faChalkboardTeacher} /> {student.teachers.length > 0 ? student.teachers[0].last_name : ""}
              
              <form onSubmit={handleAssignment}>
                <label>Assign a new teacher:</label>
                <select onChange={handleTeacherSelect}>
                <option value=""></option>
                  {teachers.map(teacher => {
                    return <option value={student.id + " " + teacher.id}>{teacher.last_name}</option>
                })}
                </select>
                <input type="submit" value="assign"></input>
              </form>
              <button value={student.id} onClick={handleDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="add-child-form">
          <h3>Add a child:</h3>
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              onChange={handleInputChange}
            ></input>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              onChange={handleInputChange}
            ></input>
            <label>Pronouns</label>
            <input
              type="text"
              name="pronouns"
              onChange={handleInputChange}
            ></input>
            <label>Birthday</label>
            <input
              type="text"
              name="birthday"
              onChange={handleInputChange}
            ></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    );
  } else return <h3>Waiting for data</h3>;
};

export default AdminDash;
