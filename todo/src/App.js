import './index.css';
import './App.css';
import { observer } from 'mobx-react-lite';
import { StoreContext, useStore } from './store/StoreContect';
import ToDOTemplate from './components/templates/ToDoTemplate';



const App=observer(()=> {
  
  const {toDoStore}=useStore();
  
  return (
  
    <div className="App" data-theme={toDoStore.theme}>
      <div className="todo__wrapper">
        <StoreContext.Provider value={{toDoStore}}>
          <ToDOTemplate />
        </StoreContext.Provider>
      </div>
      <div className="rest"></div>
    </div>
  );
})

export default App;
