import React, { useState, useEffect } from "react";
import axios from "axios";
import LocalData from "../components/LocalData";

const Home = () => {
  const [count, setCount] = useState(0);

  const countAction = (action) => {
    action === "inc"
      ? setCount((prev) => (prev += 1))
      : setCount((prev) => (prev -= 1));
  };

  useEffect(() => {}, []);

  return (
    <main className="home__sandbox">
      <h2>Welcome home.</h2>

      {/* <section className="counter">
        <h3>Count</h3>
        <button onClick={(e) => countAction("dec")}>-</button>
        <p>{count}</p>
        <button onClick={(e) => countAction("inc")}>+</button>
      </section> */}

      <section>
        <h3>GetData:</h3>
        <LocalData />
      </section>
    </main>
  );
};

export default Home;
