// import "./Header.scss";
import Banner from "../Banner/Banner";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="header h-[100vh]">
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;
