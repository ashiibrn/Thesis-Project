import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient.js";
import user_icon from "../../assets/user/user_icon.svg";

function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch messages from the database
    axiosClient.get("/messages").then((response) => {
      setMessages(response.data);
    });
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    // Save the message to the database
    axiosClient
      .post("/messages", { sender: "message", message: newMessage })
      .then((response) => {
        setMessages([...messages, response.data]);
        setNewMessage("");
      });
  };

  return (
    <div id="message-main-container">
      <div id="message-sub-container">
        {messages.map((msg) => (
          <div
            className="message-context-container"
            key={msg.id}
            style={{
              textAlign: msg.sender === "message_tech" ? "right" : "left",
            }}
          >
            <p className="message-sender-name">{msg.sender === "message_tech" ? "Technician" : "Faculty"}</p>
            <div
            className="message-semidisplay"
              style={{
                flexDirection: msg.sender === "message_tech" ? "row-reverse" : "row ",
              }}
            >
              <img src={user_icon} alt="profile_pic" />
              <div 
              className="message-primary-container"
              style={{
                backgroundColor: msg.sender === "message_tech" ? "#042B54" : "#0A5F2C",
              }}>
                <p id="message_display" style={{color: "#FFFFFF"}}>{msg.message}</p>  
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <textarea
          name="message"
          id="message_input"
          className="message_input_textbox"
          placeholder="Write your message here."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Message;
