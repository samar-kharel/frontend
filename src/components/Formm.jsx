import { useState } from "react"
export default function Formm ({todos, setTodos}){
    const [name, setName] = useState({name:"",isCompleted: false})

    function handleSubmit(e){
        e.preventDefault();
        if (!name.name.trim()) return;
        console.log("name = ", name)
        console.log("todos = ",todos)

        setTodos([...todos, name]);
        // setName("");
        setName({
            name:"",
            isCompleted: false
        })
        console.log("todos = ",todos)
     
    }
    return(
        <div>
            <h1>TODO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={(e)=>setName({name:e.target.value, isCompleted:false})}
                type="text" 
                placeholder="ENTER THE LIST" 
                value={name.name}/>
                <button type="submit">ADD</button>
                
            </form>
        </div>
    )
}