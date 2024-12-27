'use client'
import React, { useEffect, createContext, useContext, useState } from "react";
import { productData } from "../constants/page";

const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {
    let [itemsCount, setItemsCount] = useState(1)
    let [cartItems, setCartItems] = useState([])
    let cart = JSON.parse(localStorage.getItem('cartItem'))
    let Subtotal = cart.reduce((prev, curr) => {
        return prev + Number(curr.price.replace(/,/g, '')) * curr.quantity
    }, 0)

    function addToCart(Product) {
        alert("Adding to Cart")
        setCartItems((prevItems) => {
            let isItemExists = prevItems.find((item) => item.id === Product.id)
            let updatedCart;
            if (isItemExists) {
                updatedCart = prevItems.map((item, index) =>
                    item.id === Product.id ?
                        { ...item, quantity: item.quantity + itemsCount } : item
                )
            } else {
                updatedCart = [...prevItems, { ...Product, quantity: itemsCount }]
            }
            localStorage.setItem('cartItem', JSON.stringify(updatedCart))
            return updatedCart

        })

    }

    function deleteCartItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cartItem'))
        let updatedCart = cart.filter((item) => item.id !== productId.id)
        setCartItems(updatedCart)
        localStorage.setItem("cartItem", JSON.stringify(updatedCart))
    }

    function clearCart() {
        setCartItems([])
    }

    return <CartContext.Provider value={
        { addToCart, cart, deleteCartItem, itemsCount, setItemsCount, setCartItems, clearCart, Subtotal, cartItems }
    }>
        {children}
    </CartContext.Provider>
}

export default CartProvider
