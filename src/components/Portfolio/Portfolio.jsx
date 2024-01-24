import React from "react";
import styled from "styled-components";
import PortfolioCart from "./PortfolioCart/PortfolioCart";

const Portfolio = () => {
  return (
    <Gallery className="Portfolio">
      <div className="text-center">
        <h4 className="main-title">Our Portfolio</h4>
        <p>Following are some of the prestigious projects we have developed</p>
      </div>
      <div className="portfolio-base">
        <PortfolioCart />
      </div>
    </Gallery>
  );
};

export default Portfolio;

const Gallery = styled.div`
  p {
    font-size: var(--common-font-size1);
    color: var(--gray2);
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 25px;
    text-align: center;
  }
`;
