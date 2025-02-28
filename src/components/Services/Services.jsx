import Img2 from "../../assets/coffee2.png";

const ServiceData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Latte",
    description:
      "A latte is a coffee drink made with espresso and steamed milk. The term as used in English is a shortened form of the Italian caffè latte, caffelatte or caffellatte.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.",
    aosDelay: "300",
  },
];

const Services = () => {
  return (
   <>
   <span id='services'></span>
      <div className="container py-10">
        <div className="text-center mb-20">
          <h1
            className="text-4xl font-bold text-gray-800"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Best Coffee in Town
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5  place-items-end">


          {ServiceData.map((data, index) => {
            return (
                
             
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-[#854d3d] hover:text-white shadow-xl duration-200 max-w-[300px] group relative cursor-pointer"
              >
                <div className="h-[122px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-8 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-gray-500 px-5 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        </>
    
  );
};

export default Services;
