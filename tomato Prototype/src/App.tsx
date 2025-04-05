import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FoodCategories } from './components/FoodCategories';
import { RestaurantCard } from './components/RestaurantCard';
import { RestaurantDetail } from './components/RestaurantDetail';
import { AuthModal } from './components/AuthModal';
import { Cart } from './components/Cart';
import { restaurants } from './data/restaurants';
import type { CartItem, MenuItem } from './types';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (
    restaurantId: string,
    menuItem: MenuItem,
    quantity: number,
    instructions: string
  ) => {
    setCartItems((prev) => [
      ...prev,
      { menuItem, quantity, restaurantId, specialInstructions: instructions }
    ]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.menuItem.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.menuItem.id !== itemId)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSignInClick={() => setIsAuthModalOpen(true)} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white ml-12">
              <h1 className="text-5xl font-bold mb-4">Hungry?</h1>
              <p className="text-2xl mb-8">Order food from your favorite restaurants</p>
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>

        <FoodCategories />

        {/* Restaurant Detail or List */}
        {selectedRestaurant ? (
          <div className="mt-8">
            <button
              onClick={() => setSelectedRestaurant(null)}
              className="mb-4 text-red-500 hover:text-red-600"
            >
              ← Back to restaurants
            </button>
            <RestaurantDetail
              restaurant={selectedRestaurant}
              onAddToCart={handleAddToCart}
            />
          </div>
        ) : (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Featured Restaurants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  onClick={() => setSelectedRestaurant(restaurant)}
                  className="cursor-pointer"
                >
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Tomato</h3>
              <p className="text-gray-400">
                Order food online from your favorite restaurants.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Partner With Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Tomato. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default App;