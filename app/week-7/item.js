export default function Item({ item }) {
    return(
        <li className="p-3 rounded-md shadow-md text-blue-400">
            <strong className="text-blue-600">{item.name} </strong><br/>
             Quantity: {item.quantity} <br/>
             Category: {item.category} <br/>
        </li>

    );
}