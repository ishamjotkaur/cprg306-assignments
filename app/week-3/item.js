export default function Item({name, quantity, category}) {
    return(
        <li className="p-3 rounded-md">
            <strong>{name} </strong><br/>
             Quantity: {quantity} <br/>
             Category: {category} <br/>
        </li>

    );
}