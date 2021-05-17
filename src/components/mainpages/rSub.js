import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
import Post from "./Post";
import ls from 'localstorage-ttl'
import Loader from "../Loader";


function RSub() {
  if(localStorage.getItem("sub") != null && JSON.parse(localStorage.getItem("sub")).value.title !==  window.location.href.split("/")[window.location.href.split("/").length - 1]) {
    localStorage.removeItem("posts")
    localStorage.removeItem("sub")
  }
  const state = useContext(GlobalState);

  const [name, setName] = useState("");
  const [loader, setLoader] = useState(<Loader />);
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState({
    is: false,
    msg: "",
  });

  const update = async () => {
    if(ls.get("posts") !== null && ls.get("sub") !== null) {
      setPosts(ls.get("posts"))
      setData(ls.get("sub"))
    } else {
    try {
      const data = await axios.post(
        "https://fast-atoll-84478.herokuapp.com/r/search",
        {
          query: window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ],
          limit: 1,
        },
        {
          headers: {
            Authorization: state.token[0],
          },
        }
      );

      setData(data.data[0]);

      if (data.data[0].posts.length > 0) {
        const allPosts = data.data[0].posts;
        const data2 = await axios.post(
          "https://fast-atoll-84478.herokuapp.com/post/getbyid",
          {
            ids: allPosts,
          },
          {
            headers: {
              Authorization: state.token[0],
            },
          }
        );
        setPosts(data2.data);
        ls.set("posts", data2.data, [3600000])
        ls.set("sub", data.data[0], [3600000])
      } else {
        setPosts([]);
        setLoader(<div>
          <h2>No posts were found, Make one!</h2>
        </div>)
      }
    } catch (err) {
      console.log(err);
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
  }
  };

  useEffect(() => {
    let unmounted = false
    if(!unmounted) {
      update();
    }
    return (
      unmounted = true
    )
  }, []);

  const createPost = async () => {
    try {
      await axios.post(
        "https://fast-atoll-84478.herokuapp.com/post/create",
        {
          title: name,
          text: desc,
          creator: state.UserApi.user[0].username,
          sub: window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ],
        },
        {
          headers: {
            Authorization: state.token[0],
          },
        }
      );

      update();
    } catch (err) {
      if (err) {
        console.log(err);
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
  return (
    <>
      {error.is ? (
        <div className="alert alert-danger" role="alert">
          {error.msg}
        </div>
      ) : (
        ""
      )}
      <div className="d-flex w-100 justify-content-between">
        <div>
          {posts.length > 0 ? (
            posts.map((post) => {
              return <Post post={post} key={post._id} />;
            })
          ) : (
            
            loader


          )}
        </div>

        {data ? (
          <div className="card4 card mt-4 bg-dark-post">
            <div className="card-body">
              <div className="w-100">
                <p>About Community:</p>
                <h1 className="card-title pb-3">r/{data.title}</h1>
                <p className="card-text pt-6">{data.description}</p>
                <div className="card bg-light-card text-white px-4 pt-3 pb-2">
                  <p className="card-text fs-5">{data.members}</p>
                  <p>Members</p>
                  <p className="card-text fs-5">
                    {(data.members / 4).toFixed(0)}
                  </p>
                  <p>Online</p>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Create Post
            </button>
          </div>
        ) : (
          "No description found"
        )}

        <div
          className="modal modal-fullscreen fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Post
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Post Title
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
                      This is the name your Post wil get and will get found by.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
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
                    createPost();
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
    </>
  );
}

export default RSub;
