import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
  [key: string]: any;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>(JSON.parse(localStorage.getItem("cartItems")) || []);

    // Function to add item to cart
    const addToCart = (product: Product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id    
        );

        product.quantity = product.quantity || 1;
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, product]);
        }
    };

    // Remove item from cart
    const removeFromCart = (productId: number) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    // Remove quantity of an item from cart
    const removeQuantity = (productId: number) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === productId    
            );
 
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...cartItems];
                updatedCartItems[existingItemIndex].quantity -= 1;
                if (updatedCartItems[existingItemIndex].quantity === 0){
                    removeFromCart(productId);

                } else {
                setCartItems(updatedCartItems);
                }
            }
        };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    
    
  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeQuantity }}>{children}</CartContext.Provider>;
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
