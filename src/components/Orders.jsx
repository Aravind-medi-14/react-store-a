import React, { useContext } from "react";
import { appContext } from "../App";

export default function Orders() {
  const { orders } = useContext(appContext);
  return (
    <div>
      <h2>Your Orders are:</h2>
      {orders.map((val) => (
        <div >
          <div className="d-flex p-1 text-center">
            <h5 style={{ marginRight: "15px", alignItems: "center" }}>
              Order Date :{" "}
            </h5>
            {val.orderDate}
          </div>{" "}
          <div className="d-flex p-1 text-center">
            <h5 style={{ marginRight: "15px", alignItems: "center" }}>
              User Email :{" "}
            </h5>
            {val.email}{" "}
          </div>
          <div className="d-flex p-1 text-center">
            <h5 style={{ marginRight: "15px", alignItems: "center" }}>
              No Of Products :{" "}
            </h5>{" "}
            {Object.keys(val.items).length}
          </div>
          <div className="d-flex p-1 text-center ">
            <h5 style={{ marginRight: "15px", alignItems: "center" }}>
              Order Value :{" "}
            </h5>
            {val.total}
          </div>
          <div className="d-flex p-1 text-center">
            <h5 style={{ marginRight: "15px", alignItems: "center" }}>
              Order Status :{" "}
            </h5>
            {val.status}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
