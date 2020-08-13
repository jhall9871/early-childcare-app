import React, { useContext } from "react";
import { DataContext } from "../../App";
import SkillProgressChart from "./SkillProgressChart"

const SkillsTile = ({
  skills,
  abilities,
  handleInvalidClick,
  handleSkillClick,
}) => {
  const { user } = useContext(DataContext);

    //Count % complete to send to chart
    const complete = abilities.filter(item => item.status === true).length
    const incomplete = abilities.filter(item => item.status === false).length


  if (skills.length > 0) {
    return (
      <div>
        <h3>{skills[0].category}</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={skill.id}>
              {skill.description}
              <button
                value={skill.id}
                onClick={
                  user === "teacher" ? handleSkillClick : handleInvalidClick
                }
              >
                {abilities[index] ? abilities[index].status.toString() : ""}
              </button>
            </li>
          ))}
            </ul>
            <SkillProgressChart complete={complete} incomplete={incomplete}/>
      </div>
    );
  } else return "Waiting for data";
};

export default SkillsTile;
