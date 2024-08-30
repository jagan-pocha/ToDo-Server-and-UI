import React from 'react';
import './TaskItem.css';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import RadioButton from '../atoms/RadioButton';
import { useStore } from '../../store/StoreContect';
import { observer } from 'mobx-react-lite';
import { ReactComponent as CrossIcon } from '../../icons/icon-cross.svg'


const TaskItem=observer(()=>{

    const {toDoStore}=useStore();
    const allTasks=toDoStore.filteredTodos;
    
    //function to change task status from active to completed and vice versa
    const handleCheck=(e,item)=>{
        e.preventDefault();
        item.status==="active"?
        toDoStore.markComplete(item.id):
        toDoStore.unMark(item.id);
    }

     //function to delete a task based on task Id
    const handleDelete=(item)=>{
        toDoStore.deleteTask(item.id);
    }


    return(
        
         allTasks?
         <div className="tasks__wrapper">
            {allTasks.map((item, index)=> //iterate over the tasks and display
                {  const active=item.status==="completed"; //fetch the status of item
                return (
                        <div className="task__item" key={index}>   
                            <div className="radio__task">
                                <RadioButton onClick={(e)=>handleCheck(e,item)} variant={`${active? "checked":""}`}/>
                                <Label value={item.title} variant={`${active? "completed":""}`} />
                            </div> 
                            <Button value="" disable={false} variant="" onButtonPress={()=>handleDelete(item)} icon={CrossIcon}/>
                        </div>
                        )
                    } 
                )}  
        </div>     
        :
        <></>    
    )
})

export default TaskItem;