export default function Groceries({groceries}) {
    const newGroceries = ["TV","Mobile Phone", "Laptop","Washing Machine","Air Conditioner"]
    return (
        <div>
        <h1> GROCERY LIST </h1>
        <h1>{newGroceries.map(grocery => <li> <i>{grocery}</i></li>)} </h1>

         </div>
    )
}