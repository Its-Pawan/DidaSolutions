import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

import styled from "styled-components";

const ScrollToTop = ({ showBelow }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showBelow) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showBelow]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopButton onClick={scrollToTop} visible={isVisible}>
      <IoIosArrowUp className="icon" size={24} />
    </ScrollToTopButton>
  );
};

export default ScrollToTop;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 10000;
  border: none;
  border-radius: 50%;
  background-color: #ed3237;
  color: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: ${(props) => (props.visible ? "block" : "none")};
  transition: opacity 0.4s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
