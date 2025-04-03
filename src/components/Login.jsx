import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState, useContext } from "react";
import { appContext } from "../App";

import { useNavigate } from "react-router-dom";
export default function Login() {
  const { Detail, setDetail, Details } = useContext(appContext);
  const Navigate = useNavigate();
  const [msg,setMsg] = useState();
  const handleLogin = () => {
    const found = Details.find(
      (value) => value.email === Detail.email && value.pswd === Detail.pswd
    );
    if (found) {
      Detail.name =found.name;
      Navigate("/");
      
    }
    else{
      setMsg("Invalid User !")
    }
  };
  return (
    <div className="Row">
      <div className="LoginForm">
        <h3 style={{ marginBottom: "40px" }}>Login Form</h3>
        {msg}
        <p>
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => setDetail({ ...Detail, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setDetail({ ...Detail, pswd: e.target.value })}
          />
        </p>
        <p>
          <button onClick={handleLogin}>LogIn</button>
        </p>
        <p>
          <Link to="../register" className="CAbtn">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
