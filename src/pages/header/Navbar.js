// import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

function Navbar({ setMobile, mobile }) {
  const state = useContext(GlobalState);
  const [isLogged] = state.UserApi.isLogged;

  //   const [searchData, setSearchData] = useState([]);
  //   const [query, setQuery] = useState([]);

  //   useEffect(() => {
  //     async function search() {
  //       try {
  //         const data = await axios.post(
  //           `https://fast-atoll-84478.herokuapp.com/r/search`,
  //           {
  //             query,
  //           }
  //         );
  //         setSearchData(data.data);
  //       } catch (err) {
  //         return 0;
  //       }
  //       return 0;
  //     }
  //     const timeoutId = setTimeout(async () => {
  //       if (query.length) search();
  //       else setSearchData([]);
  //     }, 200);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }, [query]);

  return (
    <header className="bg-darkdarkdark">
      <Link className="p-0 m-0 text-decoration-none text-white d-flex align-items-center" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="ms-4 me-2 reddit_logo"
        >
          <g>
            <circle fill="#FF4500" cx="10" cy="10" r="10" />
            <path
              fill="#FFF"
              d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
            />
          </g>
        </svg>
        <h3 className="p-0 m-0 text-decoration-none text-white d-flex align-items-center">
          Reddit
        </h3>
      </Link>

      <nav className="desktop-nav">
        <ul>
          <li className="text-white"><Link to="/subreddits">Subreddits</Link></li>
          {isLogged ? (
            <li className="text-white">
              <Link to="/account">
                u/
                {state.UserApi.user[0].username}
              </Link>
              <img alt="profile" src={state.UserApi.user[0].profilePicture} className="profile-picture-small rounded-circle ms-2" />
            </li>
          ) : <li className="text-white"><Link to="/login">Login</Link></li>}
          {!isLogged && <li className="text-white btn btn-primary"><Link to="/sign-up">Register</Link></li>}
        </ul>
      </nav>

      <div className="mobilenav">
        <button type="button" aria-label={mobile && "Main menu"} onClick={() => setMobile(!mobile)} className={mobile ? "menu opened" : "menu"}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
        {mobile ? (
          <nav>
            <ul>
              {isLogged ? (
                <li className="text-white">
                  <img alt="profile" src={state.UserApi.user[0].profilePicture} className="profile-picture-small rounded-circle ms-2" />
                  <Link to="/account">
                    u/
                    {state.UserApi.user[0].username}
                  </Link>
                </li>
              ) : <li className="text-white"><Link to="/login">Login</Link></li>}
              {!isLogged && <li className="text-white"><Link to="/sign-up">Register</Link></li>}
              <li className="text-white"><Link to="/subreddits">Subreddits</Link></li>
            </ul>
          </nav>
        ) : "" }
      </div>
    </header>
  );
}

export default Navbar;
