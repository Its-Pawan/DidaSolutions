import "./Megamenu.scss";
import MegamenuCard from "./megamenu_card/MegamenuCard";

const Megamenu = () => {
  // Create an array with MegamenuCard data
  const megamenuData = [
    { title: "Web App Development", image: "./assets/web-development.jpg" },
    { title: "Mobile App Development", image: "./assets/mobile-app.jpg" },
    { title: "Eccommerce Solution", image: "./assets/ecommerce.jpg" },
    { title: "Digital Marketing", image: "./assets/digital-marketing.jpg" },
    { title: "Graphics Designing", image: "./assets/graphic.jpg" },
    { title: "CRM", image: "./assets/crm.jpg" },
  ];
  // Sort the array based on the title
  const sortedMegamenuData = [...megamenuData].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="hover-page ">
      <div className="container flex items-start justify-between">
        <div className="left-overlay w-[30%] h-auto">
          <img className=" w-[90%] " src="./assets/menu-side.jpg" alt="" />
        </div>

        <div className="right-overlay w-[70%] ">
          <h2 className="uppercase">it services</h2>
          <div className="rows flex flex-col gap-4">
            <div className="row grid grid-cols-3 gap-4 gap-y-12">
              {sortedMegamenuData.map((item, index) => (
                <MegamenuCard
                  key={index}
                  title={item.title}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
