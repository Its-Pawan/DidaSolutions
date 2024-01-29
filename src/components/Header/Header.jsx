// import "./Header.scss";
import Banner from "../Banner/Banner";
import Navbar from "../navbar/Navbar";

const Header = ({ showMenu, menuActive, menuDeactive }) => {
  return (
    <header className="header h-[18rem] md:h-[100vh]">
      <Navbar
        showMenu={showMenu}
        menuActive={menuActive}
        menuDeactive={menuDeactive}
      />
      <Banner />
    </header>
  );
};

export default Header;
