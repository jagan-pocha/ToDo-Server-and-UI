import React, { useState } from 'react';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import './ManageTasks.css';
import { useStore } from '../../store/StoreContect';
import { observer } from 'mobx-react-lite';


const ManageTasks=observer(()=>{

    const [activeButton, setActiveButton] =useState(1);//to change the class of active button
    const {toDoStore}=useStore(); 
    const activeCount=toDoStore.activeCount;

    //function that calls action to fetch All tasks upon click of 'all' button
    const handleAll=(e)=>{
        e.preventDefault();
        setActiveButton(1);
        
        toDoStore.fetchTodos();
       
    }

    //function that calls action to fetch active tasks upon click of active button
    const handleActive=(e)=>{
        e.preventDefault();
        setActiveButton(2);
        toDoStore.filterActives();
   
    }

    //function that calls action to fetch completed tasks upon click of active button
    const handleCompleted=(e)=>{
        e.preventDefault();
        setActiveButton(3);
        toDoStore.filterCompleted();
        
    }

    //function that calls action to clear all the completed tasks
    const handleClear=(e)=>{
        e.preventDefault();
        toDoStore.deleteCompleted();
    }

    return(
        <div className='manage__tasks'>    
            <div className='item__count'>
                <Label value={`${activeCount} items left`} variant={"info"} />
            </div>
            <div className='task__categories'>
                <Button value="All" disable={false} variant={activeButton===1?'active':""} onButtonPress={handleAll} icon={null}/>
                <Button value="Active" disable={false} variant={activeButton===2?'active':""} onButtonPress={handleActive} icon={null}/>
                <Button value="completed" disable={false} variant={activeButton===3?'active':""} onButtonPress={handleCompleted} icon={null}/>
            </div>
            <div className='clear__completed'>
                <Button value="Clear Completed" disable={false} variant="" onButtonPress={handleClear} icon={null}/>
            </div>
        </div>
    )
})

export default ManageTasks;