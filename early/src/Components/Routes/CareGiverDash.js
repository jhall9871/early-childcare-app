import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import apiUrl from "../../apiConfig";
import axios from "axios";

const CareGiverDash = () => {
  const [children, setChildren] = useState([]);
  const { user, userType } = useContext(DataContext);

  // When component mounts, get all students and set in state.
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({
          url: `${apiUrl}/caregivers/${user.id}`,
          method: "GET",
        });
        setChildren(response.data.children);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  return (
    <div className="dashboard" id="caregiver-dash">
      <h2>Caregiver Dashboard</h2>
      <h3>My children:</h3>
      <div className="student-map">
        {children.map((child) => (
          <Link key={child.id} to={`/childreport/${child.id}`}>
            <div className="child-tile">
              <img src={child.photo} />
              <h4>
                {child.first_name} {child.last_name}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareGiverDash;
