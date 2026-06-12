import React from 'react';

interface FooterProps {
  setScreen: (screen: 'catalog' | 'detail' | 'checkout' | 'account') => void;
}

export default function Footer({ setScreen }: FooterProps) {
  return (
    <footer className="w-full bg-[#020F12] text-slate-400 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 text-left select-none">
        
        {/* Brand identity column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-3xl text-accent-teal">
              hub
            </span>
            <span className="font-display font-bold text-2xl tracking-tight">
              QACart
            </span>
          </div>
          <p className="font-sans text-xs leading-relaxed max-w-sm text-slate-400">
            High-precision industrial automation, quality control tools, and calibrated diagnostics systems for next-generation automated production plants.
          </p>
          <p className="font-mono text-[10px] text-slate-500">
            © 2026 QACart. All rights corporate reserved.
          </p>
        </div>

        {/* Links column 1 */}
        <div className="md:col-span-2.5 space-y-4">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            Industrial Catalog
          </h4>
          <ul className="space-y-2 text-xs font-sans">
            <li>
              <button onClick={() => setScreen('catalog')} className="hover:text-accent-teal transition-colors outline-none text-left">
                Automation Systems
              </button>
            </li>
            <li>
              <button onClick={() => setScreen('catalog')} className="hover:text-accent-teal transition-colors outline-none text-left">
                Hyper-Spectral Sensors
              </button>
            </li>
            <li>
              <button onClick={() => setScreen('catalog')} className="hover:text-accent-teal transition-colors outline-none text-left">
                Evaluation Toolkits
              </button>
            </li>
            <li>
              <button onClick={() => setScreen('catalog')} className="hover:text-accent-teal transition-colors outline-none text-left">
                Industrial Calibration Kits
              </button>
            </li>
          </ul>
        </div>

        {/* Links column 2 */}
        <div className="md:col-span-2.5 space-y-4">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            Services &amp; Support
          </h4>
          <ul className="space-y-2 text-xs font-sans">
            <li>
              <button onClick={() => setScreen('account')} className="hover:text-accent-teal transition-colors outline-none text-left">
                Your Enterprise Account
              </button>
            </li>
            <li>
              <button onClick={() => alert('Calibration records is linked inside account. Create or Log In to view details.')} className="hover:text-accent-teal transition-colors outline-none text-left">
                Calibration Verification
              </button>
            </li>
            <li>
              <button onClick={() => alert('Integration assistance channels are open 24/7 at support@qacart.com')} className="hover:text-accent-teal transition-colors outline-none text-left">
                Systems Engineer Support
              </button>
            </li>
            <li>
              <a href="#top" className="hover:text-accent-teal transition-colors outline-none text-left">
                Corporate Standards
              </a>
            </li>
          </ul>
        </div>

        {/* Links column 3 */}
        <div className="md:col-span-3 space-y-4 text-xs font-sans">
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            Security &amp; Logistics
          </h4>
          <p className="leading-relaxed text-slate-500">
            All logistics dispatching operations are verified under secure encrypted handshakes (RSA-4096), maintaining safe integration profiles and compliance metrics.
          </p>
          <div className="flex gap-4 items-center pt-2">
            <span className="material-symbols-outlined text-accent-teal text-xl">shield</span>
            <span className="font-mono text-[10px] text-slate-400">ISO 27001 Security Standard compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
