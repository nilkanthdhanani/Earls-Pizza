import { createContext, useContext, useEffect, useState } from 'react';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (pizza, quantities) => {
        const uniqueId = Date.now();
        const newCartItem = {
            uniqueId,
            id: pizza.id,
            name: pizza.name,
            image: pizza.image,
            price: pizza.price,
            mediumPrice: pizza.mediumPrice,
            largePrice: pizza.largePrice,
            quantities,
        };

        setCartItems([...cartItems, newCartItem]);
    };

    const removeFromCart = (uniqueId) => {
        setCartItems(cartItems.filter(item => item.uniqueId !== uniqueId));
    };

    const updateCartItemQuantity = (uniqueId, size, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.uniqueId === uniqueId
                    ? {
                        ...item,
                        quantities: {
                            ...item.quantities,
                            [size]: newQuantity < 0 ? 0 : Math.min(newQuantity, 10),
                        },
                    }
                    : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity, loading, }} >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

