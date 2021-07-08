import React, { createContext, useState, useEffect } from "react";
import UserApi from "./api/UserApi";
import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    const refreshtoken = localStorage.getItem("refreshtoken");

    if (firstLogin) {
      try {
        const refreshToken = async () => {
          const res = await axios.post(
            "https://fast-atoll-84478.herokuapp.com/user/refresh_token",
            { refreshtoken: refreshtoken }
          );

          setToken(res.data.accesstoken);

          setTimeout(() => {
            refreshToken();
          }, 10 * 90 * 1000);
        };
        refreshToken();
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const state = {
    token: [token, setToken],
    UserApi: UserApi(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
