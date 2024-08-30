import React, {  useState } from 'react';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import { ReactComponent as PlusIcon } from '../../icons/icon-plus.svg';
import './TaskInput.css';
import { useStore } from '../../store/StoreContect';
import { observer } from 'mobx-react-lite';


const TaskInput=observer(()=>{

    const[input,setInput]=useState("");
    const {toDoStore}=useStore();
    
    //function that calls action to add a task to the server
    const handleAdd=(e)=>{
        e.preventDefault();
        if(input.length>0){ //checking if the user type some task title
        toDoStore.addTodo(input);
        }
        setInput("");
    }

    return(
        <div className="add__task">    
            <InputText value={input} disable={false} onTaskType={(e)=>setInput(e.target.value)} />
            <Button value="" disable={false} variant=""  onButtonPress={(e)=>handleAdd(e)} icon={PlusIcon}/>
        </div>
    )
})

export default TaskInput;