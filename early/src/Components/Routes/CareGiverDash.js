import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CareGiverDash = () => {
  const [children, setChildren] = useState([]);
    
  // When component mounts, get all students and set in state.
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({
          url: `http://localhost:3000/caregivers/1`,
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
          {children.map(child => (
            <Link key={child.id} to={`/childreport/${child.id}`}>
            <div className="child-tile">
                    <h4>{child.first_name} {child.last_name}</h4>
            </div>
          </Link>
          ))}
    </div>
  );
};

export default CareGiverDash;
