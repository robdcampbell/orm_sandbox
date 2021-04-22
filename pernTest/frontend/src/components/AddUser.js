import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddUser = ({ setUserAction }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [newUserCount, setNewUserCount] = useState(0);

  const addUserToDB = (e) => {
    e.preventDefault();

    if (!userName || !userEmail) {
      alert("Please fill in all inputs");
    } else {
      axios
        .post("/users", {
          name: userName,
          contact_email: userEmail,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      setUserName("");
      setUserEmail("");
      setUserAction((prev) => (prev += 1));
    }
  };

  return (
    <form className="add__form">
      <h3>Add a user:</h3>
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="email">User Email</label>
      <input
        type="email"
        name="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={(e) => addUserToDB(e)}>Add User</button>
      {/* <Link to="/user-added">Add User</Link> */}
    </form>
  );
};

export default AddUser;
