import React from 'react';
import { Star, Clock, IndianRupee } from 'lucide-react';
import type { Restaurant } from '../types';
import { MenuItem } from './MenuItem';

interface Props {
  restaurant: Restaurant;
  onAddToCart: (restaurantId: string, menuItem: MenuItem, quantity: number, instructions: string) => void;
}

export const RestaurantDetail: React.FC<Props> = ({ restaurant, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg mb-2">{restaurant.cuisine.join(', ')}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1">{restaurant.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5" />
              <span className="ml-1">{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <IndianRupee className="h-5 w-5" />
              <span className="ml-1">{restaurant.priceForTwo} for two</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <div className="space-y-4">
          {restaurant.menu.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCart={(item, quantity, instructions) =>
                onAddToCart(restaurant.id, item, quantity, instructions)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};