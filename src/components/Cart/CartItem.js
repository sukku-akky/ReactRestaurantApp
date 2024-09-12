import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const CartItem = (props) => {
    const cartCtx=useContext(CartContext);

    const onAdd=()=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            quantity:1,
        })
    }

    const onRemove=()=>{
        cartCtx.removeItem(props.id);
    }
  

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price.toFixed(2)}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;