import "./MegamenuCard.scss";

const MegamenuCard = ({title,image}) => {
  return (
    <div className=" megamenu_card">
      <a href="">
        <div className="overlay-base ">
          <img
            src={image}
            alt="img"
            className="rounded-md"
          />
          <div className="menu-overlay">
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MegamenuCard;
