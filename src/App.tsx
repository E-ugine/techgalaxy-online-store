import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <RecentlyViewedProvider>
            <Router>
              <div className="min-h-screen bg-background text-foreground">
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                  </Routes>
                </main>
                <Footer />
                <Toaster />
              </div>
            </Router>
          </RecentlyViewedProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
