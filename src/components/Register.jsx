import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [Details, setDetails] = useState([]);
  const [Detail, setDetail] = useState({});
  const handleSubmit = () => {
    const isDetail = Details.find((val) => val.email === Detail.email);
    if (!isDetail) {
      setDetails([...Details, Detail]);
    }
    else{
      alert("You are already in the list!!")
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
          {Details.map((val, index) => (
            <li key={index}>
              {val.name} - {val.email} - {val.pswd}
              <button onClick={() => handleDelete(val.email)}>Delete</button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
