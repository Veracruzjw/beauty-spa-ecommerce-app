import { useEffect, useRef } from 'react'
import HeroSection from '../components/HeroSection'
import ProductSlider from '../components/ProductSlider'
import { getProductsByCategory } from '../api/products'
import { Link, NavLink } from 'react-router'

// images
import ladyFlowers from "../assets/lady-flowers.jpg";
import lipgloss from "../assets/lipgloss.jpg";
import aloeCream from "../assets/aloe-cream.jpg";
import elseve from "../assets/elseve.jpg";
import skincare from "../assets/skincare.jpg";
import oilbottle from "../assets/oil-bottle.jpg";

const banners = [
  {
    image: ladyFlowers,
    alt: "Lady with Flowers",
    text: "Request Now",
  },
  {
    image: lipgloss,
    alt: "Lipgloss",
    text: "Shop Now",
  },
  {
    image: aloeCream,
    alt: "Aloe Cream",
    text: "Shop Now",
  },
  {
    image: elseve,
    alt: "Elseve",
    text: "Shop Now",
  },
  {
    image: skincare,
    alt: "Skincare",
    text: "Shop Now",
  },
];


function Home() {

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) return;

    const interval = setInterval(() => {
      const items = container.querySelectorAll(".slide");
      if (!items.length) return;

      indexRef.current =
        indexRef.current >= items.length - 1 ? 0 : indexRef.current + 1;

      const nextItem = items[indexRef.current] as HTMLElement;

      container.scrollTo({
        left: nextItem.offsetLeft,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="py-6 md:py-7.5 px-4 "> {/*top-section*/}

        {/* MOBILE + TABLET CAROUSEL */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
          >
            {banners.map((banner, index) => (
              <div
                key={index}
                className="slide flex justify-center min-w-full md:min-w-[80%] h-105 snap-center relative overflow-hidden"
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />

                <Link
                  to="/shop"
                  className="absolute bottom-8 uppercase text-xl md:text-2xl bg-white hover:bg-black hover:text-white text-black py-4 px-8 transition-colors"
                >
                  {banner.text}
                </Link>
              </div>
            ))}
          </div>
      </div>

          {/* DESKTOP GRID */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] gap-5 md:gap-7.5">
          
            <div className="h-82 relative overflow-hidden  flex flex-col items-center">
              <img src={ladyFlowers} alt="Lady with Flowers" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105  " />
              <Link to="/shop" className=" absolute bottom-10 uppercase text-xl md:text-2xl bg-white hover:bg-black text-black hover:text-white py-4 px-8 md:py-6 md:px-15 cursor-pointer ">Request Now</Link>
            </div>

            <div className=" h-182.5 relative flex flex-col items-center md:row-span-2">
              <img src={lipgloss} alt="Lipgloss" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 " />
              <Link to="/shop" className=" absolute bottom-10 uppercase text-xl md:text-2xl bg-white hover:bg-black text-black hover:text-white py-4 px-8 md:py-6 md:px-15 cursor-pointer ">Shop Now</Link>
            </div>

            <div className=" h-82 relative flex flex-col items-center">
              <img src={aloeCream} alt="Aloe cream" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 " />
              <Link to="/shop" className=" absolute bottom-10 uppercase text-xl md:text-2xl bg-white hover:bg-black text-black hover:text-white py-4 px-8 md:py-6 md:px-15 cursor-pointer ">Shop Now</Link>
            </div>

            <div className=" h-93 relative flex flex-col items-center">
              <img src={elseve} alt="Elseve cream" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 " />
              <Link to="/shop" className=" absolute bottom-10 uppercase text-xl md:text-2xl bg-white hover:bg-black text-black hover:text-white py-4 px-8 md:py-6 md:px-15 cursor-pointer ">Shop Now</Link>
            </div>

            <div className=" h-93 relative flex flex-col items-center">
              <img src={skincare} alt="Skincare" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 " />
              <Link to="/shop" className=" absolute bottom-10 uppercase text-xl md:text-2xl bg-white hover:bg-black text-black hover:text-white py-4 px-8 md:py-6 md:px-15 cursor-pointer ">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className=""> {/*baby-girls-section*/}
        <ProductSlider title="Luxury Furniture & Home Decor" fetchFunction={async () => (await getProductsByCategory(3)) || []} />
      </div>

      <div className="w-full"> {/*best-gloss-section*/}
        <h1 className='uppercase py-6 px-4 md:p-7.5 text-2xl md:text-3xl lg:text-4xl text-[#919296] text-center '>The best lip gloss in town</h1> {/*title*/}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7.5 p-4 md:p-7.5 text-base md:text-lg lg:text-2xl'>
            <div className="flex justify-center lg:pl-[35%]">
                <img src={lipgloss} alt="lipgloss" className="w-full max-w-md md:h-full object-cover" />
            </div>

            <div className="flex md:flex-col gap-4 md:gap-5.25 items-start lg:pr-[8%]">
                <div className="">
                    <img src={oilbottle} alt="oilbottle" className="object-cover w-40 h-full md:w-68 md:h-66" />
                </div>
                <div className="w-full flex flex-col gap-4 md:gap-5.25 items-start">
                  <h2 className="uppercase  ">Gee lip gloss</h2> {/*title*/}
                <div className="text-[#ABA6A6] ">KSH 1,400</div>
                <p className="">Sangria is a hydrating lip oil that captures the scent of a delicious sangria. Its nourishing formula glides on smoothly, delivering rich hydration and a glossy finish that keeps your lips feeling soft and supple. Perfect for adding a touch of fruity flair to your routine, Sangria will leave your lips looking and smelling irresistible!</p>
                
                <NavLink to="/shop" className="uppercase bg-white text-[#919296] hover:bg-black hover:text-white border-2 border-[#ABA6A6] hover:border-black py-3.25 px-8 md:px-18 cursor-pointer ">Shop Now</NavLink>
                </div>
            </div>

        </div>
      </div>

      <div className=""> {/*hair-food-section*/}
        <ProductSlider title="Gift Ideas for you" fetchFunction={async () => (await getProductsByCategory(5)) || []}  />
      </div>
      <HeroSection />

    </>
  )
}

export default Home