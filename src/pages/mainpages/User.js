import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from './Post';
import { GlobalState } from "../../GlobalState";

function User() {
  const state = useContext(GlobalState);
  const user = state.UserApi.user[0];

  const [following, setFollowing] = useState([]);
  const [tab, setTab] = useState(1);
  const [likes, setLiked] = useState(1);

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
  const getLikes = async () => {
    try {
      const data = await axios.post(
        `${
          process.env.NODE_ENV === "production"
            ? "https://fast-atoll-84478.herokuapp.com/"
            : "http://localhost:5000/"
        }post/getbyId`,
        {
          ids: user.likes,
        },
        {
          headers: {
            Authorization: state.token[0],
          },
        }
      );
      setLiked(data.data);
    } catch (err) {
      return 0;
    }
  };

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      getfollowing();
      getLikes();
    }
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="d-flex">
          Hello
          {` ${user.username}`}
          <div className="text-center ms-3">
            {user.profilePicture && <img src={user.profilePicture} className="img-thumbnail rounded-circle img-fluid profile-picture" alt="profile" />}
          </div>
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
      <button className="btn-dark btn" type="button" onClick={() => setTab(1)}>Details</button>
      <button className="btn-dark btn mx-4" type="button" onClick={() => setTab(2)}>Following</button>
      <button className="btn-dark btn" type="button" onClick={() => setTab(3)}>Liked</button>

      {tab === 1 && (
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
      </ul>
      )}

      {tab === 2 && (
      <div className="bg-dark-post text-white fs-5 list-group-item my-4">
        Following:
          {"  "}
        <span className="fs-6 text-lowercase">
          {
              following.map(({ title, _id }) => (
                <h2 key={_id} className="m-3 border-bottom-link">
                  <Link to={`/r/${title}`}>
                    r/
                    {title}
                  </Link>
                </h2>
              ))
            }
        </span>
      </div>
      )}

      {tab === 3 && (
      <div className="text-white border-bottom-link">
        <div className="fs-6 text-lowercase">
          {
              likes.map((post) => (
                post && <Post post={post} key={post._id} />
              ))
            }
        </div>
      </div>
      )}

    </div>
  );
}

export default User;
