import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle } from "../helpers/auth";
const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const googleSignin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(error);
  try {
    await signin(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>
          Login to
          <Link to="/">The Chat App</Link>
        </h1>
        <p>Fill in the form below to login to your account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error ? <p>{error}</p> : null}
          <button type="submit">Login</button>
        </div>
        <button onClick={googleSignin} type="button">
        {" "}
        Sign in with Google
      </button>
        <hr />
        <p>
          Dont have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
    </>
  );
};

export default Login;
