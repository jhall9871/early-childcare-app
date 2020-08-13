import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentReport = (props) => {
  const id = props.match.params.childid;
  const [student, setStudent] = useState({});

  //helper function (api call)
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

  //load student info on component mount
  useEffect(() => {
    makeAPICall();
  }, []);

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
    let abilityId = orderedAbilitiesList[skillId - 1].id;
    let newStatus = !student.abilities[skillId - 1].status;
    try {
      await axios({
        url: `http://localhost:3000/abilities/${abilityId}?status=${newStatus}`,
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
              <li key={skill.id}> 
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
