import React from 'react';

interface SidebarFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export default function SidebarFilters({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy
}: SidebarFiltersProps) {

  const categories = [
    { id: 'All', label: 'All Products', icon: 'grid_view' },
    { id: 'Automation', label: 'Automation', icon: 'precision_manufacturing' },
    { id: 'Sensors', label: 'Sensors', icon: 'sensors' },
    { id: 'Industrial Kits', label: 'Industrial Kits', icon: 'inventory_2' },
    { id: 'Quality Control', label: 'Quality Control', icon: 'verified' }
  ];

  return (
    <div className="space-y-8 select-none">
      
      {/* Category Section */}
      <section>
        <h3 className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          Categories
        </h3>
        <nav className="flex flex-col space-y-1.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full px-4 py-2.5 rounded-xl flex items-center gap-3 text-left transition-all font-sans text-sm ${
                  isActive
                    ? 'bg-primary-teal text-white font-semibold shadow-md shadow-primary-teal/10'
                    : 'text-on-surface-variant hover:bg-slate-100 hover:text-primary-dark'
                }`}
              >
                <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-white' : 'text-outline'}`}>
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </nav>
      </section>

      {/* Sort Section */}
      <section>
        <h3 className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
          Sort By
        </h3>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-3 bg-white border border-outline-variant/50 rounded-xl font-sans text-sm text-primary-dark shadow-sm focus:ring-2 focus:ring-primary-teal/20 focus:border-primary-teal outline-none cursor-pointer transition-all appearance-none"
          >
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Best Rating</option>
          </select>
          <span className="material-symbols-outlined text-[18px] text-outline absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            unfold_more
          </span>
        </div>
      </section>

      {/* Corporate Help Desk Banner */}
      <div className="p-6 bg-[#020F12] text-white rounded-2xl relative overflow-hidden shadow-lg border border-white/5">
        <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none transform rotate-12">
          <span className="material-symbols-outlined text-9xl">support_agent</span>
        </div>
        <p className="font-display text-xl font-bold mb-2">Need Expert Help?</p>
        <p className="font-sans text-xs text-on-tertiary-container/80 leading-relaxed mb-4">
          Our senior systems control engineers are ready to assist with custom automation setups.
        </p>
        <button
          onClick={() => alert('Support portal linked. An automation engineer will contact you shortly.')}
          className="w-full py-2.5 bg-primary-teal hover:bg-primary-teal/95 active:scale-[0.98] text-white font-mono text-xs font-semibold rounded-lg shadow-md transition-all uppercase tracking-wider"
        >
          Contact Support
        </button>
      </div>

    </div>
  );
}
