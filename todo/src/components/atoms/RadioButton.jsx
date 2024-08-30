import React from "react";
import {ReactComponent as RadioIcon} from '../../icons/icon-check.svg'
import './RadioButton.css';

const RadioButton = ({ variant="", onClick }) => {

  const handleClick=(e)=>{
    e.preventDefault();
    onClick(e);
  }

  return ( 
          <RadioIcon className={`radio__${variant}`} onClick={handleClick}/>
  );
};

export default RadioButton;
