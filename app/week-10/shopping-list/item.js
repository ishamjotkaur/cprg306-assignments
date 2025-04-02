export default function Item({ item, onSelect }) {
    return (
        <li 
            className="p-3 rounded-md shadow-md text-blue-400 cursor-pointer hover:bg-gray-200"
            onClick={() => onSelect(item.name)}
        >
            <strong className="text-blue-600">{item.name}</strong><br />
            Quantity: {item.quantity} <br />
            Category: {item.category} <br />
        </li>
    );
}
