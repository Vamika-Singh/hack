import React from 'react';
import { Pizza, Coffee, Sandwich, IceCream, Beef, Salad } from 'lucide-react';

const categories = [
  { name: 'Pizza', icon: Pizza },
  { name: 'Beverages', icon: Coffee },
  { name: 'Snacks', icon: Sandwich },
  { name: 'Desserts', icon: IceCream },
  { name: 'Meat', icon: Beef },
  { name: 'Healthy', icon: Salad },
];

export const FoodCategories = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">What's on your mind?</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <category.icon className="h-8 w-8 mb-2 text-red-500" />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};