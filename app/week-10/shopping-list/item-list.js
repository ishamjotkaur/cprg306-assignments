"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items = [], onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = () => {
        return [...items].sort((a, b) =>
            (a[sortBy] || "").localeCompare(b[sortBy] || "")
        );
    };

    return (
        <div className="mt-6 p-4 bg-white rounded shadow">
            <h1 className="text-xl font-bold text-center text-gray-700 mb-4">
                Items List
            </h1>

            <div className="flex justify-center space-x-3 mb-4">
                {["name", "category"].map((key) => (
                    <button
                        key={key}
                        className={`px-4 py-2 rounded ${
                            sortBy === key ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-600 hover:text-white"
                        }`}
                        onClick={() => setSortBy(key)}
                    >
                        Sort by {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </div>

            <ul className="space-y-3">
                {sortedItems().map((item, index) => (
                    <Item key={index} item={item} onSelect={onItemSelect} />
                ))}
            </ul>
        </div>
    );
}
