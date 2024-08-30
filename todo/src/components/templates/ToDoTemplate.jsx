import React from "react";
import './ToDoTemplate.css';
import Label from "../atoms/Label";
import { observer } from "mobx-react-lite";
import ToDoForm from '../organisms/ToDOForm.jsx'


const ToDOTemplate=observer(()=>{
  
    return(
        <div className="todo__template">
                <ToDoForm />  
            <div className="drag__info">
                <Label value={"Drag and drop to reorder list"} variant="info" />  
            </div>
        </div>
    )
})

export default ToDOTemplate;