import { useState } from "react"
import TodoList from "./Todolist"
import Formm from "./Formm"
import "./styles.css";
export default function Form(){
    const [todos, setTodos] = useState([])


    return(
        <div>
            
            <TodoList todos={todos} setTodos={setTodos}/>
            <Formm todos={todos} setTodos={setTodos}/>
        </div>
    )
}
