"use client" ;
import {useState} from  'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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
        <div className='p-4 bg-blue-200 flex items-center shadow-md space-x-5 '> 
            <button onClick={increment} disabled={quantity == 20} className='px-3 py-1 bg-pink-500 test-black rounded disabled:bg-pink-300'> + </button>

            <span className='font-semibold'>{quantity}</span>
        
            <button onClick={decrement} disabled={quantity == 1} className='px-3 py-1 bg-pink-500 text-black rounded disabled:bg-pink-300'> - </button>
        </div>
    )
}  
