"use client";
import { createContext, useContext } from "react";
import { useState,useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

  
  const [cart, setCart] = useState(storedCart);
  
    const addToCart = (item) => {
      setCart([...cart, item]);
       
    };
  // Almacenar el carrito en el localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};