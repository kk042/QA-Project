import React, { useState } from 'react';
import { CartItem, ShippingInfo } from '../types';

interface CheckoutPageProps {
  cart: CartItem[];
  onPlaceOrder: (shippingInfo: ShippingInfo) => void;
  onBackToCatalog: () => void;
}

export default function CheckoutPage({
  cart,
  onPlaceOrder,
  onBackToCatalog
}: CheckoutPageProps) {
  
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [streetAddress, setStreetAddress] = useState('123 Automation Way');
  const [city, setCity] = useState('Tech City');
  const [state, setState] = useState('CA');
  const [zipCode, setZipCode] = useState('90210');
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const estimatedTax = subtotal * 0.08;
  const grandTotal = subtotal + estimatedTax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !streetAddress || !city || !state || !zipCode) {
      alert('Please complete all shipping address fields.');
      return;
    }
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPlaceOrder({
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        zipCode,
        sameAsBilling
      });
    }, 2000);
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      
      {/* Step Indicators */}
      <div className="flex items-center justify-center space-x-4 md:space-x-12 select-none">
        
        <div className={`flex items-center gap-2 ${activeStep === 1 ? 'text-primary-teal font-bold' : 'text-on-surface-variant opacity-70'}`}>
          <span className={`flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs ${
            activeStep === 1 ? 'bg-primary-teal text-white shadow-md' : 'border border-outline-variant'
          }`}>
            1
          </span>
          <span className="font-mono text-xs hidden sm:inline tracking-wider uppercase">Shipping</span>
        </div>

        <div className="h-px w-8 md:w-16 bg-outline-variant/50" />

        <div className={`flex items-center gap-2 ${activeStep === 2 ? 'text-primary-teal font-bold' : 'text-on-surface-variant opacity-50'}`}>
          <span className={`flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs ${
            activeStep === 2 ? 'bg-primary-teal text-white shadow-md' : 'border border-outline-variant'
          }`}>
            2
          </span>
          <span className="font-mono text-xs hidden sm:inline tracking-wider uppercase">Payment</span>
        </div>

        <div className="h-px w-8 md:w-16 bg-outline-variant/50" />

        <div className={`flex items-center gap-2 ${activeStep === 3 ? 'text-primary-teal font-bold' : 'text-on-surface-variant opacity-50'}`}>
          <span className={`flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs ${
            activeStep === 3 ? 'bg-primary-teal text-white shadow-md' : 'border border-outline-variant'
          }`}>
            3
          </span>
          <span className="font-mono text-xs hidden sm:inline tracking-wider uppercase">Review</span>
        </div>

      </div>

      {/* Grid Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Address Input details */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
            <h1 className="font-display text-2xl font-bold text-primary-dark mb-6">
              Shipping Address
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal transition-all outline-none font-sans text-sm"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal transition-all outline-none font-sans text-sm"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                  Street Address
                </label>
                <input 
                  type="text" 
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal transition-all outline-none font-sans text-sm"
                  placeholder="Street and number, P.O. Box"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                    City
                  </label>
                  <input 
                    type="text" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal transition-all outline-none font-sans text-sm"
                    placeholder="City name"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                    State / Province
                  </label>
                  <input 
                    type="text" 
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal transition-all outline-none font-sans text-sm"
                    placeholder="e.g. CA"
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                    ZIP / Postal Code
                  </label>
                  <input 
                    type="text" 
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal transition-all outline-none font-sans text-sm"
                    placeholder="e.g. 90210"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox"
                      checked={sameAsBilling}
                      onChange={(e) => setSameAsBilling(e.target.checked)}
                      className="peer appearance-none w-6 h-6 border-2 border-outline-variant rounded-md checked:bg-primary-teal checked:border-primary-teal transition-all cursor-pointer"
                    />
                    <span className="material-symbols-outlined absolute text-white scale-0 peer-checked:scale-100 transition-transform left-1/2 -translate-x-1/2 pointer-events-none text-base font-bold">
                      check
                    </span>
                  </div>
                  <span className="font-sans text-xs text-on-surface-variant group-hover:text-primary-dark transition-colors">
                    Billing address is same as shipping
                  </span>
                </label>
              </div>

              {/* Secure submission logic handles clicking */}
              <button type="submit" id="hidden-submit" className="hidden" />

            </form>
          </section>

          {/* Secure Verified Panel block */}
          <div className="flex items-center gap-4 p-5 bg-[#eaf4f7] rounded-2xl border border-primary-teal/15 shadow-sm">
            <span className="material-symbols-outlined text-primary-teal text-3xl select-none">
              verified_user
            </span>
            <div className="text-left select-none">
              <p className="font-sans text-xs font-bold text-primary-dark">
                Safe &amp; Secure Processing
              </p>
              <p className="font-mono text-[11px] text-on-surface-variant mt-0.5 leading-normal">
                Your credentials and billing profiles are fully encrypted with 256-bit enterprise SSL technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary Card block */}
        <div className="lg:col-span-5 space-y-6">
          <aside className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col border border-slate-800">
            {/* Ambient visual badge */}
            <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none transform rotate-12">
              <span className="material-symbols-outlined text-[140px]">
                shopping_cart
              </span>
            </div>

            <h2 className="font-display text-lg font-bold border-b border-slate-800 pb-4 mb-6 select-none">
              Order Summary
            </h2>

            {/* List products dynamically */}
            <div className="space-y-4 mb-8 overflow-y-auto max-h-[300px] pr-2">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex-shrink-0 border border-slate-800 flex items-center justify-center">
                    <img 
                      src={item.product.image} 
                      alt={item.product.title} 
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h3 className="font-sans text-xs font-semibold text-white truncate">
                      {item.product.title}
                    </h3>
                    <p className="font-mono text-[9px] text-slate-400 mt-0.5">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-mono text-xs font-bold text-accent-teal mt-1">
                      ${(item.product.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* In-depth breakdown details */}
            <div className="space-y-3 border-t border-slate-800 pt-6 font-mono text-xs select-none">
              <div className="flex justify-between items-center text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Freight Shipping</span>
                <span className="text-accent-teal font-extrabold uppercase">FREE</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Estimated Tax (8%)</span>
                <span>${estimatedTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center pt-4 mt-2 border-t-2 border-primary-teal/20">
                <span className="font-display text-sm font-bold text-white normal-case">Grand Total</span>
                <span className="text-accent-teal text-base font-bold">${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            {/* Direct action trigger */}
            <button
              type="button"
              disabled={isProcessing}
              onClick={() => {
                const hiddenBtn = document.getElementById('hidden-submit');
                if (hiddenBtn) {
                  hiddenBtn.click();
                }
              }}
              className="w-full mt-8 bg-primary-teal hover:bg-accent-teal hover:text-slate-900 font-sans text-sm font-bold py-4 px-6 rounded-full transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              {isProcessing ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                  <span>Verifying Transaction...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">lock</span>
                  <span>Place Industrial Order</span>
                </>
              )}
            </button>

            <div className="mt-6 flex justify-center items-center gap-6 opacity-40 select-none">
              <span className="material-symbols-outlined text-2xl">credit_card</span>
              <span className="material-symbols-outlined text-2xl">account_balance</span>
              <span className="material-symbols-outlined text-2xl">shield_locked</span>
            </div>

          </aside>

          {/* Sizable Delivery Badges in row */}
          <div className="grid grid-cols-2 gap-4 select-none">
            
            <div className="p-4 bg-white rounded-2xl border border-outline-variant/40 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary-teal mb-2">
                package_2
              </span>
              <span className="font-sans text-xs font-bold text-primary-dark">
                Free Express Freight
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant/70 mt-1 uppercase">
                Enterprise Express
              </span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-outline-variant/40 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary-teal mb-2">
                history
              </span>
              <span className="font-sans text-xs font-bold text-primary-dark">
                30-Day Evaluation
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant/70 mt-1 uppercase">
                Return Protection
              </span>
            </div>

          </div>

          <button
            type="button"
            onClick={onBackToCatalog}
            className="w-full text-center text-xs font-mono font-bold uppercase tracking-wider text-on-surface-variant hover:text-primary-teal transition-colors"
          >
            ← Back to Equipment Catalog
          </button>

        </div>

      </div>

    </div>
  );
}
