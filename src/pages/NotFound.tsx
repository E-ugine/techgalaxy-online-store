
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-muted/50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          
          <div className="text-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-900 mb-3">Need help?</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Check our <Link to="/products" className="text-primary hover:underline">product catalog</Link></p>
            <p>• Visit our <Link to="/about" className="text-primary hover:underline">help center</Link></p>
            <p>• Contact our support team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
