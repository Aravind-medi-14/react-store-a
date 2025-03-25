import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  return (
    <div className="Row">
      <div className="LoginForm">
        <h3 style={{ marginBottom: "40px" }}>Login Form</h3>
        <p>
          <input type="text" placeholder="Email Address" />
        </p>
        <p>
          <input type="password" placeholder="Enter password" />
        </p>
        <p>
          <button>LogIn</button>
        </p>
        <p>
          <Link to="../register">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
