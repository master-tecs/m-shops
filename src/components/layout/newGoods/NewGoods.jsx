import { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "../../shared/buttons/Button";
import ProductCard from "../../shared/productCard/ProductCard";
import img1 from "../../../assets/img/headset/2.png";
import img2 from "../../../assets/img/shoes/11.png";
import img3 from "../../../assets/img/shoes/13.png";
import img4 from "../../../assets/img/headset/1.png";
import img5 from "../../../assets/img/headset/4.png";
import "./NewGoods.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewGoods() {
  const slider = useRef();

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 7000,
    className: "bottom",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <div className="NewGoods">
      <div className="top">
        <div className="top__left">
          <p className="top__heading">New goods</p>
          <label className="label">New</label>
        </div>
        <div className="top__right">
          <div className="top__backBtn" onClick={() => previous()}>
            <Button Icon={ArrowBackIcon} />
          </div>
          <div className="top__forwardBtn" onClick={() => next()}>
            <Button Icon={ArrowForwardIcon} />
          </div>
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
            rate={product.rate}
            likes={product.likes}
          />
        ))}
      </Slider>
    </div>
  );
}

export default NewGoods;
