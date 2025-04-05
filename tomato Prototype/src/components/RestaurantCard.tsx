import React from 'react';
import { Star } from 'lucide-react';
import type { Restaurant } from '../types';

interface Props {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {restaurant.featured && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-2 py-1 rounded-full text-sm">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm">{restaurant.cuisine.join(', ')}</p>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>
          <span className="text-gray-600">•</span>
          <span className="text-gray-600">{restaurant.deliveryTime}</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-600">₹{restaurant.priceForTwo} for two</span>
        </div>
      </div>
    </div>
  );
};