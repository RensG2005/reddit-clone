import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    is: false,
    msg: "",
  });

  const login = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const data = await axios.post(
        `${
          process.env.NODE_ENV === "production"
            ? "https://fast-atoll-84478.herokuapp.com/"
            : "http://localhost:5000/"
        }user/login`,
        {
          email,
          password,
        }
      );

      setEmail("");
      setPassword("");

      localStorage.setItem("firstLogin", true);
      localStorage.setItem("refreshtoken", data.data.refreshtoken);

      window.location.href = "/account";
    } catch (err) {
      if (err.response) {
        setError({ is: true, msg: err.response.data.msg });
      } else {
        setError({
          is: true,
          msg: "Something went wrong when logging in. Please try again.",
        });
      }
      setTimeout(() => {
        setError({});
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={login}>
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
        <Link to="/sign-up">Sign-up</Link>
      </p>
    </>
  );
}

export default Login;
