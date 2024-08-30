import  { createContext, useContext } from "react";
import createToDoStore from "./ToDoStore";

//create context and pass the store to context
export const StoreContext=createContext({
    toDoStore:createToDoStore(), 
})


export const useStore=()=>useContext(StoreContext);