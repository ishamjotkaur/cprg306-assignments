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
        <div className="p-6 bg-blue-50 rounded-xl shadow-md border border-blue-300">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
                Meal Ideas for {ingredient || "..."}
            </h2>
            <ul className="space-y-4">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li
                            key={meal.idMeal}
                            className="flex items-center p-3 bg-blue-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-blue-200"
                        >
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-20 h-20 rounded-lg object-cover border border-blue-400"
                            />
                            <span className="ml-4 text-lg font-medium text-blue-700 hover:text-blue-500 transition-colors duration-300">
                                {meal.strMeal}
                            </span>
                        </li>
                    ))
                ) : (
                    <p className="text-blue-500 text-center">No meal ideas found.</p>
                )}
            </ul>
        </div>
    );
}
