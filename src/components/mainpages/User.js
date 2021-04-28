import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";

function User() {
  let state = useContext(GlobalState);
  const user = state.UserApi.user[0];

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Hello {user.username}</h1>
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
          Account created:{"  "}
          <span className="fs-6 text-lowercase">
            {new Date(user.createdAt).toString().substring(0, 31)}
          </span>
        </li>
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          Email:{"  "}
          <span className="fs-6 text-lowercase">{user.email}</span>
        </li>
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          Admin:{"  "}
          <span className="fs-6 text-lowercase">
            {user.role ? "Yes" : "No"}
          </span>
        </li>
        <li className="bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase">
          ID:{"  "}
          <span className="fs-6 text-lowercase">{user._id}</span>
        </li>
      </ul>
    </div>
  );
}

export default User;
