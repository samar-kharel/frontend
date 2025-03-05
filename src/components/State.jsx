import {useState} from "react"; 
export default function State(){
    const [counter, setCounter] = useState(0)
    const [increaseBy, setIncreaseBy] = useState(1);


return(
    <div>
        <h1> STATE </h1>
        <h2>{counter} {increaseBy}</h2>
        
        <button onClick= {()=>setCounter(counter+increaseBy)}>INCREASE</button>
        <button onClick= {()=>setCounter(counter-increaseBy)}>DECREASE</button>

        <button onClick= {()=>setIncreaseBy(increaseBy+1)}>INCREASE INCREMENT</button>
        <button onClick= {()=>setIncreaseBy(increaseBy-1)}>DECREASE INCREMENT</button>
    </div>
)

}