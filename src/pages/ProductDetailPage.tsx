import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  // Add product to recently viewed when component mounts or product changes
  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product, addToRecentlyViewed]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:text-primary/80">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <div className="min-h-screen bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500">{product.brand}</span>
                <span className="text-sm text-gray-300">•</span>
                <span className="text-sm text-gray-500 capitalize">{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                {/* Stock Status */}
                <div className="flex items-center">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      product.inStock ? 'bg-green-400' : 'bg-red-400'
                    }`}
                  />
                  <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Quantity Selector */}
                {product.inStock && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
