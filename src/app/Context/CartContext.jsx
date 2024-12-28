'use client';
import React, { useEffect, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const UseCartContext = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => {
    const [itemsCount, setItemsCount] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [Subtotal, setSubTotal] = useState(0); 

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCart = JSON.parse(localStorage.getItem('cartItem')) || [];
            setCartItems(storedCart);
        }
    }, []);

useEffect(() => {
        const subtotal = cartItems.reduce((prev, curr) => {
            return prev + Number(curr.price.replace(/,/g, '')) * curr.quantity;
        }, 0);
        setSubTotal(subtotal);
    }, [cartItems]);

    const addToCart = (Product) => {
        alert("Adding to Cart");
        setCartItems((prevItems) => {
            const isItemExists = prevItems.find((item) => item.id === Product.id);
            let updatedCart;
            if (isItemExists) {
                updatedCart = prevItems.map((item) =>
                    item.id === Product.id
                        ? { ...item, quantity: item.quantity + itemsCount }
                        : item
                );
            } else {
                updatedCart = [...prevItems, { ...Product, quantity: itemsCount }];
            }
            if (typeof window !== 'undefined') {
                localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            }
            return updatedCart;
        });
    };

    const deleteCartItem = (product) => {
        setCartItems((prevItems) => {
            const updatedCart = prevItems.filter((item) => item.id !== product.id);
            if (typeof window !== 'undefined') {
                localStorage.setItem('cartItem', JSON.stringify(updatedCart));
                setCartItems(updatedCart)
            }
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        if (typeof window !== 'undefined') {
            localStorage.setItem('cartItem', JSON.stringify([]));
        }
    };

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cartItems,
                deleteCartItem,
                itemsCount,
                setItemsCount,
                setCartItems,
                clearCart,
                Subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
