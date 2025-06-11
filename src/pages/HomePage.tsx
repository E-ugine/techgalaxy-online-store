
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to{' '}
                <span className="text-primary">TechGalaxy</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Discover the latest in cutting-edge technology. From smartphones to smart homes, 
                we have everything you need to stay connected and innovative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600"
                alt="Tech devices"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Top Brands</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of technology products across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our most popular and cutting-edge products
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Free Shipping</h3>
              <p className="mb-6">On all orders over $99. Fast and reliable delivery to your doorstep.</p>
              <Link
                to="/products"
                className="bg-white text-accent px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Shop Now
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-accent-yellow to-yellow-400 text-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Extended Warranty</h3>
              <p className="mb-6">Get peace of mind with our comprehensive warranty coverage on all products.</p>
              <Link
                to="/about"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
