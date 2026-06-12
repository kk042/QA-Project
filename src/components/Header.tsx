import React from 'react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  currentScreen: 'catalog' | 'detail' | 'checkout' | 'account';
  setScreen: (screen: 'catalog' | 'detail' | 'checkout' | 'account') => void;
  openCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  userEmail: string | null;
  onLogout: () => void;
  onToggleMobileDrawer: () => void;
}

export default function Header({
  cart,
  currentScreen,
  setScreen,
  openCart,
  searchQuery,
  setSearchQuery,
  userEmail,
  onLogout,
  onToggleMobileDrawer
}: HeaderProps) {
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 w-full z-40 bg-white/85 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-10 py-4 max-w-7xl mx-auto">
        
        {/* Brand Logo Anchor */}
        <div 
          onClick={() => setScreen('catalog')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <span className="material-symbols-outlined text-primary-teal text-3xl select-none group-hover:scale-105 transition-transform">
            hub
          </span>
          <span className="font-display text-2xl font-bold text-primary-teal tracking-tight">
            QACart
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline select-none text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentScreen !== 'catalog') {
                  setScreen('catalog');
                }
              }}
              className="w-full pl-10 pr-4 py-2 bg-slate-100/60 border border-outline-variant/30 rounded-full focus:ring-2 focus:ring-primary-teal/20 focus:border-primary-teal outline-none transition-all font-sans text-sm placeholder:text-on-surface-variant/50"
              placeholder="Search industrial solutions..."
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 hover:bg-slate-200 rounded-full transition-colors flex items-center"
              >
                <span className="material-symbols-outlined text-[16px] text-outline">
                  close
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          
          {/* Cart Icon Badge Trigger */}
          <button 
            onClick={openCart}
            aria-label="Toggle Shopping Cart Drawer"
            className="relative p-2 text-primary-teal hover:bg-slate-100 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              shopping_cart
            </span>
            {totalCartCount > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center min-w-5 h-5 px-1 text-[10px] font-mono font-semibold bg-accent-teal text-white rounded-full animate-pulse">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Account/User Status Trigger */}
          {userEmail ? (
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={() => setScreen('account')}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs rounded-lg transition-all ${
                  currentScreen === 'account' 
                    ? 'text-primary-teal bg-primary-teal/10 font-bold' 
                    : 'text-on-surface-variant hover:text-primary-teal hover:bg-slate-50'
                }`}
              >
                <span className="material-symbols-outlined text-lg">person</span>
                <span className="max-w-[120px] truncate">{userEmail.split('@')[0]}</span>
              </button>
              <button 
                onClick={onLogout}
                title="Log Out Account"
                className="p-1.5 hover:bg-orange-50 text-orange-600 rounded-xl transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">logout</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setScreen('account')}
              className={`hidden md:flex items-center gap-1.5 px-4 py-2 font-mono text-xs rounded-lg transition-all ${
                currentScreen === 'account'
                  ? 'text-primary-teal bg-primary-teal/10 font-bold border-b-2 border-primary-teal'
                  : 'text-on-surface-variant hover:text-primary-teal hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-lg">person</span>
              Account
            </button>
          )}

          {/* Mobile Drawer Navigation Toggler */}
          <button 
            onClick={onToggleMobileDrawer}
            className="md:hidden p-2 text-on-surface-variant hover:bg-slate-100 rounded-lg transition-all"
            aria-label="Open Filter and Categories Side Drawer"
          >
            <span className="material-symbols-outlined text-2xl">
              menu
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Search Bar overlay */}
      <div className="flex md:hidden px-4 pb-3 max-w-7xl mx-auto">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[18px]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentScreen !== 'catalog') {
                setScreen('catalog');
              }
            }}
            className="w-full pl-9 pr-4 py-2 bg-slate-100/60 border border-outline-variant/30 rounded-full focus:ring-2 focus:ring-primary-teal/20 focus:border-primary-teal outline-none transition-all font-sans text-xs placeholder:text-on-surface-variant/50"
            placeholder="Search solutions..."
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5"
            >
              <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
