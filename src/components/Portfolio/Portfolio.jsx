import { useState, useEffect } from "react";
import styled from "styled-components";
import PortfolioCart from "./PortfolioCart/PortfolioCart";
import PortfolioData from "../../PortfolioData";
import SlideGallery from "../SlideGallery/SlideGallery";

const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(PortfolioData);
  }, []);

  const [currentImage, setCurrentImage] = useState();

  const [showImage, setShowImage] = useState(false);

  const handleShowGallery = (item) => {
    setShowImage(true);
    setCurrentImage(item);
  };
  if (showImage) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <Gallery className="Portfolio ">
      <div className="container pt-10 px-5 md:px-0 md:pt-24">
        <div className="text-center ">
          <h4 className="main-title">Our Portfolio</h4>
          <p>
            Following are some of the prestigious projects we have developed
          </p>
        </div>
        <div className="portfolio-base grid grid-cols-2 md:grid-cols-4 grid-rows-1 md:gap-11 gap-6 ">
          {data.map((item) => (
            <PortfolioCart
              key={item.id}
              img={item.img}
              imgTitle={item.projectName}
              isClicked={() => handleShowGallery(item)}
            />
          ))}
        </div>
      </div>
      {showImage ? (
        <div className="slide-gallery-base">
          <SlideGallery
            isClicked={handleShowGallery}
            closeBtn={setShowImage}
            currentImage={currentImage}
            allItems={data}
          />
        </div>
      ) : (
        ""
      )}
    </Gallery>
  );
};

export default Portfolio;

const Gallery = styled.div`
padding-bottom: 5rem;
  /* margin-top: 80px; */
  position: relative;
  background-color: var(--white);
  p {
    font-size: var(--common-font-size1);
    color: var(--gray2);
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 25px;
    text-align: center;
  }
  .slide-gallery-base {
    z-index: 9999;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;
