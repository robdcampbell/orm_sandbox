import React, { useEffect, useState } from "react";
import axios from "axios";

const LocalData = () => {
  const [users, setUsers] = useState([]);

  const fetchedData = async () => {
    const { data } = await axios.get("/users");
    setUsers(data);
    return data;
  };

  useEffect(() => {
    const data = fetchedData();
  }, []);

  return (
    <section className="local__data">
      {users.map((user) => (
        <section className="user__card">
          <h4>
            Name: {user.name}, ID: {user.id}
          </h4>
          <p>Message: {user.contact_email}</p>
        </section>
      ))}
    </section>
  );
};

export default LocalData;
