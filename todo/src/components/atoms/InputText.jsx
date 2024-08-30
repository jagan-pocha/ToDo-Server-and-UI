import React, { useEffect, useState } from "react";
import './InputText.css';

const InputText=({value,disable,onTaskType})=>{

    const [text,setText]=useState(value);

    useEffect(()=>{
        setText(value)
    },[value])

    //function to prevent default reload on button click
    const onInput=(e)=>{
        e.preventDefault();
        onTaskType(e);
    }

    return(
        <input className="input__text" autoComplete="off" name="input" type="input" placeholder="Type..." value={text} onChange={onInput} disabled={disable} />
    )
}

export default InputText;