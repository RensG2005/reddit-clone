import React, { useState, useEffect, useContext, useLayoutEffect, useCallback } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import { useHistory } from "react-router-dom";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Loader from "../../components/PostSkelLoader";
TimeAgo.addDefaultLocale(en)

function PostPage({ setonPost }) {
  const timeAgo = new TimeAgo('en-US')
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const state = useContext(GlobalState);

  const [post, setPost] = useState({});
  const [error, setError] = useState({
    is: false,
    msg: ""
  });
  const [Comment, setComment] = useState("");

  let id = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];

  async function comment() {
    try {
      const data2 = await axios.post(
        "https://fast-atoll-84478.herokuapp.com/post/comment",
        {
          id: id,
          text: Comment ? Comment : "",
          creator: state.UserApi.user[0].username,
          createdAt: new Date(),
        },
        {
          headers: {
            Authorization: state.token[0],
          },
        }
      );
      if(!data2.data) setError({is: true, msg: "Something went wrong while making an comment."})
    } catch (err) {
      setError({is: true, msg: err.response.data.msg})
    }
  }

  const getPost = useCallback(async () => {
    try {
      const data2 = await axios.post(
        "https://fast-atoll-84478.herokuapp.com/post/getbyid",
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
  }, [id, state.token])

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
  }, [getPost, setonPost]);

  useLayoutEffect(() => {
    return () => {
      setonPost(false);
    };
  }, [getPost, setonPost]);

  return (
    <div onKeyDown={handleKeyPress} tabIndex="0" id="focus">
            {error.is ? (
        <div className="alert alert-danger" role="alert">
          {error.msg}
        </div>
      ) : (
        ""
      )}
      {Object.keys(post).length > 0 ? (
        <div className="row">
          <div className="pointer link-bg col-sm" onClick={goBack}></div>

          <div className="py-4 w-75 card text-white bg-dark-post">
            <div className="d-flex justify-content-between">
              <p>u/{post.creator}</p>
              <p>{timeAgo.format(new Date(post.createdAt))}</p>
            </div>
            <h2 className="pt-2 pb-1 border-post">{post.title}</h2>
            <p className="fs-6">{post.text}</p>

            <div className="mb-3 border-post pt-3">
              <textarea
                className="mb-2 bg-darkdarkdark border-comment text-white width-100 p-2 form-control d-block"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="What are your thoughts?"
                type="text"
                onChange={({ target }) => setComment(target.value)}
               ></textarea>
              <div className="input-group-prepend">
                <button
                  className="input-group-text"
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
                        {timeAgo.format(new Date(post.createdAt))}
                      </p>
                      <p>u/{post.creator}</p>
                    </div>
                    <p>{post.text}</p>
                  </div>
                );
              })
            ) : (
              <div>No comments yet!</div>
            )}
          </div>

          <div className="pointer link-bg col-sm" onClick={goBack}></div>
        </div>
      ) : (<Loader />)}
    </div>
  );
}

export default PostPage;
