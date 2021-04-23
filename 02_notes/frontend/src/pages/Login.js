import React, { useState, useRef } from "react";

//import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  //get signup function from created AuthContext
  // const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // signup function

      // LOGIN CONTROLLER
      //await login(emailRef.current.value, passwordRef.current.value);
      history.push("/test");
    } catch (e) {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <main className="login__page">
      <section className="modal__card">
        <h2 className="">Log In</h2>
        {/* firebase sets localStorage tokens to verify 
            {currentUser.email} */}
        {error && <alert>{error}</alert>}

        <form className="login__form" onSubmit={handleSubmit}>
          <input type="email" required ref={emailRef} placeholder="Email" />
          <input
            type="password"
            required
            ref={passwordRef}
            placeholder="Password"
          />
          <button disabled={loading} type="submit" className="">
            Log In
          </button>
        </form>

        <div className="">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </section>

      <div className="">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </main>
  );
};

export default Login;
