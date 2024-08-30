import React from "react";
import './Button.css';

const Button=({variant="light",value,disable,onButtonPress, icon:Icon})=>{

    const handleClick=(e)=>{
         e.preventDefault();
        onButtonPress(e);
    }


    return(
        <button className={`button__${variant}`} type="button" onClick={handleClick} disabled={disable}>{ Icon ? <Icon className="button__icon"/>:null}{value}</button>
    )
}

export default Button;