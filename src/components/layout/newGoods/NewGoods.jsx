import { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "../../shared/buttons/Button";
import ProductCard from "../../shared/productCard/ProductCard";
import "./NewGoods.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewGoods({ heading, data }) {
  const slider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // centerMode: true,
    // centerPadding: "10%",
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
          <p className="top__heading">{heading}</p>
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
        {data.map((product, index) => (
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
