import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
import { Link } from "react-router-dom";

function Subs() {
  const [Data, setData] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState({
    is: false,
    msg: "",
  });

  let state = useContext(GlobalState);
  const [isLogged] = state.UserApi.isLogged;

  const update = async () => {
    try {
      const data = await axios.post(
        "https://fast-atoll-84478.herokuapp.com/r/search",
        {
          query: "",
          limit: 200,
        }
      );
      setData(data.data);
    } catch (err) {
      if (err.response) {
        setError({ is: true, msg: err.response.data.msg });
      } else {
        setError({
          is: true,
          msg:
            "Something went wrong while fetching the data. Please try again.",
        });
      }
      setTimeout(() => {
        setError({});
      }, 3000);
    }
  };

  useEffect(() => {
    update();
  }, []);

  const createSub = async () => {
    console.log(name, desc, state.token[0])
    try {
      const data = await axios.post( "https://fast-atoll-84478.herokuapp.com/r/create",
        {
          title: name,
          description: desc,
        },
        {
          headers: {
            Authorization: state.state.token[0],
          },
        }
      );
      console.log(data);
      update();
    } catch (err) {
      if (err.response) {
        setError({ is: true, msg: err.response.data.msg });
      } else {
        setError({
          is: true,
          msg:
            "Something went wrong when creating a new sub. Please try again.",
        });
      }
      setTimeout(() => {
        setError({});
      }, 3000);
    }
  };

  return (
    <div>
      {error.is ? (
        <div className="alert alert-danger" role="alert">
          {error.msg}
        </div>
      ) : (
        ""
      )}

      <button
        type="button"
        className="btn btn-primary px-5 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Sub
      </button>

      <div className="card bg-light-card p-2 ps-4">All Comunities</div>
      {Object.keys(Data).length !== 0 ? (
        <div className="d-flex flex-column list-group list-group-flush">
          {Data.map((piece) => {
            return (
              <Link
                key={piece._id}
                className="list-group-item bg-dark-post text-white border-bottom-link fs-4"
                id={piece.id}
                to={isLogged ? "/r/" + piece.title : "/login"}
              >
                r/{piece.title}
              </Link>
            );
          })}
        </div>
      ) : (
        <div>No subs yet. Create one!</div>
      )}

      <div
        className="modal modal-fullscreen fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black" id="exampleModalLabel">
                Create Subreddit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-black"
                  >
                    Subreddit Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    This is the name your subreddit wil get and will get found
                    by.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label text-black"
                  >
                    description
                  </label>
                  <textarea
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  ></textarea>
                  <div id="emailHelp" className="form-text">
                    Max 400 characters.
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => {
                  createSub();
                }}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subs;
