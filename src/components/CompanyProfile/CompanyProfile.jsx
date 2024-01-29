import UniButton from "../Button/UniButton";
import "./CompanyProfile.scss";

const CompanyProfile = () => {
  return (
    <div className="CompanyProfile">
      <div className="container company-profile">
        <div className="flex flex-col  justify-between gap-8 md:gap-0 md:flex-row md:justify-between">
          <div className=" w-full md:w-[40%]">
            <h1>About Dida Solution</h1>
            <h2>
              Dida Solution LLP is Best Website
              <br />
              Development Agency in India
            </h2>
            <p>
              We evolve and explore your product idea with our professional
              guidance and industry analyst and help you to convert it into an
              industry usable Product with scalable Business opportunity.
            </p>
            <p>
              We invest in our people and develop a skilled workforce to develop
              Interactive Applications and Softwares based on latest
              technologies with cross platform integration and provide the
              constant maintenance to be competent with business requirements.
            </p>

            <a href="/about-us" className="btn more">
              <UniButton btnText="Read More" />
            </a>
          </div>

          <div className=" two-part w-full md:w-[50%] flex justify-between md:gap-5 gap-3">
            <div className="w-[50%] ">
              <img src="./assets/one.jpg" className="img-responsive" />
            </div>

            <div className="w-[50%]">
              <img src="./assets/two.jpg" className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
