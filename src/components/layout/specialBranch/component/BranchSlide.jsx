import Slider from "react-slick";
import img1 from "../../../../assets/img/shoes/11.png";
import "./BranchSlide.scss";

function BranchSlide({ num }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
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
    <div className={`container container-${num}`}>
      <Slider {...settings}>
        <Slide />
        <Slide />
        <Slide />
      </Slider>
    </div>
  );
}

function Slide() {
  return (
    <div className={`branchSlide`}>
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
