import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
  [key: string]: any;
}

interface CartItemProps {
  item: Product;
  handleRemove: (id: number) => void;
  handleAdd: (product: Product) => void;
  handleRemoveQuantity: (id: number) => void;
}

function CartItem({ item, handleRemove, handleAdd, handleRemoveQuantity }: CartItemProps) {
  return (
    <div className=' w-full md:w-127 md:h-50 flex gap-2.5 p-2.5 shadow shadow-[#F5F5F5'>
        <div className="w-32 h-32 shrink-0 md:h-44 md:w-35">
            <img src={item.images?.[0]} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-3 md:gap-4 flex-1">
            <h3 className="uppercase text-lg md:text-xl lg:text-2xl line-clamp-1 overflow-hidden">{item.title}</h3> {/*title*/}
            <div className="text-[#ABA6A6] text-lg md:text-xl lg:text-2xl ">KSH {item.price}</div>
            <div className="flex gap-4 md:gap-7.5 ">
                <div className=" border-2 py-2 px-4 md:py-3 md:px-10 border-[#ABA6A6] hover:border-black text:xl md:text-2xl  flex items-center justify-center gap-4 cursor-pointer text-[#656363] w-fit"> {/* quantity-controls */}
                    <AiOutlineMinus className="text:xl md:text-2xl cursor-pointer text-[#919296] hover:text-black" onClick={() => handleRemoveQuantity(item.id)} />
                        <span>{item.quantity}</span>
                    <AiOutlinePlus className="text:xl md:text-2xl cursor-pointer text-[#919296] hover:text-black" onClick={() => handleAdd(item)} />
                </div>

                <button className=" cursor-pointer text-left text-[#ABA6A6] hover:text-black uppercase text:xl md:text-2xl" onClick={() => handleRemove(item.id)}> {/* remove-button */}
                    remove
                </button>

            </div>
        </div>
    </div>
  )
}

export default CartItem