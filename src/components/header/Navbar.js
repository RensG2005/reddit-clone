import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "axios";

function Navbar() {
  let state = useContext(GlobalState);
  const [isLogged] = state.UserApi.isLogged;

  const [searchData, setSearchData] = useState([]);

  const search = async (target) => {
    if (target) {
      try {
        const data = await axios.post(`http://localhost:5000/r/search`, {
          query: target.value,
        });
        setSearchData(data.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-darkdarkdark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="mx-4 reddit_logo"
            >
              <g>
                <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
                <path
                  fill="#FFF"
                  d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
                ></path>
              </g>
            </svg>
            Reddit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="ms-4 nav-item d-flex align-items-center">
                <Link className="nav-link p-0 text-white" to="/subreddits">
                  Subreddits
                </Link>
              </li>
              {isLogged ? (
                <li className="nav-item ms-4">
                  <Link className="nav-link text-white" to="/account">
                    Account
                  </Link>
                </li>
              ) : (
                <li className="nav-item d-flex ms-4">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                  <Link
                    className="nav-link text-white btn btn-primary text-white ms-4 px-3"
                    to="/sign-up"
                  >
                    Register
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex justify-content-end">
              <input
                className="form-control me-2 bg-darkdarkdark border-0 input-text-white"
                onBlur={() =>
                  setTimeout(() => {
                    setSearchData([]);
                  }, 900)
                }
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={({ target }) => search(target)}
              />
            </form>
            {searchData.length > 0 ? (
              <ul className="list-group list-group-flush search-content">
                {searchData.map((name) => {
                  return (
                    <li key={name._id} className="list-group-item">
                      <a
                        className="link"
                        href={
                          window.location.pathname.split("/")[1] !== "r"
                            ? "r/" + name.title
                            : name.title
                        }
                      >
                        {name.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
