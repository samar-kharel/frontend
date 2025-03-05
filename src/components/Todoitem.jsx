// import "./styles/style.css"

export default function Todoitem({index,todo,todos,setTodos}){
    function handleDelete(todo){
        const newTodos = todos.filter((t) => t !== todo)
        setTodos(newTodos)
    }

    function markAsDone(item){
        console.log("todo = ",item)
        const newTodos = todos.map((todo)=> {
            if(todo.name === item){
                return{...todo,isCompleted: !todo.isCompleted}
            }
            return todo
        }
        )
        setTodos(newTodos)
        console.log(todos)
    }
    return(
        <li className="todo-item">
            <span onClick={()=> markAsDone(todo.name)}>{todo.name}</span>
            
            <button className="delete-button" onClick={() =>
            handleDelete(todo)}>DELETE</button>
            {todo.isCompleted && <span> Completed</span>}
        </li>
    )
}