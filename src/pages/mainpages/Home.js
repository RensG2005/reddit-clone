// eslint-disable-next-line object-curly-newline
import React, { useEffect, useState, useCallback, useContext } from "react";
import axios from "axios";
import Loader from "../../components/PostSkelLoader";
import { GlobalState } from "../../GlobalState";
import Post from "./Post";

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    const temporaryValue = array[currentIndex];
    // eslint-disable-next-line no-param-reassign
    array[currentIndex] = array[randomIndex];
    // eslint-disable-next-line no-param-reassign
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Home() {
  const [loader, setLoader] = useState("");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState({
    is: false,
    msg: "",
  });

  const state = useContext(GlobalState);

  const update = useCallback(async () => {
    try {
      setLoader(<Loader />);
      if (state.UserApi.user[0].following.length > 0) {
        const data = await axios.post(
          `${
            process.env.NODE_ENV === "production"
              ? "https://fast-atoll-84478.herokuapp.com/"
              : "http://localhost:5000/"
          }r/searchById`,
          {
            ids: state.UserApi.user[0].following,
          },
          {
            headers: {
              Authorization: state.token[0],
            },
          }
        );
        if (data.data.length > 0) {
          const allPosts = [];
          data.data.map((sub) => sub.posts.map((post) => allPosts.push(post.id)));
          const data2 = await axios.post(
            `${
              process.env.NODE_ENV === "production"
                ? "https://fast-atoll-84478.herokuapp.com/"
                : "http://localhost:5000/"
            }post/getById`,
            {
              ids: allPosts,
            },
            {
              headers: {
                Authorization: state.token[0],
              },
            }
          );
          const shuffled = shuffle(data2.data);
          setPosts(shuffled);
        } else {
          setPosts([]);
          setLoader(
            <div>
              <h2>No posts were found, Make one!</h2>
            </div>
          );
        }
      } else {
        setLoader(
          <h1>
            Please follow some subreddits
          </h1>
        );
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        setError({ is: true, msg: err.response.data.msg });
      } else {
        setError({
          is: true,
          msg: "Something went wrong while fetching the data. Please try again.",
        });
      }
      setTimeout(() => {
        setError({});
      }, 3000);
    }
  }, [state.token, state.UserApi.user]);

  useEffect(() => {
    update();
  }, [update]);

  return (
    <div className="d-flex w-100 justify-content-between">
      {error.is ? (
        <div className="alert alert-danger" role="alert">
          {error.msg}
        </div>
      ) : (
        ""
      )}
      <div>
        {posts.length > 0
          ? posts.map((post) => <Post post={post} key={post._id} />)
          : loader}
      </div>
    </div>
  );
}

export default Home;
