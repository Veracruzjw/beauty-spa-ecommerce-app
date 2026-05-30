import { useEffect } from 'react'
import CartItem from './CartItem';
import { useCart } from '../contexts/CartContext';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router';



function CartModal({ setOpenModal }: { setOpenModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { cartItems, removeFromCart, addToCart, removeQuantity } = useCart();


  // add item
  const handleAdd = (product: any) =>{
    addToCart(product);
  }

  // remove item
  const handleRemove = (productId: any) =>{
    removeFromCart(productId);
  }

  // remove item quantity
  const handleRemoveQuantity = (productId: any) =>{
    removeQuantity(productId);
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );


    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

  return (
    <div className='fixed inset-0 z-50  '>
        {/* overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs
        " onClick={() => setOpenModal(false)}/>
        {/* cart panel */}
        <div className=" absolute right-0 top-0 h-screen bg-white w-full md:w-[70%] lg:w-2/5 overflow-y-auto "> 
            <div className=" p-3 md:p-4 flex gap-2.5 justify-end mb-2.5">
                <h1 className="text-[#ABA6A6] text-xl md:text-2xl uppercase">cart</h1>
                <AiOutlineClose className="text-black cursor-pointer text-2xl md:text-3xl" onClick={() => setOpenModal(false)} />
            </div>
            {
              cartItems &&  cartItems.length > 0 ? (<>
                <div className="p-3 md:p-5 flex flex-col gap-4 md:gap-5  ">
                  {
                    cartItems.map((item) => (
                    <CartItem key={item.id} item={item} handleRemove={handleRemove} handleAdd={handleAdd} handleRemoveQuantity={handleRemoveQuantity} />
                  ))}
              </div>
              </>) : (<div className=" flex items-center justify-center h-60 md:h-75">
                <p className="text-xl md:text-2xl lg:text-3xl text-center">No item in the cart</p>
              </div>
            )}

            <div className="mt-6 md:mt-8 border-t p-4 md:p-5">
                <div className="flex uppercase justify-between items-center text-2xl md:text-3xl mb-4 md:mb-5">
                    <span className='text-[#ABA6A6] '>Subtotal:</span>
                    <span>KSH {subtotal}</span>
                </div>

                <NavLink to="/checkout" onClick={() => setOpenModal(false)}
                    className=" border-2 border-black block text-center text-xl md:text-2xl uppercase bg-black text-white py-3 md:py-4 hover:bg-white hover:text-black ">
                    Proceed to Checkout
                </NavLink>

            </div>
        </div>   
    </div>
  )
}

export default CartModal

