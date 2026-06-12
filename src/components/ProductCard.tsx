import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onClick: () => void;
  key?: string;
}

export default function ProductCard({ product, onAddToCart, onClick }: ProductCardProps) {
  return (
    <div 
      onClick={onClick}
      className="product-card bg-white rounded-[24px] overflow-hidden flex flex-col group cursor-pointer border border-outline-variant/10"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          referrerPolicy="no-referrer"
        />
        
        {/* Category Top-Left Badge */}
        <span className={`absolute top-4 left-4 font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider shadow-sm select-none ${
          product.category === 'Automation' 
            ? 'bg-primary-teal text-white' 
            : 'bg-accent-teal text-white'
        }`}>
          {product.category}
        </span>

        {/* Rating overlay indicator */}
        <div className="absolute right-4 top-4 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined text-[14px] text-amber-500 font-bold">
            star
          </span>
          <span className="font-mono text-[10px] text-primary-dark font-semibold">
            {product.rating}
          </span>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Title */}
        <h2 className="font-display text-xl font-bold text-primary-dark tracking-tight line-clamp-1 group-hover:text-primary-teal transition-colors">
          {product.title}
        </h2>
        
        {/* Short Text description */}
        <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-2.5 mb-6 flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Cart controls */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
          <div className="flex flex-col">
            <span className="font-mono text-lg font-bold text-primary-dark">
              ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            {product.originalPrice && (
              <span className="font-mono text-[11px] text-on-surface-variant/70 line-through">
                ${product.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>

          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            className="flex items-center gap-2 bg-[#020F12] text-white p-3 rounded-xl hover:bg-primary-teal hover:px-5 active:scale-95 transition-all outline-none"
            title="Add directly to Shopping Cart"
          >
            <span className="material-symbols-outlined text-lg">
              add_shopping_cart
            </span>
            <span className="hidden group-hover:inline-block font-sans text-[11px] font-bold">
              Add to Cart
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
