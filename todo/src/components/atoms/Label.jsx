import React from "react";
import './Label.css';

const Label=({value,variant="completed"})=>{

    return(
        
        <label className={`label label__${variant}`}>{value}
            
        </label>
    )
}



export default Label;