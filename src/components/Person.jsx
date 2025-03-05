export default function Person({name,address,age,seatNumber, display}){
    return(
        <div>
            
            {
            display ?
                (
                <div>
                    <h1> PERSON </h1>
                    <h2> Name: {name}</h2>
                    <li> Address: {address}</li>
                    <li> Age: {age} </li>
                    <li> Seat Number: {
                        seatNumber.reduce((a,b) => {
                        return a > b ? a : b;
                        })
                        }
                        </li>
                </div>
                )
            : null
            }              
        </div>
    )

}