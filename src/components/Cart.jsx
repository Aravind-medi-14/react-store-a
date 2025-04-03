import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Orders from "./Orders";

export default function Cart() {
  const { cart, products, setCart, Detail, orders, setOrders } =
    useContext(appContext);

  const Navigate = useNavigate();
  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    if (cart[id] > 1) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    } else {
      handleDelete(id);
    }
  };
  const totalPrice = products.reduce(
    (sum, product) => sum + (cart[product.id] || 0) * product.price,
    0
  );

  const placeOrder = () => {
    setOrders([
      ...orders,
      {
        orderDate: Date(),
        email: Detail.email,
        items: cart,
        total: totalPrice,
        status: "pending",
      },
    ]);
    setCart({});
    Navigate("/orders");
  };
  return (
    <div>
      <h3>My Cart</h3> <hr />
      <div>
        {products.map(
          (val) =>
            cart[val.id] > 0 && (
              <div key={val.id}>
                <div>Product Name: {val.name}</div>{" "}
                <div>Price: $ {val.price}</div>{" "}
                <div>
                  Quantity :
                  <button
                    className="btn btn-pink "
                    onClick={() => decrement(val.id)}
                  >
                    -
                  </button>
                  {cart[val.id]}
                  <button
                    className="btn btn-pink"
                    onClick={() => increment(val.id)}
                  >
                    +
                  </button>
                </div>
                <div>Products Price: ${cart[val.id] * val.price}</div>
                <button onClick={() => handleDelete(val.id)}>Delete</button>
                <hr />
              </div>
            )
        )}
      </div>
      <div>
        <h3>Order Price : ${totalPrice}</h3>
      </div>
      <div>
        {
          Detail.email ? (<button onClick={placeOrder}>Place Order</button>) : (<button onClick={() => Navigate("/login")}>Login to Order</button>)
        }
        
      </div>
    </div>
  );
}
