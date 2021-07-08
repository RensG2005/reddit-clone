import React,{useEffect, useState, useCallback, useContext} from 'react'
import Loader from '../../components/PostSkelLoader'
import axios from 'axios'
import { GlobalState } from "../../GlobalState";
import Post from "./Post";

function Home() {

    const state = useContext(GlobalState)

    const [isLogged] = state.UserApi.isLogged;

        const [loader, setLoader] = useState("");
        const [posts, setPosts] = useState([]);
        const [error, setError] = useState({
          is: false,
          msg: "",
        });
    
    
        const update = useCallback(async () => {
              try {
              setLoader(<Loader />)
              const data = await axios.post(
                `${process.env.NODE_ENV === "production" ? "https://fast-atoll-84478.herokuapp.com/" : "http://localhost:5000/"}r/search`,
                {
                  query: ''
                },
                {
                  headers: {
                    Authorization: state.token[0],
                  },
                }
                );
              if (data.data.length > 0) {
                const allPosts = []
                data.data.map(sub => sub.posts.map(post => allPosts.push(post.id)))
                const data2 = await axios.post(
                  `${process.env.NODE_ENV === "production" ? "https://fast-atoll-84478.herokuapp.com/" : "http://localhost:5000/"}post/getById`,
                  {
                    ids: allPosts,
                  },
                  {
                    headers: {
                      Authorization: state.token[0],
                    },
                  }
                  )
                  setPosts(data2.data);
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
            }}, [state.token]);
    
            useEffect(() => {
                update()
            }, [update])
    
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
                {posts.length > 0 ? (
                    posts.map((post) => {
                    return <Post post={post} key={post._id} />;
                    })
                    ) : (loader)}
                </div>
            </div>
        )

}

export default Home
