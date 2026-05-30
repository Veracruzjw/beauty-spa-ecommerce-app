import { NavLink } from 'react-router'

import ladyImage from "../assets/lady.jpg";

function HeroSection() {
    
  return (
    <div style={{ backgroundImage: `url(${ladyImage})` }}  className=' relative h-[70vh] md:h-160 bg-cover bg-center '>
      <div className="absolute inset-0 bg-black/35 flex flex-col gap-8 md:gap-20 items-center text-center justify-center ">
        <h1 className='uppercase text-3xl
          sm:text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight'>The Best Lip Gloss in town</h1>
          <NavLink to="/shop" className='bg-white uppercase hover:bg-black text-xl md:text-2xl hover:text-white py-3 md:py-7.5 px-8 md:px-18 transition duration-300 cursor-pointer'>Shop now</NavLink>
      </div>
        
    </div>
  )
}

export default HeroSection