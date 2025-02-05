export default function Item({name, quantity, category}) {
    return(
        <li className="p-3 rounded-md shadow-md text-blue-400">
            <strong className="text-blue-600">{name} </strong><br/>
             Quantity: {quantity} <br/>
             Category: {category} <br/>
        </li>

    );
}