import React,{useContext} from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton=(props)=>{

    const contextCtx=useContext(CartContext);
    let quantity=0;
    if (Array.isArray(contextCtx.items)) {
        contextCtx.items.forEach((item) => {
          quantity = quantity + Number(item.quantity);
        });
      } else {
        console.log('contextCtx.items is not an array', contextCtx.items);
      }
    console.log(quantity);
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        
        <span className={classes.badge}>
            {quantity}
        </span>
    </button>

}

export default HeaderCartButton;