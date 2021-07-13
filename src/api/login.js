import axios from "axios";

const login = async (e, setLoading, setEmail, setPassword, setError, email, password) => {
  setLoading(true);
  try {
    e.preventDefault();
    const data = await axios.post(
      `${
        process.env.NODE_ENV === "production"
          ? "https://fast-atoll-84478.herokuapp.com/"
          : "http://localhost:5000/"
      }user/login`,
      {
        email,
        password,
      }
    );

    setEmail("");
    setPassword("");

    localStorage.setItem("firstLogin", true);
    localStorage.setItem("refreshtoken", data.data.refreshtoken);

    window.location.href = "/account";
  } catch (err) {
    if (err.response) {
      setError({ is: true, msg: err.response.data.msg });
    } else {
      setError({
        is: true,
        msg: "Something went wrong when logging in. Please try again.",
      });
    }
    setTimeout(() => {
      setError({});
    }, 3000);
  }
  setLoading(false);
};

export default login;
