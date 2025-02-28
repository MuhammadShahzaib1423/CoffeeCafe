import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore rerum illo fuga? Autem fugit non voluptatem nisi, animi nesciunt!",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "CTO",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore rerum illo fuga? Autem fugit non voluptatem nisi, animi nesciunt!",
  },
  {
    id: 3,
    name: "Steeve John",
    title: "CEO",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore rerum illo fuga? Autem fugit non voluptatem nisi, animi nesciunt!",
  },
  {
    id: 4,
    name: "Fiona Doe",
    title: "CTO",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore rerum illo fuga? Autem fugit non voluptatem nisi, animi nesciunt!",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10 flex justify-center">
      <div className="container">
      <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold " style={{ fontFamily: "Pacifico, cursive" }}
          >
            Testimonials
          </h1>
        </div>
      
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-[#854d3d]/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <p className="text-xs text-gray-500">{data.desc}</p> 
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

