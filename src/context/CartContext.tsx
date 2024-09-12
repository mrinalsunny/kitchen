import { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a Cart Item
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

// Define the shape of the Cart Context
interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    updateQuantity: (id: string, quantity: number) => void;
}

// Create the context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the Cart Context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// CartProvider component
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Add a pizza to the cart
    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            return [...prevCart, item];
        });
    };

    // Remove a pizza from the cart
    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    };

    // Update the quantity of a pizza in the cart
    const updateQuantity = (id: string, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            )
        );
    };

    // Clear the entire cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
