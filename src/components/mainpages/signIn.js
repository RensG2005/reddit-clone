import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [error, setError] = useState({ is: false, msg: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");

  const signin = async (e) => {
    try {
      e.preventDefault();

      const data = await axios.post("http://www.localhost:5000/user/sign-up", {
        email,
        password,
        username: name,
        password2,
      });

      localStorage.setItem("firstLogin", true);
      localStorage.setItem("refreshtoken", data.data.refreshtoken);

      window.location.href = "/";
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
  };

  return (
    <>
      {error.is ? (
        <div className="alert alert-danger" role="alert">
          {error.msg}
        </div>
      ) : (
        ""
      )}
      <form onSubmit={signin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={({ target }) => setEmail(target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Display Name
          </label>
          <input
            type="username"
            className="form-control"
            id="InputUsername"
            aria-describedby="nameHelp"
            onChange={({ target }) => setName(target.value)}
          />
          <div id="nameHelp" className="form-text">
            We'll use this name to reference you on our site
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={({ target }) => setPassword(target.value)}
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 6 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword2" className="form-label">
            Validate Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword2"
            onChange={({ target }) => setPassword2(target.value)}
          />
          <div id="nameHelp" className="form-text">
            Type your password again
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default SignIn;
