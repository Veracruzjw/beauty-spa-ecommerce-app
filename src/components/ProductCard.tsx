import { Link } from 'react-router'
import { useCart } from '../contexts/CartContext';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity?: number;
  [key: string]: any;
}

interface CartContextType {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeQuantity: (productId: number) => void;
  cartItems: Product[];
}

function ProductCard({ product, className = "" }: { product: Product; className?: string }) {

    const { addToCart } = useCart() as CartContextType;
    
    const handleAdd = async (product: Product) =>{
        
        try {
          addToCart(product);

          toast.success(
              `${product.title} added to cart`
          );

        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
      };

  return (
    <div className={`flex flex-col text-center ${className} justify-between gap-4 md:gap-5 shadow shadow-[#ECECEE] p-2.5 `}>
            <Link to={`/product/${product.id}`} >
              <img src={product.images?.[0] || ''} alt={product.title} className="w-full h-44
            sm:h-52 md:h-56 object-cover" />
            </Link>
            <div className="flex flex-col gap-3 md:gap-5 items-center justify-between ">
              <h3 className="uppercase  text-lg md:text-xl lg:text-2xl h-12 md:h-16 line-clamp-2 overflow-hidden ">{product.title}</h3> {/*title*/}
              <div className="text-[#ABA6A6] text-lg md:text-xl lg:text-2xl ">KSH {product.price}</div>
              <button onClick={()=> handleAdd(product)} className=" uppercase bg-white text-lg md:text-xl lg:text-2xl text-[#919296] hover:bg-black hover:text-white border-2 border-[#ECECEE] hover:border-black cursor-pointer py-2 md:py-3.25 px-6 md:px-18 w-full ">Add To Cart</button>
              
            </div>
          </div>
  )
}

export default ProductCard