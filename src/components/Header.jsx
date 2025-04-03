import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
export default function Header() {
  const { Detail, setDetail, cart } = useContext(appContext);
  const Navigate = useNavigate();
  const totalCartItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const GoToHome = () => {
    Navigate("/");
  };
  return (
    <div className="App-Header-Row">
      <h1 onClick={GoToHome} style={{ cursor: "pointer" }}>
        My React Store
      </h1>
      <div>
        <Link to="products" className="App-Header-Link">
          Home
        </Link>
        <Link to="cart" className="App-Header-Link">
          Cart({totalCartItems})
        </Link>
        <Link to="orders" className="App-Header-Link">
          Orders
        </Link>
        {Detail.name === "" ? (
          <Link to="login" className="App-Header-Link">
            Login
          </Link>
        ) : (
          <Link
            to="login"
            className="App-Header-Link"
            onClick={() =>
              setDetail({ ...Detail, name: "", email: "", pswd: "" })
            }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
