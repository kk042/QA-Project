import React, { useState } from 'react';
import { Product } from '../types';
import { products } from '../data';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onBackToCatalog: () => void;
  onNavigateToProduct: (prod: Product) => void;
}

export default function ProductDetail({
  product,
  onAddToCart,
  onBackToCatalog,
  onNavigateToProduct
}: ProductDetailProps) {
  
  // Set initial selected image to the product's primary cover image
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [specsOpen, setSpecsOpen] = useState(true);
  const [shippingOpen, setShippingOpen] = useState(false);

  // If the product doesn't have custom detail carousel thumbnails, fallback to its main image
  const carouselImages = product.detailImages && product.detailImages.length > 0 
    ? product.detailImages 
    : [product.image];

  // Pick up some related products from similar categories (excluding the current one)
  const relatedProducts = products
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const calculatedSubtotal = quantity * product.price;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const currentImage = carouselImages[activeImageIndex] || product.image;

  return (
    <div className="space-y-12">
      
      {/* Breadcrumbs Navigation Row */}
      <nav className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-on-surface-variant/70">
        <button 
          onClick={onBackToCatalog}
          className="hover:text-primary-teal transition-colors outline-none"
        >
          Home
        </button>
        <span className="material-symbols-outlined text-[12px] text-outline">
          chevron_right
        </span>
        <span className="text-on-surface-variant/80">
          {product.category} Tools
        </span>
        <span className="material-symbols-outlined text-[12px] text-outline">
          chevron_right
        </span>
        <span className="text-primary-teal font-extrabold truncate">
          {product.title}
        </span>
      </nav>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Image Carousel / Active Stage */}
        <div className="md:col-span-7 space-y-4">
          <div className="aspect-square bg-white rounded-[24px] overflow-hidden border border-outline-variant/10 shadow-sm relative group">
            <img 
              src={currentImage} 
              alt={`${product.title} detailed stage`}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="bg-primary-teal text-white font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                Premium Edition
              </span>
            </div>
            
            {/* Ambient rating display */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-md">
              <span className="material-symbols-outlined text-amber-500 text-[16px] font-bold">star</span>
              <span className="font-mono text-xs font-bold text-primary-dark">{product.rating} / 5.0</span>
            </div>
          </div>

          {/* Carousel thumbnails slider */}
          {carouselImages.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {carouselImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-square rounded-2xl bg-white overflow-hidden border-2 transition-all duration-200 outline-none ${
                    activeImageIndex === idx 
                      ? 'border-primary-teal shadow-md shadow-primary-teal/5 scale-95' 
                      : 'border-transparent hover:border-outline-variant/60'
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`Thumbnail view ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
              
              {/* Decorative extra tile */}
              <div className="aspect-square rounded-2xl bg-slate-50 border border-dashed border-outline-variant/40 flex flex-col items-center justify-center p-3 text-center text-outline select-none hover:border-primary-teal hover:text-primary-teal transition-all">
                <span className="material-symbols-outlined text-xl mb-1">videocam</span>
                <span className="font-sans text-[9px] font-semibold uppercase tracking-wider">Specs Video</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Information & Interactive Selection */}
        <div className="md:col-span-5 space-y-6">
          
          <div>
            <span className="font-mono text-[10px] text-primary-teal uppercase tracking-widest block mb-2 font-bold select-none">
              {product.category} Tools / Advanced Systems
            </span>
            <h1 className="font-display text-3xl font-bold text-primary-dark leading-tight tracking-tight">
              {product.title}
            </h1>
            
            {/* Price Tags */}
            <div className="flex items-center gap-4 mt-4 select-none">
              <span className="font-mono text-2xl font-bold text-primary-dark">
                ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              {product.originalPrice && (
                <span className="text-on-surface-variant/70 font-mono text-sm line-through">
                  ${product.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              )}
              {product.savePercentage && (
                <span className="bg-red-50 text-red-600 font-mono text-[10px] font-extrabold px-2.5 py-1 rounded-md border border-red-100 uppercase tracking-wider">
                  SAVE {product.savePercentage}%
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary-teal select-none bg-slate-50 border border-primary-teal/10 px-3 py-2 rounded-xl">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              <span className="font-sans text-xs font-bold leading-none">
                In Stock &amp; Configured — Ready for Next-Day Dispatch
              </span>
            </div>
            
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {product.longDescription || product.description}
            </p>
          </div>

          {/* Stepper Selection Panel */}
          <div className="p-6 bg-[#f0f4f8] rounded-3xl border border-outline-variant/10 space-y-6">
            <div className="flex items-center justify-between">
              
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-2">
                  Select Quantity
                </span>
                <div className="flex items-center border border-outline-variant/40 rounded-xl bg-white overflow-hidden shadow-sm">
                  <button 
                    onClick={handleDecrease}
                    className="px-3 py-2 hover:bg-slate-50 text-primary-dark transition-colors font-bold outline-none"
                    aria-label="Decrease quantity"
                  >
                    <span className="material-symbols-outlined text-sm font-extrabold">remove</span>
                  </button>
                  <input 
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setQuantity(val < 1 ? 1 : val);
                    }}
                    className="w-12 text-center border-none focus:ring-0 font-mono text-xs font-bold bg-transparent text-primary-dark"
                  />
                  <button 
                    onClick={handleIncrease}
                    className="px-3 py-2 hover:bg-slate-50 text-primary-dark transition-colors font-bold outline-none"
                    aria-label="Increase quantity"
                  >
                    <span className="material-symbols-outlined text-sm font-extrabold">add</span>
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono text-[10px] text-on-surface-variant block uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-mono text-xl font-bold text-primary-dark">
                  ${calculatedSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>

            </div>

            {/* Practical Checkout Actions */}
            <div className="grid grid-cols-1 gap-3">
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product, quantity);
                  setQuantity(1); // resettable
                }}
                className="w-full bg-primary-teal hover:bg-[#020F12] text-white py-3.5 rounded-2xl font-sans text-sm font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-md shadow-primary-teal/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                Add to Cart
              </button>
              
              <button
                type="button"
                onClick={() => alert(`Automation Demo Request Logged. A systems design expert will guide you through matching this ${product.title} to your PLC terminals!`)}
                className="w-full border border-primary-teal text-primary-teal bg-white/70 hover:bg-primary-teal/5 py-3.5 rounded-2xl font-sans text-sm font-bold transition-all outline-none"
              >
                Request Systems Demo
              </button>
            </div>
          </div>

          {/* Accordion Block For Tech Specs */}
          <div className="border-t border-outline-variant/30 divide-y divide-outline-variant/20">
            
            {/* Tech Specifications Collapse Section */}
            <div className="py-4">
              <button 
                type="button"
                onClick={() => setSpecsOpen(!specsOpen)}
                className="w-full flex justify-between items-center font-mono text-xs font-bold uppercase tracking-widest text-primary-dark"
              >
                <span>Technical Specifications</span>
                <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${specsOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {specsOpen && (
                <div className="mt-4 space-y-2.5 text-xs text-on-surface-variant font-mono bg-white p-4 rounded-xl border border-slate-100">
                  {Object.entries(product.specifications || {
                    'System Power': '24V Coordinated standard',
                    'Integrity rating': 'IP65 Class protection',
                    'Warranty scope': '3-Year Enterprise Care program'
                  }).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-dashed border-slate-100 pb-1.5 last:border-0 last:pb-0">
                      <span className="opacity-70">{key}</span>
                      <span className="font-bold text-primary-dark">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Shipping & Support Accordion details */}
            <div className="py-4">
              <button 
                type="button"
                onClick={() => setShippingOpen(!shippingOpen)}
                className="w-full flex justify-between items-center font-mono text-xs font-bold uppercase tracking-widest text-primary-dark"
              >
                <span>Shipping &amp; Warranty</span>
                <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${shippingOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {shippingOpen && (
                <div className="mt-3 text-xs text-on-surface-variant leading-relaxed">
                  Free dynamic worldwide dispatching for industrial enterprise orders. Packages are layered inside high-density anti-shock foams. Includes full 3-year warranty covering logic diagnostic chips and optical triggers, with 24/7 priority call desk assistance.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Related Industrial Products section */}
      <section className="pt-10 border-t border-outline-variant/30">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary-dark mb-1">
              Related Industrial Kits
            </h2>
            <p className="font-sans text-xs text-on-surface-variant">
              Complete your manufacturing automation pipelines with these robust components.
            </p>
          </div>
          <button 
            onClick={onBackToCatalog}
            className="flex items-center gap-1.5 text-primary-teal font-mono text-xs font-semibold hover:underline outline-none"
          >
            <span>View All</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProd) => (
            <div 
              key={relatedProd.id}
              onClick={() => {
                onNavigateToProduct(relatedProd);
                setActiveImageIndex(0); // reset image index on slide
              }}
              className="group cursor-pointer select-none"
            >
              <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-3 border border-slate-100 shadow-sm relative">
                <img 
                  src={relatedProd.image} 
                  alt={relatedProd.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(relatedProd, 1);
                  }}
                  className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-md text-primary-teal opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-primary-teal hover:text-white"
                  title="Add directly to cart"
                >
                  <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                </button>
              </div>
              <span className="font-mono text-[9px] uppercase font-bold text-primary-teal block mb-1">
                {relatedProd.category}
              </span>
              <h3 className="font-display text-[13px] font-bold text-primary-dark truncate group-hover:text-primary-teal transition-colors">
                {relatedProd.title}
              </h3>
              <span className="font-mono text-[11px] font-bold text-on-surface-variant mt-1 block">
                ${relatedProd.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
