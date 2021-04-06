import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SpecialCard from "../../shared/specialCard/SpecialCard";
import RoundIcon from "../../shared/icons/RoundIcon";
import img1 from "../../../assets/img/headset/1.png";
// import img1 from "../../../assets/img/headset/2.png";
import img2 from "../../../assets/img/shoes/11.png";
import img3 from "../../../assets/img/shoes/13.png";
import img4 from "../../../assets/img/headset/1.png";
import img5 from "../../../assets/img/headset/4.png";

import "./SpecialGoods.scss";

function SpecialGoods() {
  const slider = useRef();
  const [newCards, setNewCards] = useState([]);

  const products = [
    {
      title: "Cool headset",
      price: "$243",
      image: img1,
      rate: 4.5,
      likes: "957",
    },
    {
      title: "Shoe",
      price: "$443",
      image: img2,
      rate: 4,
      likes: "457",
    },
    {
      title: "Shoe",
      price: "$443",
      image: img3,
      rate: 4,
      likes: "457",
    },
    {
      title: "Shoe",
      price: "$443",
      image: img4,
      rate: 4,
      likes: "457",
    },
    {
      title: "Shoe",
      price: "$443",
      image: img5,
      rate: 4,
      likes: "457",
    },
  ];
  //   useEffect(() => {
  //     const middle_card_index = Math.floor(products.length / 2);
  //     const center = {
  //       x: parseFloat(slider.current.clientWidth) / 2,
  //       y: parseFloat(slider.current.clientHeight) / 2,
  //     };

  //     let new_x = 0;
  //     let new_y = 0;

  //     for (let i = 0; i < products.length; i++) {
  //       if (i < middle_card_index) {
  //         new_x = center.x - 350 * (middle_card_index - i);
  //         new_y = center.y + 10 * (i - middle_card_index);
  //       } else if (i === middle_card_index) {
  //         new_x = center.x - 350 * (i - middle_card_index);
  //         new_y = center.y;
  //       } else {
  //         new_x = center.x - 350 * (i - middle_card_index);
  //         new_y = center.y + 10 * (i - middle_card_index);
  //       }
  //       products[i].x = new_x;
  //       products[i].y = new_y;
  //     }
  //     setNewCards(products);
  //     // console.log(newCards, "IN====================================");
  //   }, []);
  //   console.log(newCards, "OUT====================================");

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
    className: "bottom__slider",
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
    <div className="specialGoods">
      <div className="top">
        <div className="top__left">
          <p className="top__heading">Special goods</p>
          <label className="label">New</label>
        </div>
        <div className="top__right">
          <p>See all</p>
          <ArrowRightAltIcon />
        </div>
      </div>

      <div className="bottom">
        <div className="bottom__prev" onClick={() => previous()}>
          <RoundIcon Icon={ArrowBackIcon} type="sliderIconColor" />
        </div>
        <Slider ref={slider} {...settings}>
          {products.map(({ title, rate, image, price, x, y }, index) => (
            <SpecialCard
              x={x}
              y={y}
              key={index}
              title={title}
              rate={rate}
              price={price}
              image={image}
              type="normal"
            />
          ))}
        </Slider>
        <div className="bottom__next" onClick={() => next()}>
          <RoundIcon Icon={ArrowForwardIcon} type="sliderIconColor" />
        </div>
      </div>
    </div>
  );
}

export default SpecialGoods;