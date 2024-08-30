import axios from 'axios';
import {makeAutoObservable, runInAction} from 'mobx';

const ToDoStore=()=>{
    return makeAutoObservable({
            todos:[],
            error:false,
            filteredTodos:[],
            activeCount:0,
            theme:"light",

            //To toggle theme
            setTheme(){
                this.theme=this.theme==="light"?"dark":"light";
            },

            //action to add task 
            async addTodo(taskDetail){
                const len=this.todos.length;
                const task={
                    id:len>0?1+this.todos[this.todos.length-1].id:"1",
                    title:taskDetail,
                    status:"active"
                }

                this.error=false;

                await axios.post("http://localhost:3000/tasks", task).then(
                        response=>{
                            this.fetchTodos();
                        }
                    ).catch(error=>
                    this.error=true
                )
            },

            //action to fetch add tasks
            async fetchTodos(){
                this.error=false;
                await axios.get("http://localhost:3000/tasks").then(
                        response=>{
                            runInAction(()=>{
                                this.todos=response.data;
                                this.filteredTodos=response.data;    
                                this.findActiveCount();
                            })  
                        }
                    ).catch(error=>
                    this.error=true
                )
            },

            //action to mark task as completed
            async markComplete(taskId){
                
                const task=this.todos.find((item, index)=>(
                    item.id===taskId     
                ))
                
                task.status="completed";
                this.error=false;

                await axios.put(`http://localhost:3000/tasks/${taskId}`,task).then(
                        response=>{       
                            this.fetchTodos();   
                        }
                    ).catch(error=>
                    this.error=true
                )
            },

            //action to mark task as active
            async unMark(taskId){
                
                const task=this.todos.find((item, index)=>(
                    item.id===taskId     
                ))
                
                task.status="active";
                this.error=false;

                await axios.put(`http://localhost:3000/tasks/${taskId}`,task).then(
                        response=>{       
                            this.fetchTodos();   
                        }
                    ).catch(error=>
                    this.error=true
                )
            },

            //action to delete all completed
            deleteCompleted(){

                this.error=false;
                
                this.todos.forEach((item)=>{
                    if(item.status==='completed'){
                         axios.delete(`http://localhost:3000/tasks/${item.id}`).then(
                            response=>{
                            this.fetchTodos();
                        }).catch(error=>{
                                this.error=true;
                        }) 
                    }
                })   
            },

            //action to delete the single task
            async deleteTask(taskId){   
                await  axios.delete(`http://localhost:3000/tasks/${taskId}`).then(
                    response=>{
                        this.fetchTodos();
                }).catch(error=>{
                        this.error=true;
                }) 
            },
                
            //action to find the active tasks count
            findActiveCount(){
                const activeTasks=this.todos.filter((item,index)=>{
                    return item.status==="active";
                })
                this.activeCount=activeTasks.length;
            },

            //action to filter the active tasks from all tasks
            filterActives(){
                const activeTasks=this.todos.filter((item,index)=>{
                    return item.status==="active";
                })

                this.filteredTodos=activeTasks;
            },

            //action to filter the completed tasks from all tasks
            filterCompleted(){
                const completedTasks=this.todos.filter((item,index)=>{
                    return item.status==="completed";
                })

                this.filteredTodos=completedTasks;
            }

        }
    )
}

//function to fetch the tasks from server
function createToDoStore(){
    const store=ToDoStore();
    store.fetchTodos();
    return store;
}


export default createToDoStore;