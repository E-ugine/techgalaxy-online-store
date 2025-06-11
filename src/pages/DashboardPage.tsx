
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Package, ShoppingBag, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();

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
