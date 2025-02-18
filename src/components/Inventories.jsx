export default function Inventories(){
    const stocks= [
        {
            name: "Acer Nitro 5",
            DeviceType: "Laptop",
            Price : 100000,
            Quantity: [0,5,67,99]
        },
        {
            name: "Iphone 16",
            DeviceType: "Phone",
            Price : 200000,
            Quantity: [705,50,60,70]
        },
        {
            name: "Samsung LED",
            DeviceType: "Television",
            Price : 400000,
            Quantity: [40,502,60,70]
        },
        {
            name: "Canon printer",
            DeviceType: "printer",
            Price : 25000,
            Quantity: [40,50,999,70]
        }
    ]

    return(
        <div>
            <h1> NEW INVENTORY</h1>
            {
            stocks.map(stock => {
                return(
                    <div>
                    <h2>{stock.name} </h2>
                    <li> Type: {stock.DeviceType} </li>
                    <li> Price: {stock.Price} </li>
                    <li> Quantity: {
                         stock.Quantity.reduce((a,b) => {
                            return a > b ? a : b;
                        })
                        }
                        </li>

                    </div>
                )

            }
            )}

        </div>
    )
}