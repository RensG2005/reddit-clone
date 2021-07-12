import { useState, useEffect } from "react";
import axios from "axios";

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setuser] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get(
            `${
              process.env.NODE_ENV === "production"
                ? "https://fast-atoll-84478.herokuapp.com/"
                : "http://localhost:5000/"
            }user/information`,
            {
              headers: { Authorization: token },
            }
          );
          // eslint-disable-next-line no-unused-expressions
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

          setuser(res.data);

          setIsLogged(true);
        } catch (err) {
          return 0;
        }
      };
      getUser();
    }
  }, [token]);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    user: [user, setuser],
  };
}

export default UserAPI;
