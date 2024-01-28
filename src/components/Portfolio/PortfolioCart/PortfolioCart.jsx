import "./PortfolioCart.scss";
import { FaPlus } from "react-icons/fa";
const PortfolioCart = ({ img, imgTitle, isClicked }) => {
  // console.log(img);
  return (
    <div className="PortfolioCart " onClick={isClicked}>
      <div className="  text-center ">
        <div className="img-wrap">
          <a>
            <img src={img} alt={imgTitle} />
            <div className="gallery-overlay">
              <h3>{imgTitle}</h3>
              <FaPlus className="fa text-center w-full" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCart;
