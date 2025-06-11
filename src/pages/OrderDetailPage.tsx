
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle } from 'lucide-react';

const OrderDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock order data
  const order = {
    id: id || 'ORD-2024-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 1299.99,
    subtotal: 1199.99,
    shipping: 0,
    tax: 100.00,
    items: [
      {
        id: '1',
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        price: 1199.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Tech Street',
      city: 'Innovation City',
      state: 'IC',
      zip: '12345'
    },
    trackingNumber: 'TG1234567890'
  };

  const statusSteps = [
    { name: 'Order Placed', icon: Package, completed: true },
    { name: 'Processing', icon: Package, completed: true },
    { name: 'Shipped', icon: Truck, completed: true },
    { name: 'Delivered', icon: CheckCircle, completed: order.status === 'delivered' }
  ];

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/orders"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Orders
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order {order.id}</h1>
          <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Status</h2>
          <div className="flex items-center justify-between">
            {statusSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.name} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      step.completed
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      step.completed ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {step.name}
                  </span>
                  {index < statusSteps.length - 1 && (
                    <div
                      className={`absolute h-0.5 w-full top-6 left-1/2 ${
                        step.completed ? 'bg-primary' : 'bg-gray-200'
                      }`}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          {order.trackingNumber && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Tracking Number:</span> {order.trackingNumber}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
            <div className="text-gray-600">
              <p className="font-medium text-gray-900">{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.address}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-green-600">
                {order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">${order.tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
