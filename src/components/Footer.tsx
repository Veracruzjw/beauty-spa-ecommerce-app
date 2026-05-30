import { useState } from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link, NavLink } from 'react-router'
import CartModal from './CartModal';

function Footer() {

    const [openModal, setOpenModal] = useState(false);

    const [email, setEmail] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!email.trim()) return;

        alert("Thanks for subscribing!");
        setEmail("");
    };

  return (
    <>
        <div className='flex flex-col lg:flex-row justify-between gap-10 p-6 md:px-10 bg-[#F5F5F5] border-b border-[#F5F5F5]'>
            <div className="flex justify-between flex-col gap-1 sm:flex-row md:gap-40">
                <div className="text-black flex flex-col gap-1 md:gap-2.5 py-6 px-5 ">
                <h2 className=' uppercase font-bold text-xl md:text-2xl '>Gee Parlour</h2>
                <div className=" pl-4 md:pl-5  ">
                    <ul className=' text-xl md:text-2xl flex flex-col py-2.5 gap-3 md:gap-5  '>
                    <NavLink to= "/" className= "hover:text-[#e3261f]">
                        <li className=' flex items-center gap-3 md:gap-5 '>
                            <span className='w-1 h-1 bg-black rounded-full '></span> Home</li>
                    </NavLink>
                    <NavLink to= "/shop" className="hover:text-[#e3261f]" >
                        <li className='flex items-center gap-3 md:gap-5'>
                            <span className='w-1 h-1 bg-black rounded-full '></span> Shop</li>
                    </NavLink>
                    <button onClick={() => setOpenModal(true)} className="cursor-pointer hover:text-[#e3261f]">
                        <li className='flex items-center gap-3 md:gap-5'>
                            <span className='w-1 h-1 bg-black rounded-full '></span> Cart</li>
                    </button>
                    {openModal && (<CartModal setOpenModal={setOpenModal}/>)}
                    <NavLink to= "/about" className="hover:text-[#e3261f]">
                        <li className='flex items-center gap-3 md:gap-5'>
                            <span className='w-1 h-1 bg-black rounded-full '></span> About Us</li>
                    </NavLink>
                </ul>
                </div>
            </div>

            <div className="text-black flex flex-col gap-1 md:gap-2.5 py-6 px-5 ">
                <h2 className=' font-bold text-xl md:text-2xl '>FAQs</h2>
                <div className=" pl-4 md:pl-5  ">
                    <ul className=' text-xl md:text-2xl flex flex-col py-2.5 gap-3 md:gap-5  '>
                    <NavLink to= "/" className= "hover:text-[#e3261f]">
                        <li className=' flex items-center gap-3 md:gap-5 '>
                            <span className='w-1 h-1 bg-black rounded-full '></span> Our Location</li>
                    </NavLink>
                    <NavLink to= "/" className="hover:text-[#e3261f]" >
                        <li className='flex items-center gap-3 md:gap-5'>
                            <span className='w-1 h-1 bg-black rounded-full '></span> Wholesale & Retail ?</li>
                    </NavLink>
                    <NavLink to= "/" className="hover:text-[#e3261f]">
                        <li className='flex items-center gap-3 md:gap-5'>
                            <span className='w-1 h-1 bg-black rounded-full '></span> Partner with us ?</li>
                    </NavLink>
                    <NavLink to= "/" className="hover:text-[#e3261f]">
                        <li className='flex items-center gap-3 md:gap-5'>
                            <span className='w-1 h-1 bg-black rounded-full '></span> Delivery ?</li>
                    </NavLink>
                </ul>
                </div>
            </div>
            </div>
            
            <div className=" flex flex-col gap-4 md:gap-2.5 w-full lg:w-auto py-6 px-5">
                <h2 className=' font-bold text-xl md:text-2xl lg:text-right '>NEWS LETTER</h2>
                <form onSubmit={handleSubscribe} className=" flex flex-col lg:items-end gap-2.5  ">
                    <input type="email" required className='w-full md:w-92.5 px-10.25 py-4.25 bg-white placeholder:text-black text-xl md:text-2xl placeholder:text-center outline-none' placeholder='Enter your email address' value={email} onChange={handleChange} />
                    <button type='submit' className=' bg-white hover:bg-[#e3261f] hover:text-white text-xl md:text-2xl  py-4 md:py-5 px-10 md:px-17 transition cursor-pointer w-full md:w-92.5 lg:w-65 '>SUBSCRIBE</button>
                </form>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-7.5 px-5 md:px-15 py-5 items-center">
            <div className=" text-2xl md:text-3xl flex gap-7.5">
                <Link to="https://facebook.com" target='_blank'>
                    <AiOutlineFacebook />
                </Link>
                <Link to="https://instagram.com" target='_blank'>
                    <AiOutlineInstagram />
                </Link>
                <Link to="https://wa.me/2348012345678" target='_blank'>
                    <AiOutlineWhatsApp />
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-7.5 items-center justify-center">
                <h5 className="text-xl md:text-2xl">geeparlour@gmail.com</h5>
                <h5 className="text-xl md:text-2xl">+234 7095083960</h5>
            </div>
        </div>
    </>
    
  )
}

export default Footer