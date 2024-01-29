import "./FeaturedCard.scss";

const FeaturedCard = ({ title, icon, desc }) => {
  return (
    <div className="FeaturedCard">
      <div className=" features-box ">
        <div className="features-icon">
          <img src={icon} />
        </div>

        <p className="my-3 mt-6">
          <strong className="font-bold">{title}</strong>
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
