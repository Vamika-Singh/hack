import React from 'react';
import { Search, MapPin, User, ShoppingBag } from 'lucide-react';

interface Props {
  onSignInClick: () => void;
  onCartClick: () => void;
}

export const Navbar: React.FC<Props> = ({ onSignInClick, onCartClick }) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-500">Tomato</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for restaurants, cuisine or a dish"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onSignInClick}
              className="flex items-center space-x-1 hover:text-red-500"
            >
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
            <button
              onClick={onCartClick}
              className="flex items-center space-x-1 hover:text-red-500"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};