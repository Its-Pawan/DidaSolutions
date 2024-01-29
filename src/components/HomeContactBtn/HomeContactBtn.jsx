import React from "react";
import styled from "styled-components";
import UniButton from "../Button/UniButton";

const HomeContactBtn = () => {
  return (
    <HomeContact className="flex justify-center items-center">
      <UniButton btnText="Contact Us" />
    </HomeContact>
  );
};

export default HomeContactBtn;

const HomeContact = styled.div`
  min-height: 15rem;
  @media only screen and (max-width: 440px){
    min-height: 10rem;

  }
`;
