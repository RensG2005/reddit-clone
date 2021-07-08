import { useState, useEffect } from "react";
import axios from  'axios'

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setuser] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get(
            "https://fast-atoll-84478.herokuapp.com/user/information",
            {
              headers: { Authorization: token },
            }
          );
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

          setuser(res.data);

          setIsLogged(true);
        } catch (err) {
          console.log(err.response.data.msg);
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
