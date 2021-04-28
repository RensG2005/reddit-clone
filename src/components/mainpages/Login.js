import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    is: false,
    msg: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const data = await axios.post(
        "https://fast-atoll-84478.herokuapp.com/user/login",
        {
          email: user.email,
          password: user.password,
        }
      );

      setUser({ email: "", password: "" });

      localStorage.setItem("firstLogin", true);
      localStorage.setItem("refreshtoken", data.data.refreshtoken);

      window.location.href = document.referrer;
    } catch (err) {
      console.log(err);
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
          </label>
          <input
            required
            value={user.email}
            name="email"
            onChange={(e) => onChangeInput(e)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            required
            value={user.password}
            name="password"
            onChange={(e) => onChangeInput(e)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
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
        Don't have an account? <Link to="/sign-up">Sign-up</Link>
      </p>
    </>
  );
}

export default Login;
