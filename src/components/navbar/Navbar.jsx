import "./Navbar.scss";
import { FaAngleDown } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Megamenu from "./Megamenu/Megamenu";
import { useState } from "react";
const Navbar = ({ showMenu, menuActive, menuDeactive }) => {
  const [hover, setHover] = useState(false);

  const mouseIn = () => setHover(true);
  const mouseOut = () => setHover(false);

  // const [showMenu, setShowMenu] = useState(false);

  // const menuActive = () => setShowMenu(true);
  // const menuDeactive = () => setShowMenu(false);

  return (
    <div className="navbar">
      <nav className="bg-transparent flex flex-col justify-between items-center h-[90px] sm:h-[120px]">
        <div className="flex flex-col sm:flex-row justify-between items-center container h-full px-2 sm:px-0">
          <div className="logo  h-full flex justify-between w-full sm:w-auto items-center">
            <a href="">
              <img
                className="w-[100px] sm:w-[150px]"
                src="./assets/logo.png"
                alt=""
              />
            </a>

            <div className="menu-icon sm:hidden ">
              {showMenu ? (
                <MdClose
                  size={34}
                  className="h-full text-white"
                  onClick={menuDeactive}
                />
              ) : (
                <MdMenu
                  size={34}
                  className="h-full text-white"
                  onClick={menuActive}
                />
              )}
            </div>
          </div>

          <div
            className={`menu h-full ${
              showMenu ? "flex" : "hidden"
            }  sm:flex items-center`}
          >
            <ul className="menu-items flex items-center gap-12 font-medium text-white uppercase h-full dropdown">
              <li className="menu-item ">
                <a href=""> Home</a>
              </li>
              <li className="menu-item">
                <a href="">About</a>
              </li>
              <li className="menu-item">
                <a href="">portfolio</a>
              </li>

              <li
                onMouseOver={mouseIn}
                onMouseLeave={mouseOut}
                className="menu-item dropbtn"
              >
                <a>
                  services
                  <FaAngleDown className="text-xl ml-1" />
                </a>
              </li>
              <li class="dropdown-content sm:hidden">
                <ul className="flex flex-col gap-2 pl-5">
                  <li><a href="#">Web app development</a></li>
                  <li><a href="#">mobile app development</a></li>
                  <li><a href="#">ecommerce solutions</a></li>
                  <li><a href="#">digital marketing</a></li>
                  <li><a href="#">graphic designing</a></li>
                  <li><a href="#">crm</a></li>
                
                </ul>
              </li>

              <li className="menu-item ">
                <a href="">careers</a>
              </li>
              <li className="menu-item">
                <a href="">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        onMouseOver={mouseIn}
        onMouseLeave={mouseOut}
        className={hover ? "hover-services" : ""}
      >
        {hover ? <Megamenu /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
