import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
const Cart=(props)=>{
    const cartCtx=useContext(CartContext);
   

    const cartItems=(
        <ul>
            {cartCtx.items.map((item)=>(
                <CartItem key={item.id} id={item.id} name={item.name} price={item.price}  quantity={item.quantity}/>
           
            ))}
            
        </ul> 
    )
    return <Modal onClick={props.closeCart}>
        <h1>{cartItems}</h1>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.closeCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>

}

export default Cart;