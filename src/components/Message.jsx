export default function Message(){
    function handleClick(){
        console.log("Button Clicked")
        alert("NEW BUTTON CLICKED")
    }
    return(
        <div>
        <h1> NEW MESSAGE </h1>
        <button onClick = {handleClick}> CLICK ME </button>
        </div>
    )
}