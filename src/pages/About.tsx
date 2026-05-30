
import HeroSection from '../components/HeroSection';

function About() {
  return (
    <>
    <div className="px-6 md:px-12 text-[#656363] mb-10">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl uppercase text-[#919296] py-5 md:py-7.5">
        About us
      </h1>

      <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed">
        <p>
          We are a modern lifestyle brand focused on delivering quality products
          that blend beauty, comfort, and everyday elegance.
        </p>

        <p>
          From skincare essentials to home and lifestyle items, we carefully
          curate products that fit into your daily routine and elevate your
          experience.
        </p>

        <p>
          Our goal is simple: make shopping easy, enjoyable, and accessible
          without compromising on quality.
        </p>

        <p>
          We believe in products that feel good, look good, and last long.
        </p>
      </div>
      
    </div>
    <HeroSection />
    </>
  );
}

export default About;