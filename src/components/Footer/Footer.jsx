import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="footer-content flex md:flex-row flex-col md:gap-0 gap-6  justify-between items-start text-[var(--white)] ">
          <div className="company-info w-[20%] flex flex-col gap-3">
            <div className="logo">
              <img src="./assets/logo.png" alt="logo" />
            </div>
            <div className="social  flex gap-4 text-2xl text-[var(--white)] mt-3">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <p>
              C Third Floor,Plot No. B/84, KH 4/20, Patel Garden (Sewa park
              Side) Karkrola, South West Delhi, New Delhi-110078, India
            </p>
            <p>
              Call Us: <a href="tel:+91-9871782161">+91-9871782161</a>
            </p>
            <p>
              <a href="mailto:info@didasolution.com">info@didasolution.com</a>
            </p>
          </div>

          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="quick-links">
            <h2>Services</h2>
            <ul>
              <li>
                <a href="">Web App Development</a>
              </li>
              <li>
                <a href="">Mobile App Development</a>
              </li>
              <li>
                <a href="">Digital Marketing</a>
              </li>
              <li>
                <a href="">Ecommerce Solutions</a>
              </li>
              <li>
                <a href="">Graphic Designing</a>
              </li>
              <li>
                <a href="">CRM</a>
              </li>
            </ul>
          </div>

          <div className="quick-links">
            <h2>Industry We Serve</h2>
            <ul>
              <li>
                <a href="">E-learning</a>
              </li>
              <li>
                <a href="">Health Care</a>
              </li>
              <li>
                <a href="">Construction</a>
              </li>
              <li>
                <a href="">Travel & Tourism</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-b-1 my-8" />

        <div className="copy text-center text-[var(--gray2)]">
          © {new Date().getFullYear()} Dida Solution LLP
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #181818;
  padding: 90px 80px;
  /* margin-top: 70px; */
  font-size: calc(var(--common-font-size1) - 0.3rem);
  .footer-content {
    a {
      transition: var(--hover-animation);
      &:hover {
        color: var(--sky-blue-2);
      }
    }
    .quick-links {
      h2 {
        font-size: var(--common-font-size2);
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        li {
          transition: var(--hover-animation);
          &:hover {
            color: var(--sky-blue-2);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 440px) {
    padding: 40px 20px;
    .footer-content  div{
      width: 70%;
    }
  }
`;
