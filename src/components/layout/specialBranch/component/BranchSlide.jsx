import { useRef } from "react";
import Slider from "react-slick";
import img1 from "../../../../assets/img/shoes/11.png";
import "./BranchSlide.scss";

function BranchSlide({ vertical }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 7000,
    className: "slide",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
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

  return (
    <div className="container">
      <Slider {...settings}>
        <Slide vertical={vertical} />
        <Slide vertical={vertical} />
        <Slide vertical={vertical} />
      </Slider>
    </div>
  );
}

function Slide({ vertical }) {
  return (
    <div className={`branchSlide ${vertical}`}>
      <div className="text">
        <p className="text__name">Nike Sneakers</p>
        <p className="text__detail">Get Amazing Nike Sneakers</p>
      </div>
      <div className="image">
        <img src={img1} alt="Nike" />
      </div>
    </div>
  );
}

export default BranchSlide;
