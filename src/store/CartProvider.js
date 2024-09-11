import React,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{
    const [items,updateItems]=useState([]);
    const[totalAmount,setTotalAmount]=useState(0);


    const addItemToCartHandler=(item)=>{
        const existingItemIndex = items.findIndex(
            (cartItem) => cartItem.id === item.id
          );
          const existingItem = items[existingItemIndex];
          
      
          let updatedItems;
      
          if (existingItem) {
            // Create a new object with the updated quantity instead of mutating existingItem
            const updatedItem = {
              ...existingItem,
              quantity: Number(existingItem.quantity) + Number(item.quantity),
            };
      
            // Update the array with the new object
            updatedItems = [...items];
            updatedItems[existingItemIndex] = updatedItem;
          } else {
            // If the item is not found, add it to the array
            updatedItems = [item, ...items];
          }
      
          updateItems(updatedItems);
          setTotalAmount((prevTotalAmount)=>prevTotalAmount+item.price*item.quantity);
    };

    const removeItemFromCartHandler=(id)=>{};

    const cartContext={
        items:items,
        totalAmount:totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )

}

export default CartProvider;