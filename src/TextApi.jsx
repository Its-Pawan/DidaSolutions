// App.jsx
import React, { useState, useEffect } from "react";
// import WorksCart from "./WorksCart"; // Import the WorksCart array
// import FeaturesData from "./FeaturesData";
import PortfolioData from "./PortfolioData";

const TestApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set the data from the imported WorksCart array
    setData(PortfolioData);
  }, []);

  return (
    <div>
      <h1>Your React App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.icon} alt="" /> -{" "}
            {item.projectNumber} - {item.desc}


          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestApi;
