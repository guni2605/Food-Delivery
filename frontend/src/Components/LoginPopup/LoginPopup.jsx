import React, { useState, useEffect, useContext } from "react";
import { Contextstore } from "../../store/Contextstore";
import { assets } from "../../assets/frontend_assets/assets";
import "./LoginPopup.css";
import axios from "axios";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { url, setToken, token } = useContext(Contextstore);
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const onLogin = async (event) => {
    console.log("Login done ");
    event.preventDefault();
    let new_url = await url;
    if (currState === "Login") {
      new_url += "/api/v1/user/login";
    } else {
      new_url += "/api/v1/user/register";
    }
    console.log(new_url);
    const response = await axios.post(new_url, data);
    if (response.data.success) {
      console.log(response.data);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
      console.log(response.data.message);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <form className="LoginForm" onSubmit={onLogin}>
      <div className="form-container">
        <div className="head">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="form-details">
          {currState !== "Login" ? (
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Enter your name"
              required
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            id="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Enter your Email"
            required
          />

          <input
            type="password"
            value={data.password}
            name="password"
            onChange={onChangeHandler}
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" class="login-submit">
          Submit
        </button>
      </div>
      <div className="bottom-details">
        {currState !== "Login" ? (
          <p>
            Already have an account ?{" "}
            <span className="span-login" onClick={() => setCurrState("Login")}>
              login here
            </span>
          </p>
        ) : (
          <p>
            Not have an account ?{" "}
            <span className="span-login" onClick={() => setCurrState("Signup")}>
              sign up
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginPopup;
