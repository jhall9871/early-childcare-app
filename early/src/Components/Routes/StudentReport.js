import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentReport = (props) => {
  const id = props.match.params.childid;
  const [student, setStudent] = useState({});

  //get all student info
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({
          url: `http://localhost:3000/children/${id}`,
          method: "GET",
        });
        setStudent(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  return (
    <div>
      <h2>Student Report</h2>
      
        <p>
          {student.first_name} {student.last_name}
          </p>
          <p>{student.birthday}</p>
          <ul>
              {student.skills ? student.skills.map(skill => <li>{skill.description} {student.abilities[skill.id - 1].status === true ? "X" : ""}</li>) : ""}
          </ul>
    </div>
  );
};

export default StudentReport;
