import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

function User() {
  const state = useContext(GlobalState);
  const user = state.UserApi.user[0];

  const [following, setFollowing] = useState([]);

  const getfollowing = async () => {
    try {
      const data = await axios.post(
        `${
          process.env.NODE_ENV === "production"
            ? "https://fast-atoll-84478.herokuapp.com/"
            : "http://localhost:5000/"
        }r/searchById`,
        {
          ids: user.following,
        },
        {
          headers: {
            Authorization: state.token[0],
          },
        }
      );
      setFollowing(data.data);
    } catch (err) {
      return 0;
    }
  };

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      getfollowing();
    }
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>
          Hello
          {` ${user.username}`}
        </h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
      <ul className="list-group list-group-flush my-4">
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          Account created:
          {"  "}
          <span className="fs-6 text-lowercase">
            {new Date(user.createdAt).toString().substring(0, 31)}
          </span>
        </li>
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          Email:
          {"  "}
          <span className="fs-6 text-lowercase">{user.email}</span>
        </li>
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          Admin:
          {"  "}
          <span className="fs-6 text-lowercase">
            {user.role ? "Yes" : "No"}
          </span>
        </li>
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          ID:
          {"  "}
          <span className="fs-6 text-lowercase">{user._id}</span>
        </li>
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          Following:
          {"  "}
          <span className="fs-6 text-lowercase">
            {
              following.map(({ title, _id }) => (
                <h2 key={_id}><Link to={`/r/${title}`}>{title}</Link></h2>
              ))
            }
          </span>
        </li>
      </ul>
    </div>
  );
}

export default User;
