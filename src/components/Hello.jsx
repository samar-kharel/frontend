// import Greetings from "./Greetings"

function Hello(props) {
  const highestNumber = props.person.seatNumber.reduce((a,b) => {
     return a > b ? a : b
  }

)

  

  return (

        <div>
        <li>{props.person.name}</li>
        <li>{props.person.address}</li>
        <li>{props.person.highestNumber}</li>
         <h2> --------------------------------- </h2>
         </div>

    )
  }
  
  export default Hello