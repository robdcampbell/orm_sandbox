import React, { useState, useEffect } from "react";
// import axios from "axios";
import UserList from "../components/UserList";
// import { Link } from "react-router-dom";
import AddUser from "../components/AddUser";

const Home = (params) => {
  const [userAction, setUserAction] = useState(0);

  return (
    <main className="home__sandbox">
      <h2>Welcome home.</h2>
      <section className="data__section">
        <h3>GetData:</h3>
        <UserList userAction={userAction} setUserAction={setUserAction} />
      </section>
      <AddUser setUserAction={setUserAction} />
    </main>
  );
};

export default Home;
