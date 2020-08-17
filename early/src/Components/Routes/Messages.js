import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../App";
import axios from "axios";

const Messages = () => {
  const { user, userType } = useContext(DataContext);
  const [messages, setMessages] = useState([]);
  const [caregivers, setCaregivers] = useState([]);
  const id = user.id;
  const userFullName = user.first_name + " " + user.last_name;
  const [newMessage, setNewMessage] = useState({teacher_id: user.id, author: userFullName});

    console.log(newMessage);

  //helper function (api call)
  const makeAPICall = async () => {
    try {
      const response = await axios({
        url: `http://localhost:3000/${userType}s/${id}`,
        method: "GET",
      });
      setMessages(response.data.messages);
    } catch (err) {
      console.error(err);
    }
  };

  //load messages on component mount
  useEffect(() => {
    //construct the list of all caregivers
    const caregiversAPIcall = async () => {
      try {
        const response = await axios({
          url: `http://localhost:3000/caregivers`,
          method: "GET",
        });
        setCaregivers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
    caregiversAPIcall();
  }, []);

  //handle input on new message form
  const handleNewMessageInput = (e) => {
    setNewMessage({
      ...newMessage,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit new message
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessageApiCall = async () => {
      try {
        await axios.post(`http://localhost:3000/messages`, newMessage);
      } catch (err) {
        console.error(err);
      }
    };
      await newMessageApiCall();
      makeAPICall();
  };

  return (
    <div className="messages">
      <h1>Messages</h1>
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            className={
              message.author === userFullName ? "my-message" : "their-message"
            }
          >
            <h6>{message.author}</h6>
            <p className="message-content">{message.content}</p>
            <p className="message-timestamp">{message.updated_at}</p>
          </div>
        );
      })}
      <div className="message-form-containter">
        <form onSubmit={handleSubmit}>
          <label>To:</label>
          <select name="caregiver_id" onChange={handleNewMessageInput}>
            <option value=""></option>
            {caregivers.map((person) => {
              return (
                <option value={parseInt(person.id)}>
                  {person.first_name} {person.last_name}
                </option>
              );
            })}
          </select>
          <label>Message:</label>
          <input
            name="content"
            type="text"
            onChange={handleNewMessageInput}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Messages;
