import Appname from "./components/appname"
import AppTodo from "./components/AppTodo"
import ToDoItem1 from "./components/Todoitem1"
import ToDoItem2 from "./components/ToDoItem2"


function App() {

  return (
    <center className="todo-container">
      <Appname></Appname>
      <AppTodo></AppTodo>

      <div className="todo-item">
        <ToDoItem1></ToDoItem1>
        <ToDoItem2></ToDoItem2>
      </div>
      

      
    </center>
  )
}

export default App
