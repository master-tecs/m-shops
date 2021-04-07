import { useRef } from "react";
import Slider from "react-slick";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SpecialCard from "../../shared/specialCard/SpecialCard";
import RoundIcon from "../../shared/icons/RoundIcon";

import "./SpecialGoods.scss";

function SpecialGoods({ heading, data }) {
  const slider = useRef();

  //   useEffect(() => {
  //     const middle_card_index = Math.floor(data.length / 2);
  //     const center = {
  //       x: parseFloat(slider.current.clientWidth) / 2,
  //       y: parseFloat(slider.current.clientHeight) / 2,
  //     };

  //     let new_x = 0;
  //     let new_y = 0;

  //     for (let i = 0; i < data.length; i++) {
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
  //       data[i].x = new_x;
  //       data[i].y = new_y;
  //     }
  //     setNewCards(data);
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
          <p className="top__heading">{heading}</p>
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
          {data.map(({ title, rate, image, price, x, y }, index) => (
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
