"use client";
import {useState} from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import ItemList from "./item-list";
export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
        };
    return (
        <main>
            <h1 className="text-3xl font-bold mb-4 text-blue-400 shadow-md bg-blue-900 p-4"> Shopping List </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
      
        </main>
    );
}