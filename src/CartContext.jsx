import React, { createContext, useState } from "react";

export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getItem = (id) => {
    return cartItems.find((i) => id === i.id);
  };

  const addItem = (item) => {
    const itemToUpdate = getItem(item.id);

    if (itemToUpdate) {
      const updatedCart = [
        ...cartItems.filter((i) => i.id !== itemToUpdate.id),
        { ...itemToUpdate, quantity: itemToUpdate.quantity + 1 },
      ];

      setCartItems([...updatedCart]);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    const itemToUpdate = getItem(id);

    if (itemToUpdate) {
      const updatedCart = [
        ...cartItems.filter((i) => i.id !== itemToUpdate.id),
        { ...itemToUpdate, quantity: itemToUpdate.quantity - 1 },
      ];

      setCartItems([...updatedCart]);
    } else {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
