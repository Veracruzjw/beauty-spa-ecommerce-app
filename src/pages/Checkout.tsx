import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

function Checkout() {
  const { cartItems, addToCart, removeFromCart, removeQuantity } = useCart();

  const deliveryFee = 350;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal + deliveryFee;

  return (
    <div className="">

      {/* TITLE */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl uppercase text-[#919296] py-5 md:py-7.5">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-10 py-5 px-4 md:px-6 lg:px-10">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="flex flex-col gap-4 md:gap-6 ">

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} >
                <CartItem
                  item={item}
                  handleAdd={addToCart}
                  handleRemove={removeFromCart}
                  handleRemoveQuantity={removeQuantity}
                />
              </div>
            ))
          ) : (
            <p className=" flex items-center justify-center h-40 md:h-75 text-2xl md:text-3xl">
              Your cart is empty
            </p>
          )}

        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="border border-[#919296] p-4 md:p-6 h-fit lg:sticky lg:top-6">

          {/* DELIVERY COST */}
          <div className="flex justify-between text-sm md:text-base mb-4">
            <span className="uppercase text-[#919296]">
              Delivery Cost
            </span>
            <span>KSH {deliveryFee}</span>
          </div>

          {/* CONTACT */}
          <div className="mb-6">
            <h3 className="uppercase text-sm md:text-base text-[#919296] mb-2">
              Contact Information
            </h3>
            <p className="text-sm mb-1">email@gmail.com</p>
            <p className="text-sm">+254 795083960</p>
          </div>

          {/* DELIVERY INFO */}
          <div className="mb-6">
            <h3 className="uppercase text-sm md:text-base text-[#919296] mb-2">
              Delivery Information
            </h3>
            <p className="text-sm mb-1">Wanjiku Suites</p>
            <p className="text-sm">3rd Floor</p>
          </div>

          {/* PAYMENT */}
          <div className="mb-6">
            <h3 className="uppercase text-sm md:text-base text-[#919296] mb-2">
              Payment Information
            </h3>
            <p className="text-sm mb-1">OPAY</p>
            <p className="text-sm">7052395083960</p>
          </div>

          {/* COST BREAKDOWN */}
          <div className="border-t border-[#919296] pt-4 text-sm space-y-2">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-[#919296] ">
                <span >
                  {item.title} x{item.quantity}
                </span>
                <span>
                  KSH {item.price * item.quantity}
                </span>
              </div>
            ))}

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>KSH {deliveryFee}</span>
            </div>

          </div>

          {/* TOTAL */}
          <div className="border-t uppercase border-[#919296] mt-4 pt-4 flex justify-between text-lg md:text-xl font-medium">
            <span>Total</span>
            <span>KSH {total}</span>
          </div>

          {/* PAY BUTTON */}
          <button className=" border border-black cursor-pointer w-full mt-6 bg-black hover:bg-white text-white hover:text-black text-lg md:text-2xl py-3 md:py-4 uppercase">
            Pay ( KSH {total} ) &#8640;
          </button>

        </div>
      </div>
    </div>
  );
}

export default Checkout;