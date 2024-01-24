import React from "react";
import styled from "styled-components";

const UniButton = (props) => {
  return <Btn>{props.btnText}</Btn>;
};

export default UniButton;

const Btn = styled.button`
  all: unset;
  text-align: center;
  padding: 10px 45px;
  line-height: 1.6;
  font-weight: 400;
  background: var(--sky-blue-3);
  border: 1px solid var(--sky-blue-3);
  color: var(--white);
  font-size: var(--common-font-size1);
  border-radius: 5px;
  -webkit-transition: var(--hover-services-cart);
  -moz-transition: var(--hover-services-cart);
  -o-transition: var(--hover-services-cart);
  transition: var(--hover-services-cart);
  &:hover {
    background: #0671b6;
    border: 1px solid #0671b6;
    color: #fff;
    -webkit-transition: var(--hover-services-cart);
    -moz-transition: var(--hover-services-cart);
    -o-transition: var(--hover-services-cart);
    transition: var(--hover-services-cart);
  }
`;
