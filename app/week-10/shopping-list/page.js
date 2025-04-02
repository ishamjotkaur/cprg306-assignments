"use client";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { addItem, getItems } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    if (!user) return null;
    
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        const loadItems = async () => {
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
        };
        loadItems();
    }, [user.uid]);

    const handleAddItem = async (newItem) => {
        const itemId = await addItem(user.uid, newItem);
        setItems([...items, { id: itemId, ...newItem }]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName.split(",")[0].replace(/[^a-zA-Z\s]/g, "").trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="flex gap-8">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold mb-4 text-blue-400 shadow-md bg-blue-900 p-4">
                    Shopping List
                </h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
