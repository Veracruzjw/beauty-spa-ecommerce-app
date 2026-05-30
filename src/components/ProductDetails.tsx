import { useEffect, useState } from 'react'
import { useCart } from '../contexts/CartContext';
import { toast } from 'react-toastify';

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
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

function ProductDetails({ product }: { product: Product }) {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
            setSelectedImage(product.images?.[0] || null);
    }, [product]);

    const { addToCart } = useCart() as unknown as CartContextType;

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
    <div className='w-full'>
        <h1 className='uppercase py-6 px-4 md:p-7.5 text-2xl md:text-3xl lg:text-4xl text-[#919296] text-center '>{product.title}</h1> {/*title*/}
        <div className='grid grid-cols-1
          lg:grid-cols-2 p-4 md:p-7.5 gap-7.5 text-base md:text-lg lg:text-2xl'>
            <div className="flex justify-center pl-0 lg:pl-[30%]">
                {selectedImage && (
                    <img 
                    src={selectedImage} 
                    alt={product.title} className="w-full h-auto max-w-125 object-cover" />)}
            </div>
                {/* Product details */}
            <div className="flex flex-col gap-4 md:gap-5.25 items-start pr-0 lg:pr-[8%]">
                <h2 className="uppercase ">{product.title}</h2> {/*title*/}
                <div className="text-[#ABA6A6] ">KSH {product.price}</div>
                <div className="flex gap-3 p-1"> {/* img carousel */}
                    {product.images?.slice(0,3).map((img: string, index: number)=> (
                        <img key={index} src={img}
                         alt="" 
                        onClick={()=> setSelectedImage(img)}
                        className="object-cover cursor-pointer w-16 h-16 md:w-22.5 md:h-22.5 " />
                    
                    ))}
                </div>
                <p className=""> {product.description}</p>
                
                <button onClick={()=> handleAdd(product)} className="uppercase bg-white text-[#919296] hover:bg-black hover:text-white border-2 border-[#ABA6A6] hover:border-black py-3 px-8 md:px-18 cursor-pointer w-full
              sm:w-auto"> Add To Cart</button>
            </div>

        </div>
    </div>
  )
}

export default ProductDetails