import { useState } from "react";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeContactBtn from "./components/HomeContactBtn/HomeContactBtn";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import ScrollToTop from "./ScrollGoTop";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const menuActive = () => setShowMenu(true);
  const menuDeactive = () => setShowMenu(false);
  return (
    <>
      <Header
        showMenu={showMenu}
        menuActive={menuActive}
        menuDeactive={menuDeactive}
      />
      <div onClick={menuDeactive}>
        <Services />
        <CompanyProfile />
        <Featured />
        <HomeContactBtn />
        <Portfolio />
        <Footer />
        <ScrollToTop showBelow={100} />
      </div>
    </>
  );
}

export default App;
