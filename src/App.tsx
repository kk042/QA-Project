import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SidebarFilters from './components/SidebarFilters';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import CheckoutPage from './components/CheckoutPage';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer';
import { Product, CartItem, ShippingInfo } from './types';
import { products } from './data';

export default function App() {
  
  // State Initialization with local storage capabilities
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('ab_automation_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [currentScreen, setScreen] = useState<'catalog' | 'detail' | 'checkout' | 'account'>('catalog');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('price-low-high');
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Pre-signed in model credentials for natural industrial experience
  const [userEmail, setUserEmail] = useState<string | null>('engineering@abautomation.com');

  // Order Success Modal Staging states
  const [activeOrderConfirmation, setActiveOrderConfirmation] = useState<{
    orderId: string;
    shipping: ShippingInfo;
  } | null>(null);

  // Sync cart state into dynamic storage
  useEffect(() => {
    localStorage.setItem('ab_automation_cart', JSON.stringify(cart));
  }, [cart]);

  // Handle adding product to shopping cart
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prevCart, { product, quantity }];
    });
    
    // Auto toggle drawer to represent clean immediate feedback
    setIsCartOpen(true);
  };

  // Adjust product quantity
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove individual product item
  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleNavigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setScreen('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Authentic Order dispatch complete mock simulator
  const handlePlaceOrder = (shippingInfo: ShippingInfo) => {
    const generatedId = `AB-${Math.floor(100000 + Math.random() * 900000)}`;
    setActiveOrderConfirmation({
      orderId: generatedId,
      shipping: shippingInfo
    });
    // Wipe current cart structure
    setCart([]);
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setScreen('catalog');
  };

  const handleLogout = () => {
    setUserEmail(null);
    setScreen('account');
  };

  // Processing catalog query logic
  const filteredProducts = products
    .filter((prod) => {
      const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
      const cleanSearch = searchQuery.toLowerCase();
      const matchesSearch = 
        prod.title.toLowerCase().includes(cleanSearch) ||
        prod.category.toLowerCase().includes(cleanSearch) ||
        prod.description.toLowerCase().includes(cleanSearch);
      
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low-high') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high-low') {
        return b.price - a.price;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div id="top" className="min-h-screen flex flex-col font-sans bg-surface-bg watermark-pattern relative overflow-x-hidden">
      
      {/* Universal Sticky Header Navigation */}
      <Header 
        cart={cart}
        currentScreen={currentScreen}
        setScreen={setScreen}
        openCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userEmail={userEmail}
        onLogout={handleLogout}
        onToggleMobileDrawer={() => setIsMobileDrawerOpen(!isMobileDrawerOpen)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-8 relative">
        
        {currentScreen === 'catalog' && (
          <div className="space-y-10">
            
            {/* Interactive Hero Staging Banner */}
            <div className="bg-gradient-to-tr from-[#020F12] to-[#042830] text-white p-8 md:p-14 rounded-[32px] shadow-xl text-left relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 border border-white/5">
              <div className="absolute -left-20 -bottom-20 opacity-5 pointer-events-none transform -rotate-12">
                <span className="material-symbols-outlined text-[300px]">
                  precision_manufacturing
                </span>
              </div>
              
              <div className="space-y-4 max-w-2xl relative z-10 select-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                  <span className="material-symbols-outlined text-[14px] text-accent-teal">verified</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Calibration Toolkit Certified Hub</span>
                </div>
                
                <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  High-Precision Industrial Automation Toolkit
                </h1>
                
                <p className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Deploy real-time active sensory arrays, advanced digital encoders, and dual-laser quality control scanning devices. Every module is factory calibrated is traceable under global ISO quality audits.
                </p>
              </div>

              {/* Decorative side badge */}
              <div 
                onClick={() => {
                  const item = products.find(p => p.id === 'prod-qa-scanner');
                  if (item) {
                     handleNavigateToProduct(item);
                  }
                }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 relative z-10 w-full md:w-auto text-left cursor-pointer group hover:bg-white/15 transition-all select-none"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[10px] text-accent-teal uppercase font-bold">Featured solution</span>
                  <span className="material-symbols-outlined text-white text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-1">
                  QA Pro-Scanner X1 Array
                </h3>
                <p className="font-sans text-[11px] text-slate-300">
                  Advanced dual-laser scanning assembly
                </p>
                <span className="font-mono text-xs font-bold text-accent-teal block mt-2">
                  $2,499.00 <span className="text-[9px] text-slate-400 line-through font-normal">$3,100.00</span>
                </span>
              </div>
            </div>

            {/* Catalog Staging Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Sidebar Filters - Desktop mode */}
              <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28">
                <SidebarFilters 
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
              </aside>

              {/* Right Column: Interactive Grid Area */}
              <section className="lg:col-span-9 space-y-6">
                
                {/* Catalog feedback list bar */}
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4 select-none">
                  <div className="text-left">
                    <p className="font-display text-xl font-bold text-primary-dark">
                      Available Components
                    </p>
                    <p className="font-sans text-xs text-on-surface-variant">
                      Showing {filteredProducts.length} high-precision units matching selected filters
                    </p>
                  </div>
                  
                  {/* Interactive reset triggers if active filters */}
                  {(selectedCategory !== 'All' || searchQuery) && (
                    <button 
                      onClick={() => {
                        setSelectedCategory('All');
                        setSearchQuery('');
                      }}
                      className="font-mono text-xs text-primary-teal font-semibold hover:underline outline-none"
                    >
                      Reset Active Filters
                    </button>
                  )}
                </div>

                {/* Grid container */}
                {filteredProducts.length === 0 ? (
                  <div className="py-20 text-center select-none bg-white rounded-3xl border border-outline-variant/10 p-8 shadow-sm">
                    <span className="material-symbols-outlined text-5xl text-outline/40 mb-3 block">
                      inventory_2
                    </span>
                    <p className="font-display text-lg font-bold text-primary-dark opacity-80">
                      No matching devices discovered
                    </p>
                    <p className="font-sans text-xs text-on-surface-variant max-w-md mx-auto mt-1">
                      Refine your key-phrases or switch your targeted category tab to trace down appropriate industrial gears.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((prod) => (
                      <ProductCard 
                        key={prod.id}
                        product={prod}
                        onAddToCart={() => handleAddToCart(prod, 1)}
                        onClick={() => handleNavigateToProduct(prod)}
                      />
                    ))}
                  </div>
                )}

              </section>

            </div>

          </div>
        )}

        {currentScreen === 'detail' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBackToCatalog={() => setScreen('catalog')}
            onNavigateToProduct={handleNavigateToProduct}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutPage 
            cart={cart}
            onPlaceOrder={handlePlaceOrder}
            onBackToCatalog={() => setScreen('catalog')}
          />
        )}

        {currentScreen === 'account' && (
          <AuthPage 
            userEmail={userEmail}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
        )}

      </main>

      {/* Universal Footer Component */}
      <Footer setScreen={setScreen} />

      {/* Dynamic Slide-in Shopping Cart panel Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onStartCheckout={() => setScreen('checkout')}
      />

      {/* Mobile drawer trigger sidebar overlay */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop dimming */}
          <div 
            onClick={() => setIsMobileDrawerOpen(false)}
            className="absolute inset-0 bg-[#020F12]/30 backdrop-blur-sm pointer-events-auto"
          />
          {/* Slide container */}
          <div className="relative w-80 max-w-xs bg-white h-full p-6 flex flex-col space-y-6 shadow-2xl overflow-y-auto animate-slide-in">
            <div className="flex justify-between items-center">
              <span className="font-display font-bold text-lg text-primary-teal">Filters &amp; Sort</span>
              <button onClick={() => setIsMobileDrawerOpen(false)} className="p-1">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <SidebarFilters 
              selectedCategory={selectedCategory}
              setSelectedCategory={(cat) => {
                setSelectedCategory(cat);
                setIsMobileDrawerOpen(false);
              }}
              sortBy={sortBy}
              setSortBy={(sort) => {
                setSortBy(sort);
                setIsMobileDrawerOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* GLORIOUS SUCCESS ORDER CONFIRMATION MODAL */}
      {activeOrderConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setActiveOrderConfirmation(null)}
            className="absolute inset-0 bg-[#020F12]/55 backdrop-blur-sm pointer-events-auto"
          />
          
          <div className="bg-white p-8 rounded-[32px] shadow-2xl relative max-w-md w-full text-center border border-slate-100 z-10 select-none animate-scale-up">
            
            {/* Visual Success emblem icon */}
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5 border border-green-100">
              <span className="material-symbols-outlined text-4xl font-extrabold animate-pulse">
                check_circle
              </span>
            </div>

            <h2 className="font-display text-2xl font-bold text-primary-dark">
              Transferred to Logistics
            </h2>
            <p className="font-sans text-xs text-on-surface-variant/80 max-w-sm mx-auto mt-2.5 leading-relaxed">
              Your transaction is verified under secure handshake. The logistics coordinators have commenced preparing the calibrated assemblies.
            </p>

            <div className="my-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5 text-left font-mono text-xs">
              <div className="flex justify-between text-[11px]">
                <span className="opacity-70">Order Registry Identifier:</span>
                <strong className="text-primary-dark">{activeOrderConfirmation.orderId}</strong>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="opacity-70">Logistics Coordinator:</span>
                <span className="text-primary-teal font-extrabold uppercase">DHL Priority Freight</span>
              </div>
              <div className="flex justify-between text-[11px] items-start">
                <span className="opacity-70">Target Terminal:</span>
                <span className="text-primary-dark text-right max-w-[180px] break-words font-semibold font-sans">
                  {activeOrderConfirmation.shipping.firstName} {activeOrderConfirmation.shipping.lastName}, {activeOrderConfirmation.shipping.streetAddress}, {activeOrderConfirmation.shipping.city}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveOrderConfirmation(null);
                setScreen('catalog');
              }}
              className="w-full bg-[#020F12] hover:bg-primary-teal text-white py-3 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all"
            >
              Conclude Secure Session
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
