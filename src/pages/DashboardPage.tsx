
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, ShoppingBag, Settings, Heart, MapPin, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const DashboardPage = () => {
  const { user } = useAuth();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);

  // Dummy wishlist data
  const wishlistItems = products.slice(2, 5);
  
  // Dummy address data
  const addresses = [
    {
      id: 1,
      type: 'Home',
      name: 'John Doe',
      street: '123 Tech Street',
      city: 'Innovation City',
      state: 'IC',
      zip: '12345',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      name: 'John Doe',
      street: '456 Business Ave',
      city: 'Corporate Town',
      state: 'CT',
      zip: '67890',
      isDefault: false
    }
  ];

  const dashboardItems = [
    {
      title: 'Profile',
      description: 'Manage your personal information',
      icon: User,
      link: '/profile',
      color: 'bg-blue-500'
    },
    {
      title: 'Order History',
      description: 'View your past orders',
      icon: Package,
      link: '/orders',
      color: 'bg-green-500'
    },
    {
      title: 'Shopping Cart',
      description: 'Review items in your cart',
      icon: ShoppingBag,
      link: '/cart',
      color: 'bg-purple-500'
    },
    {
      title: 'Account Settings',
      description: 'Update your preferences',
      icon: Settings,
      link: '/profile',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Manage your account and track your orders from your dashboard.
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-sm text-green-600 mt-1">Account Active</p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
              >
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            );
          })}
        </div>

        {/* Wishlist Section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-semibold text-gray-900">My Wishlist</h2>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                {wishlistItems.length} items
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard product={product} />
                  <button className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors">
                    <Heart className="w-4 h-4 fill-current" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Address Book Section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-500" />
                <h2 className="text-xl font-semibold text-gray-900">Address Book</h2>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Add Address
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map((address) => (
                <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{address.type}</h3>
                      {address.isDefault && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Default
                        </span>
                      )}
                    </div>
                    <button className="text-primary hover:text-primary/80 text-sm">
                      Edit
                    </button>
                  </div>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p className="font-medium text-gray-900">{address.name}</p>
                    <p>{address.street}</p>
                    <p>{address.city}, {address.state} {address.zip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <Bell className="w-6 h-6 text-yellow-500" />
              <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive order updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                <p className="text-sm text-gray-600">Receive shipping updates via SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={smsNotifications}
                  onChange={(e) => setSmsNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Marketing Emails</h3>
                <p className="text-sm text-gray-600">Receive promotional offers and deals</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingEmails}
                  onChange={(e) => setMarketingEmails(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-gray-600">Total Orders</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">$1,247</div>
            <div className="text-gray-600">Total Spent</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-2">3</div>
            <div className="text-gray-600">Items in Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
