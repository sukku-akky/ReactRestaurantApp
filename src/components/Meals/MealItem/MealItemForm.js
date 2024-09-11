import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
import {  useContext } from "react";

const MealItemForm=(props)=>{
    
    const cartCtx=useContext(CartContext);
    
    const addItemHandler=(event)=>{
        event.preventDefault();
       
        const quantity=document.getElementById("amount_"+props.item.id).value;
      
        
    
        
        cartCtx.addItem({...props.item,quantity:quantity});
        
       
        
        
        
        

    }
    return <form className={classes.form} onSubmit={addItemHandler}>
        <Input label="Amount"  
        input={{
            id:"amount_"+props.item.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
            
           
           
           
            
        }}/>
        <button type="submit">+ Add</button>
    </form>

}

export default MealItemForm;