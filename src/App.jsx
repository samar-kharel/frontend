import Hello from "./components/Hello"
import Greetings from "./components/Greetings"
import Groceries from "./components/Groceries"
import Persons from "./components/Persons"
import Inventories from "./components/Inventories"

function App() {
  const groceries = ["Apple","Banana","Mangoes"]

  // const person = {
  //   name:"Samar",
  //   address:"Baneshwor",
  //   seatNumber:[23,34,54,665,6]
    
  
  // }

  return (
      <div>
        <h1> React App</h1>
        <h2> --------------------------------- </h2>
        {/* <Hello name="Samar" address="Kathmandu"/>
        <Hello name="John" address="Pokhara" />
        <Greetings name="morning"/> */}
        {/* <Greetings name="afternoon"/>s
        <Greetings name="evening"/>
        <Greetings name="night"/> */}
        {/* <Groceries item="Milkshake" item1= "Tomatoes"/> */}
        {/* <Groceries groceries={groceries}/>
        <Hello person={person}/> */}
        <Persons/>
        <Inventories/>
      </div>
  )
}

export default App
