"use client" ;
import {useState} from  'react';

export default function NewItem({onAddItem}) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newItem = { name, quantity, category};
        console.log(newItem);  
        onAddItem (newItem);
        setName ('');
        setQuantity (1);
        setCategory ("produce");
    };

    const increment = () => {
        if (quantity < 20 ){
            setQuantity(preQuantity => preQuantity+1);
        }
    }
    const decrement = () => {
        if (quantity > 1 ){
            setQuantity(preQuantity => preQuantity-1);
        }
    }
    return (
        <div className='p-4 bg-blue-200 items-center space-x-5 '> 
        <form onSubmit={handleFormSubmit}className="p-6 bg-white  text-black rounded-lg space-y-3">
            <label className='block'>
        <span className="text-gray-700 font-semibold">Name: </span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value )} placeholder= " Add Item Name"/>
            </label>
            <label className='block'>
            <span className="text-gray-700 font-semibold">Quantity: </span>
            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target)} placeholder="Quantity"/>
            <button  type='button' onClick={increment} disabled={quantity == 20} className='px-4 py-2 bg-pink-500 test-black rounded disabled:bg-pink-300 mr-3'> + </button>
            <button type='button' onClick={decrement} disabled={quantity == 1} className='px-4 py-2 bg-pink-500 text-black rounded disabled:bg-pink-300 mr-3'> - </button>
            </label>
            <label className='block'>
            <span className="text-gray-700 font-semibold">Category: </span>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>\
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
            </label>
            <button type="submit" className="bg-pink-500 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded">Add Item</button>
            </form>
            
        </div>
    )
}  
