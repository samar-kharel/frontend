import Todoitem from "./Todoitem";

export default function TodoList({todos, setTodos}) {
    const completed = todos.filter(todo => todo.isCompleted).length;
    return (
        <div>
            <ul className="todo-list">
            <p>Total: {todos.length}</p>
            <p>Completed: {completed}</p>
            <p>Not Completed: {todos.length - completed}</p>
            

            {
                todos.map((todo,index) => (
                     <Todoitem
                         key={index}
                         todo={todo}
                         todos={todos}
                         setTodos={setTodos}
                     />
                ))
            }
            </ul>
        </div>

    );
}