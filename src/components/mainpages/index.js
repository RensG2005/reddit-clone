import React, { useContext, useState } from "react";
import Login from "./Login";
import signIn from "./signIn";
import Subs from "./Subs";
import Home from "./Home";
import rSub from "./rSub";
import User from "./User";
import PostPage from "./PostPage";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

function MainPage() {
  let state = useContext(GlobalState);
  const [isLogged] = state.UserApi.isLogged;

  const [onPost, setonPost] = useState(false);

  return (
    <div className="bg-darkdark min-height-100">
      <div className={onPost ? "pt-4" : "container pt-4"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={signIn} />
          <Route path="/subreddits" component={Subs} />
          <Route path="/r/:sub" component={isLogged ? rSub : NotFound} />
          <Route path="/account" component={isLogged ? User : NotFound} />
          <Route
            path="/post/:id"
            component={
              isLogged ? () => <PostPage setonPost={setonPost} /> : NotFound
            }
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
