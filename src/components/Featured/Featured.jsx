import React from "react";
import styled from "styled-components";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import FeaturesData from "../../FeaturesData";

const Featured = () => {
  return (
    <Features>
      <div className="container">
        <h2 className="text-center main-title">Our Services</h2>
        <div className="featured-card-container grid grid-cols-3 grid-rows-2 gap-6 gap-y-20">
          {FeaturesData.map((feature) => (
            <FeaturedCard
              key={feature.id}
              title={feature.title}
              icon={feature.icon}
              desc={feature.desc}
            />
          ))}
        </div>
      </div>
    </Features>
  );
};

export default Featured;
const Features = styled.div`
  background: #fff;
  margin-top: 100px;
  padding: 90px 0 ;
  h2 {
    margin-bottom: 70px;
  }
`;
