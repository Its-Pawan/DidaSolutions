import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="carousel-container w-full   ">
      <Slider {...settings}>
        <div className="slide">
          <img src="./assets/banner1.jpg" alt="Slide 1" />
          <div className="slider-caption">
            <h3 className="animationDelay" >WEB DEVELOPMENT</h3>
            <p className="animationDelay" >SHARE YOUR STORY WITH OUR WEBSITE DESIGN AND DEVELOPMENT SERVICES.</p>
          </div>
        </div>
        <div className="slide">
          <img src="./assets/banner2.jpg" alt="Slide 2" />
          <div className="slider-caption">
            <h3>APP DEVELOPMENT</h3>
            <p>DEVELOP A MOBILE APP THAT WORKS FOR YOUR BUSINESS</p>
          </div>
        </div>
        <div className="slide">
          <img src="./assets/banner3.jpg" alt="Slide 3" />
          <div className="slider-caption">
            <h3>E-COMMERCE SOLUTIONS</h3>
            <p>USE NEW-AGE E-COMMERCE TECHNOLOGY TO GROW YOUR BUSINESS</p>
          </div>
        </div>
        <div className="slide">
          <img src="./assets/banner4.jpg" alt="Slide 4" />
          <div className="slider-caption">
            <h3>CRM SOLUTIONS</h3>
            <p>DEEP UNDERSTANDING OF YOUR CLIENT REQUIREMENT WITH A MODERN CRM SOLUTION</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
