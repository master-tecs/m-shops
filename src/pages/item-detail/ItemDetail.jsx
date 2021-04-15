import NewGoods from "../../components/layout/newGoods/NewGoods";
import Detail from "./components/Detail";
import "./ItemDetail.scss";

import img1 from "../../assets/img/headset/2.png";
import img2 from "../../assets/img/shoes/11.png";
import img3 from "../../assets/img/shoes/13.png";
import img4 from "../../assets/img/headset/1.png";
import img5 from "../../assets/img/headset/4.png";

function ItemDetail() {
  const products = [
    {
      title: "Cool headset",
      price: "$243",
      image: img1,
      rate: 4.5,
      likes: "907",
    },
    {
      title: "Shoe",
      price: "$443",
      image: img2,
      rate: 4,
      likes: "787",
    },
    {
      title: "Shoe",
      price: "$143",
      image: img3,
      rate: 4,
      likes: "657",
    },
    {
      title: "Nice headset",
      price: "$343",
      image: img4,
      rate: 4,
      likes: "957",
    },
    {
      title: "Black headset",
      price: "$399",
      image: img5,
      rate: 4,
      likes: "857",
    },
  ];

  return (
    <div className="itemDetail">
      <Detail />
      <NewGoods heading="New shoe" data={products} />
    </div>
  );
}

export default ItemDetail;
