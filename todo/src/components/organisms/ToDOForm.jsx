import React from "react";
import './ToDoForm.css';
import TaskInput from "../molecules/TaskInput";
import TaskItem from "../molecules/TaskItem";
import ManageTasks from "../molecules/ManageTasks";
import LogoTheme from "../molecules/LogoTheme";
import { observer } from "mobx-react-lite";


const ToDOForm=observer(()=>{

    return(
        <div className="todo__form">
            <LogoTheme />
            <TaskInput />
            <TaskItem />
            <ManageTasks />
        </div>
    )
})

export default ToDOForm;