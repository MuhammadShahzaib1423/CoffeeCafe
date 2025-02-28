
import  coffee2 from "../../assets/coffee2.png"
const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-[#270c03] flex justify-center items-center text-white">
      <div className="container py-2 pb-8 sm:pb-0 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center sm:text-left">
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6" >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span
                className="te xt-[#854d3d]"
                style={{ fontFamily: "Pacifico, cursive" }}
              >
                Coffee{" "}   
              </span>
              in the City
            </h1>
            <div className="mt-6 mx-5">
            <button className="bg-gradient-to-r from-[#854d3d] to-[#4a1e1b] border-2 border-[#854d3d] rounded-full px-6 py-3 text-white hover:scale-105 duration-200 cursor-pointer">
              Coffee and Code
            </button>
          </div>
             </div>
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative" >
            <img src={coffee2} className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin' alt="" />
             <div className="bg-gradient-to-r from-[#854d3d] to-[#4a1e1b] absolute top-0 left-20 p-3 rounded-xl float-animation cursor-pointer "> <h1>Hey Coder</h1> </div> 
             <div className="bg-gradient-to-r from-[#854d3d] to-[#4a1e1b] absolute bottom-0 right-20 p-3 rounded-xl float-animation2  cursor-pointer"> <h1>Best Coffee</h1> </div>            
             </div>     
        </div>
      </div>
    </div>
  );
};

export default Home;
