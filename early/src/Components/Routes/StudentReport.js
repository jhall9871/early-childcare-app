import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../App";
import SkillsTile from "./SkillsTile";
import axios from "axios";

const StudentReport = (props) => {
  const { user } = useContext(DataContext);
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

  //construct ordered skills list & sub-lists
  let orderedSkillsList = [];
  let kitchenskills = [];
  let selfskills = [];
  let envskills = [];
  let mannersskills = [];
  let fineskills = [];
  let artskills = [];
  let lifeskills = [];
  let grossmotorskills = [];

  if (student.skills) {
    orderedSkillsList = student.skills.sort(compare);
    grossmotorskills = orderedSkillsList.slice(0, 12);
    kitchenskills = orderedSkillsList.slice(13, 26);
    selfskills = orderedSkillsList.slice(27, 41);
    envskills = orderedSkillsList.slice(42, 53);
    mannersskills = orderedSkillsList.slice(54, 66);
    fineskills = orderedSkillsList.slice(67, 77);
    artskills = orderedSkillsList.slice(78, 90);
    lifeskills = orderedSkillsList.slice(91, 103);
  } else console.log("waiting for data");

  //construct ordered abilities list & sub-lists
  let orderedAbilitiesList = [];
  let kitchenabilities = [];
  let selfabilities = [];
  let envabilities = [];
  let mannersabilities = [];
  let fineabilities = [];
  let artabilities = [];
  let lifeabilities = [];
  let grossmotorabilities = [];
  if (student.abilities) {
    orderedAbilitiesList = student.abilities.sort(compare);
    grossmotorabilities = orderedAbilitiesList.slice(0, 12);
    kitchenabilities = orderedAbilitiesList.slice(13, 26)
    selfabilities = orderedAbilitiesList.slice(27, 41);
    envabilities = orderedAbilitiesList.slice(42, 53);
    mannersabilities = orderedAbilitiesList.slice(54, 66);
    fineabilities = orderedAbilitiesList.slice(67, 77);
    artabilities = orderedAbilitiesList.slice(78, 90);
    lifeabilities = orderedAbilitiesList.slice(91, 103);
  } else console.log("waiting for data");

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

  //click function for non-teachers
  const handleInvalidClick = () => {
    console.log("only teachers can do that.");
  };

  return (
    <div className="student-report">
      <div className="photo-card"></div>
      <div className="student-title-row"><h2>Student Report</h2></div>
      <div className="student-info-row">
        <h3>{student.first_name} {student.last_name}</h3>
        <h4>{student.pronouns}</h4>
        <h4>{student.birthday}</h4>
      </div>
      
      <div className="skills-tile-wrapper">
        <SkillsTile skills={grossmotorskills} abilities={grossmotorabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
        <SkillsTile skills={kitchenskills} abilities={kitchenabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
        <SkillsTile skills={selfskills} abilities={selfabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
        <SkillsTile skills={envskills} abilities={envabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
        <SkillsTile skills={mannersskills} abilities={mannersabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
        <SkillsTile skills={fineskills} abilities={fineabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
        <SkillsTile skills={artskills} abilities={artabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
        <SkillsTile skills={lifeskills} abilities={lifeabilities} handleInvalidClick={handleInvalidClick} handleSkillClick={handleSkillClick}/>
      </div>
    </div>
  );
};

export default StudentReport;
