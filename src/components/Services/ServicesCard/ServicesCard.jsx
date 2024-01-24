import React, { useState, useEffect } from "react";
import "./ServicesCard.scss";

const ServicesCard = ({ title, type, icon, projectNumber }) => {
  return (
    <div className="ServiceSingleCart">
      <div className="expertise-card">
        <div className="expertise-card-title">
          <h5>{title}</h5>
          <span>{type}</span>
        </div>
        <div className="icon-wrapper">
          <div className="icon-cover">
            <img src={icon} alt="" />
          </div>
          <div className="text-cover">
            <span className="count">{projectNumber}</span>
            <span className="count-label">Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
