"use client";
import Item from "./item";
import { useState } from 'react';
import itemsFile from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');


    const sortedItems = [...itemsFile].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div className=" mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Items List</h1>
            
            <div className="flex justify-center space-x-3 mb-6">
                <button 
                    className={`px-5 py-3 font-semibold rounded-md ${sortBy === 'name' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-900 hover:text-white'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button 
                    className={`px-5 py-3 font-semibold rounded-md  ${sortBy === 'category' ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-900 hover:text-white'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>

            <ul className="space-y-4">
                {sortedItems.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}
