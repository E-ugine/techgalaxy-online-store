
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Package, Truck, CheckCircle } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  total: number;
  items: number;
}

const OrdersPage = () => {
  const orders: Order[] = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 1299.99,
      items: 2
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      status: 'shipped',
      total: 849.99,
      items: 1
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-05',
      status: 'processing',
      total: 249.99,
      items: 3
    },
    {
      id: 'ORD-2024-004',
      date: '2024-01-01',
      status: 'delivered',
      total: 1999.99,
      items: 1
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="w-5 h-5 text-yellow-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order History</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
            <Link
              to="/products"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Order Date:</span> {new Date(order.date).toLocaleDateString()}
                      </div>
                      <div>
                        <span className="font-medium">Items:</span> {order.items} item{order.items !== 1 ? 's' : ''}
                      </div>
                      <div>
                        <span className="font-medium">Total:</span> ${order.total.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Link
                      to={`/order/${order.id}`}
                      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
