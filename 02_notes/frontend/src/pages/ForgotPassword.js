import React, { useState, useRef } from "react";

//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      history.push("/");
    } catch (e) {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <main className="login__page">
      <section className="modal__card">
        <h2 className="">Reset Password</h2>
        {/* firebase sets localStorage tokens to verify 
            {currentUser.email} */}
        {error && <alert>{error}</alert>}

        <form className="login__form" onSubmit={handleSubmit}>
          <input type="email" required ref={emailRef} placeholder="Email" />
          <button disabled={loading} type="submit" className="">
            Reset by email
          </button>
        </form>

        <div className="">
          <Link to="/">Return to Login</Link>
        </div>
      </section>

      <div className="subheading">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </main>
  );
};

export default ForgotPassword;
