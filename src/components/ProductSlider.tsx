import { useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description?: string;
  quantity?: number;
  [key: string]: any;
}

interface ProductSliderProps {
  title: string;
  fetchFunction: () => Promise<Product[] | undefined>;
}

const ProductSlider = ({ title, fetchFunction }: ProductSliderProps) => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const fetchData = await fetchFunction();
        setProducts(fetchData || []);
      } catch (error) {
        console.log(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [fetchFunction]);



  const scrollMore = () => {
    scrollRef.current?.scrollBy({
      left: window.innerWidth < 768 ? 220 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div>
        <h2 className='uppercase py-6 px-4 text-2xl md:text-3xl lg:text-4xl text-[#919296] text-center '>{title}</h2>
        
        <div ref={scrollRef} className="flex py-5 px-4 md:px-7.5 gap-4 md:gap-7.5 border-b border-[#f5f5f5] overflow-x-auto scroll-smooth scrollbar-none ">
          {loading
      ? Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className=" w-[80%] sm:w-[48%] md:w-[35%] lg:w-[27%] shrink-0 ">
            <ProductCardSkeleton />
          </div>
        ))
      : products.map((product) => (
            <div
            key={product.id}
            className=" w-[80%] sm:w-[48%] md:w-[35%] lg:w-[27%] shrink-0">
              <ProductCard product={product} />
          </div>
          ))}
        </div>

        {!loading && products.length > 3 && (
          <div className="flex justify-center p-5 md:p-7.5">
            <button onClick={scrollMore} className='flex items-center gap-2.5 uppercase bg-white text-xl md:text-2xl text-[#919296] cursor-pointer border-2 border-[#ECECEE] hover:border-black py-3 px-5 '>More <span className='text-xl md:text-3xl font-bold text-black'>&#8640;</span> </button>
          </div>
        )}
    </div>
  )
}

export default ProductSlider