import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Eye } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import NewsletterModal from '../components/NewsletterModal';
import { products, categories } from '../data/products';
import { Badge } from '../components/ui/badge';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

const HomePage = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const { recentlyViewed } = useRecentlyViewed();
  const featuredProducts = products.slice(0, 4);
  
  // Debug log to see if recently viewed is working
  console.log('Recently viewed products:', recentlyViewed);
  
  // Newsletter modal trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show modal after scrolling down 70% of the viewport
      if (scrollPosition > windowHeight * 0.7 && !localStorage.getItem('newsletter_shown')) {
        setShowNewsletterModal(true);
        localStorage.setItem('newsletter_shown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hot deals products with special pricing
  const hotDeals = [
    {
      ...products[0], // iPhone 15 Pro Max
      price: 999,
      originalPrice: 1199,
      dealBadge: "Deal of the Day",
      timeLeft: "23:45:30"
    },
    {
      ...products[4], // Sony WH-1000XM5
      price: 299,
      originalPrice: 399,
      dealBadge: "Limited Time",
      timeLeft: "12:30:15"
    },
    {
      ...products[6], // Samsung TV
      price: 1499,
      originalPrice: 1799,
      dealBadge: "Flash Sale",
      timeLeft: "06:15:45"
    }
  ];

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

      {/* Hot Deals Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Hot Deals</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Limited time offers you don't want to miss!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotDeals.map((deal, index) => (
              <div key={`deal-${index}`} className="relative">
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-red-500 text-white px-3 py-1 text-sm font-bold">
                    {deal.dealBadge}
                  </Badge>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-red-200 hover:border-red-300 transition-colors">
                  <div className="relative">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save ${(deal.originalPrice! - deal.price).toFixed(0)}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{deal.name}</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-red-600">
                          ${deal.price.toFixed(2)}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          ${deal.originalPrice?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-red-100 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-red-800">Time left:</span>
                        <span className="text-lg font-bold text-red-600 font-mono">
                          {deal.timeLeft}
                        </span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/product/${deal.id}`}
                      className="w-full bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors inline-flex items-center justify-center font-medium"
                    >
                      Grab This Deal
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Recently Viewed Section - Always show for testing, then conditionally */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Eye className="w-6 h-6 text-gray-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
          </div>
          
          {recentlyViewed.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentlyViewed.slice(0, 4).map((product) => (
                  <div key={`recent-${product.id}`} className="relative">
                    <ProductCard product={product} />
                    <div className="absolute top-2 right-2 bg-accent text-white px-2 py-1 rounded-full text-xs">
                      Viewed
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link
                  to="/products"
                  className="text-accent hover:text-accent/80 font-medium inline-flex items-center"
                >
                  View All Products
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Eye className="w-16 h-16 mx-auto mb-4 opacity-30" />
              </div>
              <p className="text-gray-500 mb-6">
                Products you view will appear here for easy access
              </p>
              <Link
                to="/products"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                Browse Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={() => setShowNewsletterModal(false)} 
      />
    </div>
  );
};

export default HomePage;
