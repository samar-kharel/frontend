import Person from "./Person"
export default function Persons() {
    const persons= [
        {
            name: "Samar",
            address: "Kathmandu",
            age : 19,
            seatNumber: [40,50,60,70],
            display: true
        },
        {
            name: "Ram",
            address: "Bhaktapur",
            age : 40,
            seatNumber: [400,50,60,70],
            display: false
        },
        {
            name: "Hari",
            address: "Lumbini",
            age : 40,
            seatNumber: [40,500,60,70],
            display: true
        },
        {
            name: "Shyam",
            address: "Kathmandu",
            age : 40,
            seatNumber: [40,50,600,70],
            display: true
        }
    ]


    return(
        <div>
            <h1> persons </h1>
            {
                persons.map(person => <Person name={person.name} 
                    address={person.address}
                    age= {person.age}
                    seatNumber= {person.seatNumber}
                    display= {person.display}
                />)
                // persons.map(person => {
                //     return(
                //         <div>
                //             <h2> {person.name} </h2>
                //             <li> Address: {person.address}</li>
                //             <li> Age: {person.age} </li>
                //             <li> Seat Number: {
                //                 person.seatNumber.reduce((a,b) => {
                //                     return a > b ? a : b;
                //                  })
                //                  }
                //                  </li>
                //         </div>
                //     )
                 }

        </div>
    )
}