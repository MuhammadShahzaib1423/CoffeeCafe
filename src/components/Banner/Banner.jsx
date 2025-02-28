import React from 'react'
import Bannerimg from '../../assets/coffee_texture.jpg'
import Coffecup from '../../assets/coffee_white.png'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from "react-icons/io5";
import { GrIceCream } from 'react-icons/gr';

const bgImage={
    backgroundImage: `url(${Bannerimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    backgroundColor: '#270c03',
}
const Banner = () => {
  return (
    <div style={bgImage}>
  <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Coffee Cup Image */}
      <div>
        <img src={Coffecup} alt="" className="max-w-[430px] w-full mx-auto spin drop-shadow-xl" />
      </div>

      {/* Text and Icon Section */}
      <div className="flex flex-col justify-center gap-6 sm:pt-0">
        <h1 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "Pacifico, cursive" }}>
          Premium Blend Coffee
        </h1>
        <p className="text-sm text-gray-500 tracking-wide leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore rerum illo fuga? Autem fugit non voluptatem nisi, animi nesciunt!
        </p>

        <div className='grid grid-cols-2 gap-6 py-2'>
            <div className='space-y-5'>
        <div className="flex items-center gap-3 ">
          <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
          <span className="text-sm text-gray-700">Premium Coffee</span>
        </div>
        <div className="flex items-center gap-3 ">
          <GrIceCream className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
          <span className="text-sm text-gray-700">Cold Coffee</span>
        </div>
        <div className="flex items-center gap-3 ">
          <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
          <span className="text-sm text-gray-700">Secure Payment</span>
        </div>
      </div>
      <div className=' border-l-4 border-[#854d3d]/50 pl-3 space-y-3'>
        <h1 className='text-2xl font-semibold text-center' style={{ fontFamily: "Pacifico, cursive" }} >Coffee Lover</h1>
        <p className='text-gray-500 text-sm'> A perfect cup of coffee is more than just a beverage; it’s a comforting ritual that sets the tone for the day. The rich aroma, the warmth of the cup in your hands, and the first sip of smooth, flavorful coffee can awaken your senses and provide a moment of tranquility before the day’s hustle begins. Whether you prefer a strong espresso, a creamy latte, or a classic black coffee, each sip offers a sense of comfort and energy. </p>
      </div>
      </div>
      </div>

    </div>
  </div>
</div>

  )
}

export default Banner
