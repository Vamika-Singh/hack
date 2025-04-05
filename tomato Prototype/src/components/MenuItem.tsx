import React, { useState } from 'react';
import type { MenuItem as MenuItemType } from '../types';
import { Plus } from 'lucide-react';

interface Props {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType, quantity: number, instructions: string) => void;
}

export const MenuItem: React.FC<Props> = ({ item, onAddToCart }) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');

  const handleAddToCart = () => {
    onAddToCart(item, quantity, instructions);
    setIsCustomizing(false);
    setQuantity(1);
    setInstructions('');
  };

  return (
    <div className="border rounded-lg p-4 flex">
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">
              {item.name}
              {item.bestSeller && (
                <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                  Bestseller
                </span>
              )}
            </h3>
            <p className="text-gray-600">₹{item.price}</p>
          </div>
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
        
        {!isCustomizing ? (
          <button
            onClick={() => setIsCustomizing(true)}
            className="mt-4 flex items-center space-x-2 text-red-500 hover:text-red-600"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        ) : (
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Instructions
              </label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Any specific preferences?"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                rows={2}
              />
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setIsCustomizing(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};