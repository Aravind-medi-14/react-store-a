import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useRef } from "react";
import { appContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { Details, setDetails, Detail, setDetail } = useContext(appContext);
  const Navigate = useNavigate();

  const [msg, setMsg] = useState();
  const msgref = useRef();
  const handleSubmit = () => {
    const isDetail = Details.find((val) => val.email === Detail.email);
    if (!isDetail) {
      setMsg();
      setDetails([...Details, Detail]);
      // setDetail({ ...Detail, name: "", email: "", pswd: "" });
      Navigate("/");
    } else {
      setMsg("User already exists !!");
      msgref.current.style.color = "red";
    }
  };
  const handleDelete = (email) => {
    setDetails(Details.filter((val) => val.email !== email));
  };
  return (
    <div>
      <div className="Row">
        <div className="RegForm">
          <h3 style={{ marginBottom: "30px" }}>Registration Form</h3>
          <p ref={msgref}>{msg}</p>
          <p>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setDetail({ ...Detail, name: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter Email address"
              onChange={(e) => setDetail({ ...Detail, email: e.target.value })}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setDetail({ ...Detail, pswd: e.target.value })}
            />
          </p>
          <p>
            <button onClick={handleSubmit}>Submit</button>
          </p>
          <p>
            <Link to="../login">Already a member ? Login Here!</Link>
          </p>
        </div>
        <div className="RegForm">
          <table className="Reg-Table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th></th>
            </tr>
            {Details &&
              Details.map((val, index) => (
                <tr key={index}>
                  <td>{val.name} </td> <td>{val.email} </td>
                  <td>{val.pswd} </td>
                  <td>
                    <button onClick={() => handleDelete(val.email)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}
