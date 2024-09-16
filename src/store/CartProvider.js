import React,{useState,useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState={
  items:[]
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      // Update the quantity
      const updatedItem = {
        ...existingCartItem,
        quantity: Number(existingCartItem.quantity) +Number(action.item.quantity),
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // Add the new item
      updatedItems.push({ ...action.item});
    }

    return {
      ...state,
      items: updatedItems, 
    };
  }

  if (action.type === 'REMOVE') {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      if (existingCartItem.quantity === 1) {
        // Remove the item if quantity is 1
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        // Decrease the quantity
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }
    }

    return {
      ...state,
      items: updatedItems, 
    };
  }

  return state;
};

const CartProvider=(props)=>{

    const[cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState);
   
    const[totalAmount,setTotalAmount]=useState(0);


    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item});
      
          
          setTotalAmount((prevTotalAmount)=>prevTotalAmount+item.price*item.quantity);
    };

    const removeItemFromCartHandler=(id)=>{
      const existingItem = cartState.items.find((item) => item.id === id);
  
      
      if (existingItem) {
        dispatchCartAction({ type: "REMOVE", id: id });
        
       
        setTotalAmount((prevTotalAmount) => prevTotalAmount - existingItem.price);
    }
  }    
    

    const cartContext={
        items:cartState.items,
        totalAmount:totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )

  };

export default CartProvider;