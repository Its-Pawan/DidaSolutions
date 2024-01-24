import "./Navbar.scss";
import { FaAngleDown } from "react-icons/fa";
import Megamenu from "./Megamenu/Megamenu";
import { useState } from "react";
const Navbar = () => {
  const [hover, setHover] = useState(false);

  const mouseIn = () => setHover(true);
  const mouseOut = () => setHover(false);

  return (
    <div className="navbar">
      <nav className="bg-transparent flex justify-between items-center h-[120px]">
        <div className="flex justify-between items-center container h-full">
          <div className="logo  h-full flex items-center">
            <a href="">
              <img className="w-[150px]" src="./assets/logo.png" alt="" />
            </a>
          </div>

          <div className="menu h-full flex items-center">
            <ul className="menu-items flex items-center gap-12 font-medium text-white uppercase h-full">
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
                className="menu-item"
              >
                <a href="">
                  services
                  <FaAngleDown className="text-xl ml-1" />
                </a>
              </li>
              <li className="menu-item aaa">
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
        className={hover ? "hover-services":""}
      >
        {hover ? <Megamenu /> : ""}
      </div>
    </div>
  );
};

export default Navbar;
