import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>It looks like we're a little lost...</h1>
      <p>
        Let's go home <Link to="/">Home</Link>{" "}
      </p>
    </div>
  );
};

export default Error;
