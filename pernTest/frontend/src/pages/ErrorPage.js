import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Whoops! We've 404'D.</h1>
      <h4>
        Let's go <Link to="/">Home</Link>
      </h4>
    </div>
  );
};

export default ErrorPage;
