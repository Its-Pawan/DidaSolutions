import React from "react";
import Expertise from "./Expertise/Expertise";
import ServicesCard from "./ServicesCard/ServicesCard";
import "./Services.scss";
import WorksCart from "../../WorksCart";

const Services = () => {
  return (
    <div className="container services-container ">
      <div className="services-content flex flex-col md:flex-row justify-between">
        <Expertise className="w-full md:w-[22%]" />
        <div className="cards w-full md:w-[73%]">
          {WorksCart.map((work) => (
            <ServicesCard
              key={work.id}
              title={work.title}
              type={work.type}
              icon={work.icon}
              projectNumber={work.projectNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
