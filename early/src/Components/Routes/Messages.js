import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App";
import { Link, Redirect } from "react-router-dom";
import apiUrl from "../../apiConfig";
import axios from "axios";

const Messages = ({ caregivers, teachers, messages }) => {
  const { user, userType } = useContext(DataContext);
  const userFullName = user.first_name + " " + user.last_name;

  // if there's no user, go back to login.
  if (user.id === undefined) {
    console.log("redirecting");
    return <Redirect to={"/"} />;
  }

  console.log("usertype", userType);
  console.log("teachers", teachers);
  console.log("caregivers", caregivers);

  if (userType === "teacher") {
    if (caregivers) {
      return (
        <div className="messages">
          <h2>{user.salutation} {user.last_name}'s Messages</h2>
          {caregivers.map((caregiver) => {
            let relevantMessages = messages.filter(
              (message) => message.caregiver_id === caregiver.id
            );
            return (
              <div className="thread-container">
                <Link
                  to={{
                    pathname: `messages/detail`,
                    state: { caregiver_id: caregiver.id },
                  }}
                >
                  <div className="thread-header">
                    <h4 className="thread-recipient">
                      {caregiver.first_name} {caregiver.last_name}
                    </h4>
                    <h4 className="last-message-time">
                      {relevantMessages[0]
                        ? `${relevantMessages[0].updated_at.slice(
                            11,
                            16
                          )} on ${relevantMessages[0].updated_at.slice(5, 10)}`
                        : ""}
                    </h4>
                    <h4 className="last-message-summary">
                      {relevantMessages[0]
                        ? `${relevantMessages[0].content.slice(0, 30)}...`
                        : ""}
                    </h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      );
    } else return <p>nothing yet</p>;
  } else if (userType === "caregiver") {
    return (
      <div className="messages">
        <h2>{user.salutation} {user.last_name}'s Messages</h2>
        {teachers.map((teacher) => {
            let relevantMessages = messages.filter(
              (message) => message.teacher_id === teacher.id
            );
            return (
              <div className="thread-container">
                <Link
                  to={{
                    pathname: `messages/detail-caregiver`,
                    state: { teacher_id: teacher.id },
                  }}
                >
                  <div className="thread-header">
                    <h4 className="thread-recipient">
                      {teacher.first_name} {teacher.last_name}
                    </h4>
                    <h4 className="last-message-time">
                      {relevantMessages[0]
                        ? `${relevantMessages[0].updated_at.slice(
                            11,
                            16
                          )} on ${relevantMessages[0].updated_at.slice(5, 10)}`
                        : ""}
                    </h4>
                    <h4 className="last-message-summary">
                      {relevantMessages[0]
                        ? `${relevantMessages[0].content.slice(0, 30)}...`
                        : ""}
                    </h4>
                  </div>
                </Link>
              </div>
            );
          })}      </div>
    );
  } else if (userType === "admin") {
    return <Redirect to={"/"} />
  }
};

export default Messages;
