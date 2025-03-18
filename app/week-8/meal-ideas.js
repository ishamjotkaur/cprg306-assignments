"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient);
        }
    }, [ingredient]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            const data = await response.json();
            setMeals(data.meals || []);
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
                Meal Ideas for {ingredient || "..." }
            </h2>
            <ul className="space-y-4">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center space-x-4">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-md" />
                            <span className="text-blue-600 font-semibold">{meal.strMeal}</span>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">No meal ideas found.</p>
                )}
            </ul>
        </div>
    );
}
