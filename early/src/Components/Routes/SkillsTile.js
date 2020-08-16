import React, { useContext } from "react";
import { DataContext } from "../../App";
import SkillProgressChart from "./SkillProgressChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const SkillsTile = ({
  skills,
  abilities,
  handleSkillClick,
}) => {
  const { userType } = useContext(DataContext);

  //Count % complete to send to chart
  const complete = abilities.filter((item) => item.status === true).length;
  const incomplete = abilities.filter((item) => item.status === false).length;

  if (skills.length > 0) {
    if (userType === "teacher") {
      return (
        <div className="skills-tile">
          <h3>{skills[0].category}</h3>
          <SkillProgressChart complete={complete} incomplete={incomplete} />
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={skill.id} className="skills-row">
                <button value={skill.id} onClick={handleSkillClick}>
                  {abilities[index].status === true ? (
                    <FontAwesomeIcon icon={faCheckCircle} />
                  ) : (
                    <FontAwesomeIcon icon={faTimesCircle} />
                  )}
                </button>

                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="skills-tile">
          <h3>{skills[0].category}</h3>
          <SkillProgressChart complete={complete} incomplete={incomplete} />

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={skill.id} className="skills-row">
                {abilities[index].status === true ? (
                  <FontAwesomeIcon icon={faCheckCircle} />
                ) : (
                  <FontAwesomeIcon icon={faTimesCircle} />
                )}

                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  } else return "Waiting for data";
};

export default SkillsTile;
