import { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import { getAllProducts } from '../api/products';
import CartModal from '../components/CartModal';
import Skeleton from '../components/Skeleton';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category?: { name: string };
  [key: string]: any;
}

function Shop() {

  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortPrice, setSortPrice] = useState('');

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const productData = await getAllProducts();
        setProducts(productData || []);
      } catch (error) {
        console.log(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const getSkeletonCount = () => {
    if (window.innerWidth < 640) return 4;
    if (window.innerWidth < 1024) return 6;
    return 8;
  };

  const renderSkeletons = () => {
    return Array.from({ length: getSkeletonCount() }).map((_, index) => (
      <Skeleton key={index} />
    ));
  };


  // categories
  const categories = ["All", ...new Set(products.map((product) => product.category?.name)),];

  const shopProducts = products.filter((product) => {
    const filterMatch = filterCategory === 'All' || product.category?.name === filterCategory;
    
    return filterMatch;
  }).sort((a, b) => { // sort by price
    if (sortPrice === 'asc') {
      return a.price - b.price;
    } else if (sortPrice === 'desc') {
      return b.price - a.price;
    }
    return 0;
  })


  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 md:p-7.5 gap-4 md:gap-7.5">
          {/* filter */}
          <select className='text-xl md:text-2xl lg:text-3xl uppercase text-[#919296] outline-0 w-auto' disabled={loading} value={filterCategory} onChange={(e)=> {
            setFilterCategory(e.target.value);
          }}>
            {categories.map((category) => (
              <option key={category} value={category} className='uppercase'>
                {category === "All" ? "All Categories" : category}
              </option>
            ))}
          </select>

          {/* Sort */}
          <div className=" border border-[#E2DFDF] text-[#919296] px-4 md:px-10 py-2.5 w-auto">
            <select className='uppercase text-[18px] md:text-[22px] lg:text-[28px] w-full outline-0' disabled={loading} value={sortPrice} onChange={(e) => {
            setSortPrice(e.target.value)
          }}>
            <option disabled>Sort By Price</option>
            <option value="asc" className="">Ascending</option>
            <option value="desc" className="">Descending</option>
          </select>
          </div>
        </div>
        
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-7.5 py-6 md:py-7.5 px-4 sm:px-6 md:px-10 lg:px-20 border-b border-[#f5f5f5] ">
          { loading ? renderSkeletons()
          : shopProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center p-7.5">
            <button onClick={() => setOpenModal(true)} className='flex items-center gap-2.5 uppercase bg-white text-xl md:text-2xl text-[#919296] cursor-pointer border-2 border-[#ECECEE] hover:border-black py-3 md:py-4 px-5 md:px-6 '>Go To Cart <span className='text-xl md:text-3xl font-bold text-black'>&#8640;</span> </button>
          </div>
      </div>
      
      <HeroSection />
      {openModal && (<CartModal openModal={openModal} setOpenModal={setOpenModal}/>)}
    </div>
  )
}

export default Shop