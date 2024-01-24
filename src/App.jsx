import "./App.css";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import Featured from "./components/Featured/Featured";
import Header from "./components/Header/Header";
import HomeContactBtn from "./components/HomeContactBtn/HomeContactBtn";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Services />
      <CompanyProfile />
      <Featured/>
      <HomeContactBtn/>
      {/* <Portfolio/> */}
    </>
  );
}

export default App;
