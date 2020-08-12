import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentReport = (props) => {
  const id = props.match.params.childid;
  const [student, setStudent] = useState({});
  const [skillsList, setSkillsList] = useState([]);

  //get all student info
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
  
  useEffect(() => {
    makeAPICall();
  }, []);

  
  //helper function
  const compare = (a, b) => {
    let comparison = 0;
    if (a.id > b.id) {
      comparison = 1;
    } else if (b.id > a.id) {
      comparison = -1;
    }
    return comparison;
  };

  //construct ordered skills list
  let orderedSkillsList = [];
  if (student.skills) {
    orderedSkillsList = student.skills.sort(compare);
  } else console.log('waiting for data')
  
  //construct ordered abilities list
  let orderedAbilitiesList = [];
  if (student.abilities) {
    orderedAbilitiesList = student.abilities.sort(compare);
  } else console.log('waiting for data')

  //toggle skill click
  const handleSkillClick = async (e) => {
    let skillId = e.target.value;
    let newStatus = !student.abilities[skillId - 1].status;
    console.log(
      "changing student " +
        student.first_name +
        " skill " +
        student.skills[skillId - 1].description +
        " to " +
        newStatus
    );
    try {
      await axios({
        url: `http://localhost:3000/abilities/1?child_id=${student.id}&skill_id=${skillId}&status=${newStatus}`,
        method: "PUT",
      });
    } catch (err) {
      console.error(err);
    }
    makeAPICall();
  };

  return (
    <div>
      <h2>Student Report</h2>

      <p>
        {student.first_name} {student.last_name}
      </p>
      <p>{student.birthday}</p>
      <ul>
        {orderedSkillsList
          ? orderedSkillsList.map((skill) => (
              <li>
                {skill.description}{" "}
                <button value={skill.id} onClick={handleSkillClick}>
                  {orderedAbilitiesList[skill.id - 1].status === true ? "X" : "O"}
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default StudentReport;