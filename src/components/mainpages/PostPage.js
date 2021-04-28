import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import { Link, useHistory } from "react-router-dom";

function PostPage({ setonPost }) {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const state = useContext(GlobalState);

  const [post, setPost] = useState({});
  const [Comment, setComment] = useState("");

  let id = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];

  async function comment() {
    const data2 = await axios.post(
      "http://www.localhost:5000/post/comment",
      {
        id: id,
        text: Comment,
        creator: state.UserApi.user[0].username,
        createdAt: new Date(),
      },
      {
        headers: {
          Authorization: state.token[0],
        },
      }
    );

    console.log(data2.data);
  }

  async function getPost() {
    try {
      const data2 = await axios.post(
        "http://www.localhost:5000/post/getbyid",
        {
          ids: [id],
        },
        {
          headers: {
            Authorization: state.token[0],
          },
        }
      );
      setPost(data2.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      goBack();
    }
  };

  useEffect(() => {
    setonPost(true);
    getPost();
    document.getElementById("focus").focus();

    return setonPost(false);
  }, []);

  useLayoutEffect(() => {
    return () => {
      setonPost(false);
    };
  }, []);

  return (
    <div onKeyDown={handleKeyPress} tabIndex="0" id="focus">
      {Object.keys(post).length > 0 ? (
        <div className="row">
          <div className="pointer link-bg col-sm" onClick={goBack}></div>

          <div className="py-3 w-75 card text-white bg-dark-post">
            <div className="d-flex justify-content-between">
              <p>{post.creator}</p>
              <p>{new Date(post.createdAt).toString().substring(0, 31)}</p>
            </div>
            <h1 className="py-3 border-top border-white">{post.title}</h1>
            <p className="fs-6">{post.text}</p>

            <div class="input-group mb-3 border-top border-white pt-3">
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="What are your thoughts?"
                onChange={({ target }) => setComment(target.value)}
              />
              <div class="input-group-prepend">
                <button
                  class="input-group-text"
                  id="inputGroup-sizing-default"
                  type="button"
                  onClick={() => comment()}
                >
                  Comment as {post.creator}
                </button>
              </div>
            </div>
            {post.comments.length > 0 ? (
              post.comments.map((post) => {
                return (
                  <div
                    key={post.createdAt}
                    className="my-1 border border-white p-3"
                  >
                    <div className="d-flex justify-content-between">
                      <p>
                        {new Date(post.createdAt).toString().substring(0, 31)}
                      </p>
                      <p>u/{post.creator}</p>
                    </div>
                    <p>{post.text}</p>
                  </div>
                );
              })
            ) : (
              <div>"No comments yet!"</div>
            )}
          </div>

          <div className="pointer link-bg col-sm" onClick={goBack}></div>
        </div>
      ) : (
        <>
          <p>...loading</p>
        </>
      )}
    </div>
  );
}

export default PostPage;
