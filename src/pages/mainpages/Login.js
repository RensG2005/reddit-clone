import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import login from "../../api/login";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    is: false,
    msg: "",
  });

  return (
    <>
      <form onSubmit={(e) => login(e, setLoading, setEmail, setPassword, setError, email, password)}>
        {error.is ? (
          <div className="alert alert-danger" role="alert">
            {error.msg}
          </div>
        ) : (
          ""
        )}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
            <input
              required
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              autoComplete="new-password"
            />
          </label>
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            <input
              required
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              autoComplete="new-password"
            />
          </label>
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 6 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <button
          type="submit"
          className={loading ? "btn btn-primary disabled" : "btn btn-primary"}
          disabled={loading}
        >
          {loading ? "Logging in" : "Log In"}
        </button>
      </form>

      <p>
        Don&apos;t have an account?
        <Link to="/sign-up" className="link-primary"> Sign-up</Link>
      </p>
    </>
  );
}

export default Login;
