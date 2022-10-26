import React, { Component } from "react";
import Slider_s from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slider() {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: < SamplePrevArrow/>,
    prevArrow: < SampleNextArrow/>
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="left_arrow"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="right_arrow"
        onClick={onClick}
      />
    );
  }

  return (
    <div className="silder_box" >
      <Slider_s {...settings}>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.seadn.io/gae/6uHAoVlROJRaf9d4ziDp7Ng8E_-tgTmqf1zx1I6v1pYn0soIgDLj43-a48-iffICoCQJLAyv0zILFqZI_8eir8O_IlR0JUoizsrV?auto=format&w=1000"  />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.pinimg.com/736x/4e/f2/2b/4ef22b0e3db5b76f52e1b73376d6c301.jpg" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.pinimg.com/564x/dd/a1/db/dda1dbe5970aaa08839cac4f7ce6dcae.jpg" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.pinimg.com/564x/2d/94/b5/2d94b506f427963a131465b489c8f809.jpg" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.pinimg.com/564x/eb/0b/0f/eb0b0fc5852b28ff6c8716677a26fb44.jpg" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.pinimg.com/564x/98/57/40/9857401dcfdac01504f1982ca490bbd1.jpg" />
          <div className="sider_title" >title1</div>
        </div>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.pinimg.com/564x/60/66/10/6066103e6af8c10a646a23b1be242ba3.jpg" />
          <div className="sider_title" >title1</div>
       </div>
        <div className="slider-card" >
          <img className="slider-card-image" src="https://i.pinimg.com/564x/a4/13/97/a41397f4bb6a4e6d4fab08034333974e.jpg" />
          <div className="sider_title" >title1</div>
        </div>

      </Slider_s>
    </div>
  );


}

export default Slider;
