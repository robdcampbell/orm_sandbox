import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ params, userAction }) => {
  const [users, setUsers] = useState([]);
  const [newUserCount, setNewUserCount] = useState(0);

  const fetchedData = async () => {
    // put in
    const { data } = await axios.get("/users");
    setUsers(data);
    return data;
  };

  const deleteUser = async (e) => {
    e.preventDefault();

    const deleteConfirmation = window.confirm("Delete?");

    if (deleteConfirmation) {
      const userId = e.target.parentElement.id;

      // ** Fix, currently hard-coding URL endpoint - manifest proxy not working
      const res = await axios
        .delete(`http://127.0.0.1:5000/users/${userId}`, {
          data: "PTERODACTYL",
        })
        .then(() => {
          console.log("deleted!");
          console.log(res.body);
          fetchedData();
        })
        .catch((err) => console.log(err));
      await fetchedData();
    }
  };

  useEffect(() => {
    fetchedData();
  }, [newUserCount, userAction]);

  return (
    <section className="local__data">
      <button
        onClick={(e) => {
          fetchedData();
        }}
      >
        Refresh list
      </button>
      {users.map((user) => (
        <section className="user__card" key={user.id} id={user.id}>
          <h4>
            Name: {user.name}, ID: {user.id}
          </h4>
          <p>Message: {user.contact_email}</p>
          <button
            onClick={(e) => {
              setNewUserCount((prev) => (prev -= 1));
              deleteUser(e);
            }}
          >
            Delete User
          </button>
        </section>
      ))}
    </section>
  );
};

export default UserList;
