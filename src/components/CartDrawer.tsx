import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onStartCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onStartCheckout
}: CartDrawerProps) {
  
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isCartEmpty = cart.length === 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* Dimming Backdrop Overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#020F12]/40 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto"
        aria-hidden="true"
      />

      {/* Drawer Body Container */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl flex flex-col z-50">
        
        {/* Header Block */}
        <div className="px-6 py-5 border-b border-outline-variant/20 flex justify-between items-center select-none bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-teal">
              shopping_cart
            </span>
            <h2 className="font-display text-xl font-bold text-primary-dark">
              Your Systems Cart
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close Shopping Cart"
          >
            <span className="material-symbols-outlined text-on-surface-variant font-bold text-[20px]">
              close
            </span>
          </button>
        </div>

        {/* Dynamic Items Slider */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {isCartEmpty ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 select-none">
              <span className="material-symbols-outlined text-6xl text-outline/30 mb-4 animate-bounce">
                shopping_cart_off
              </span>
              <p className="font-display text-lg font-bold text-primary-dark opacity-80">
                Your cart is empty
              </p>
              <p className="font-sans text-xs text-on-surface-variant max-w-xs mt-1.5 leading-relaxed">
                Explore our state-of-the-art catalog of high-torque motors, visual inspection sensors, and calibration toolkits.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-5 py-2.5 bg-primary-teal text-white rounded-xl text-xs font-bold shadow-md shadow-primary-teal/5"
              >
                Start Engineering
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const itemTotal = item.product.price * item.quantity;
              return (
                <div 
                  key={item.product.id}
                  className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group relative transition-all hover:bg-white hover:shadow-md"
                >
                  {/* Thumb image stage */}
                  <div className="w-20 h-20 rounded-xl bg-white overflow-hidden border border-slate-100 flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Pricing and parameters info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-display text-sm font-bold text-primary-dark line-clamp-1 pr-4">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-outline hover:text-red-600 p-0.5 rounded transition-all"
                          title="Remove item"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>
                      <p className="font-mono text-[9px] uppercase font-bold text-primary-teal py-0.5">
                        {item.product.category}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      
                      {/* Counter stepper */}
                      <div className="flex items-center border border-outline-variant/30 rounded-lg overflow-hidden bg-white shadow-sm">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-slate-100 text-on-surface-variant transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <span className="material-symbols-outlined text-[12px] font-bold">remove</span>
                        </button>
                        <span className="px-3 py-0.5 font-mono text-xs font-bold text-primary-dark">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-slate-100 text-on-surface-variant transition-colors"
                          aria-label="Increase quantity"
                        >
                          <span className="material-symbols-outlined text-[12px] font-bold">add</span>
                        </button>
                      </div>

                      {/* Line total price */}
                      <span className="font-mono text-[13px] font-extrabold text-primary-dark">
                        ${itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>

                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Total Breakdown summary */}
        {!isCartEmpty && (
          <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4 select-none">
            
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs text-on-surface-variant">
                <span>Subtotal</span>
                <span className="font-mono font-bold text-primary-dark">
                  ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant">
                <span>Direct Freight Dispatching</span>
                <span className="font-mono font-extrabold text-primary-teal uppercase">
                  FREE
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-on-surface-variant">
                <span>Estimated VAT / Duties</span>
                <span className="font-mono font-bold text-primary-dark">
                  No duties (freemium integration)
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
              <span className="font-display text-base font-bold text-primary-dark">
                Total Logistics Budget
              </span>
              <span className="font-mono text-lg font-bold text-primary-dark">
                ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Checkouts call trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onStartCheckout();
                }}
                className="w-full bg-[#020F12] text-white py-3.5 rounded-2xl font-sans text-sm font-bold shadow-lg text-center hover:bg-primary-teal transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Secure Checkout</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full text-center mt-3 text-xs font-mono tracking-wider font-extrabold uppercase text-on-surface-variant hover:text-primary-teal transition-colors"
              >
                Continue Shopping
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
