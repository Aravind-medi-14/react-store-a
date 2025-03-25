import "./Products.css";
export default function Products() {
  const products = [
    {
      id: 1,
      name: "Dairy Milk",
      price: 30,
      image: "https://m.media-amazon.com/images/I/71w7ppkACUL.jpg",
    },
    {
      id: 2,
      name: "Munch",
      price: 60,
      image:
        "https://www.indianonshop.com/wp-content/uploads/2020/07/Nestl%C3%A9-Munch-Maha-Home-Pack-72g.jpg",
    },
    {
      id: 3,
      name: "Snickers",
      price: 90,
      image:
        "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/663359-00001.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjg1Mzh8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzVZeTlvTTJFdk9URXhNamcxTnpnM01ETTJOaTVxY0djfDg3ZWEwMGVjYzZkYjE5YjE3NzA3Yzk1MDBkNzA5ZWY0MTM2NzliMTZlZmRjMzg5YWIzOGY0OGFlYjZlODQ5NDU",
    },
    {
      id: 4,
      name: "5Star",
      price: 120,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51AsTzERRQL._SL1045_.jpg",
    },
    {
      id: 5,
      name: "KitKat",
      price: 150,
      image: "https://pics.drugstore.com/prodimg/417629/900.jpg",
    },
    {
      id: 6,
      name: "Perk",
      price: 180,
      image:
        "https://e.saravanaonline.com/6304-large_default/cadbury-perk-chocolate-bar-.jpg",
    },
  ];
  return (
    <div>
      <div className="App-Products-Row">
        {products.map((val, index) => (
          <div className="App-Products-Box" key={index}>
            <img src={val.image} alt=""  width={200} height={200} style={{borderRadius:10}}/>
            <h3>{val.name}</h3>
            <h4>${val.price}</h4>
            <button className="btn btn-success">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
