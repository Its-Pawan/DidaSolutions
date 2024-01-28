import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const SlideGallery = ({ closeBtn, currentImage, allItems }) => {
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);
  useEffect(() => {
    if (currentImage && allItems.length > 0) {
      const selectedIndex = allItems.findIndex(
        (item) => item.id === currentImage.id
      );
      setInitialSlideIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  }, [allItems, currentImage]);

  return (
    <SliderBase>
      <div className="close-icon " onClick={() => closeBtn(false)}>
        <IoMdClose />
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {allItems.map((item, index) => (
          <SwiperSlide key={item.id}>
            <img
              src={allItems[(initialSlideIndex + index) % allItems.length].img}
              alt={
                allItems[(initialSlideIndex + index) % allItems.length]
                  .projectName
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderBase>
  );
};

export default SlideGallery;

const SliderBase = styled.div`
  user-select: none;
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #000000ea;
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: var(--main-title-font);
    color: var(--white);
    opacity: 0.5;
    z-index: 999;
    transition: var(--hover-services-cart);
    &:hover {
      opacity: 1;
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        height: calc(100vh - 10rem);
        object-fit: cover;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: var(--white);
      transition: var(--hover-services-cart);
      opacity: 0.5;
      border-radius: 6px;
      padding: 30px;
      background-color: var(--black);
      &:hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }
  }
`;
