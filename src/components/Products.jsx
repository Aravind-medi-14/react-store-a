import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";

export default function Products() {
  const { Detail } = useContext(appContext);
  const { products, cart , setCart} = useContext(appContext);

  const addToCart = (id) => {
    setCart({...cart,[id]:1 })
    console.log(cart);
  }

  return (
    <div>
      {Detail.name}
      <div className="App-Products-Row">
        {products.map((val, index) => (
          <div className="App-Products-Box" key={index}>
            <img
              src={val.image}
              alt=""
              width={200}
              height={200}
              style={{ borderRadius: 10 }}
            />
            <h3>{val.name}</h3>
            <h4>${val.price}</h4>
            <button className="btn btn-success p-2" onClick={() => addToCart(val.id)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
