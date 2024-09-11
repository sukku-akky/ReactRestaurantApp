import classes from "./Input.module.css";


const Input=(props)=>{

    
    return (

        <div className={classes.input}>
         <label htmlFor={props.input.id}>{props.label}</label>
         <input id={props.input.id} {...props.input} onChange={props.onChange} value={props.value}/>
        </div>
    )

}

export default Input;