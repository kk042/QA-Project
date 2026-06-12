import React, { useState } from 'react';

interface AuthPageProps {
  userEmail: string | null;
  onLogin: (email: string) => void;
  onLogout: () => void;
}

export default function AuthPage({ userEmail, onLogin, onLogout }: AuthPageProps) {
  
  const [emailInput, setEmailInput] = useState('engineering@abautomation.com');
  const [passwordInput, setPasswordInput] = useState('********');
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) {
      alert('Please state a valid corporate email address.');
      return;
    }
    onLogin(emailInput);
  };

  // Pre-configured simulated system orders and calibrated diagnostic certificates for authentic design
  const systemsOrders = [
    {
      id: 'ORD-9821-B4',
      date: 'May 14, 2026',
      total: 2499.00,
      status: 'In Transit via DHL Freight',
      items: ['QA Pro-Scanner X1 Industrial Toolkit'],
      tracking: '1Z999AA10123456784'
    },
    {
      id: 'ORD-7201-A9',
      date: 'April 20, 2026',
      total: 1345.50,
      status: 'Successfully Delivered',
      items: ['OpticScan L-Series', 'FlowMaster Kit V2'],
      tracking: '1Z999AA10123412356'
    }
  ];

  const calibrationCertificates = [
    {
      device: 'Dual-Laser Scanner Assembly (X1)',
      id: 'CERT-X1-A90M',
      calibratedAt: '2026-05-10',
      nextDue: '2027-05-10',
      status: 'Active & Verified',
      grade: 'Class A Calibration Metric'
    },
    {
      device: 'Hyper-Spectral Spectral Matrix Trigger',
      id: 'CERT-L-9988',
      calibratedAt: '2026-04-18',
      nextDue: '2027-04-18',
      status: 'Active & Verified',
      grade: 'Class B Calibration Metric'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      
      {userEmail ? (
        // Authenticated Dashboard Layout
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* User Bio and Meta Staging */}
          <section className="md:col-span-4 bg-white p-6 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary-teal/15 rounded-full flex items-center justify-center text-primary-teal mb-4 select-none">
              <span className="material-symbols-outlined text-4xl">
                engineering
              </span>
            </div>
            
            <h2 className="font-display text-xl font-bold text-primary-dark">
              Systems Control Engineer
            </h2>
            <p className="font-mono text-xs text-on-surface-variant/70 mt-1">
              {userEmail}
            </p>

            <div className="w-full mt-6 pt-6 border-t border-slate-100 space-y-3.5 text-xs text-on-surface-variant font-sans select-none">
              <div className="flex justify-between">
                <span>Account Status</span>
                <span className="font-semibold text-primary-teal">Enterprise Verified</span>
              </div>
              <div className="flex justify-between">
                <span>Access Authority</span>
                <strong className="font-mono text-cyan-700">LEVEL 3 SYSTEMS</strong>
              </div>
              <div className="flex justify-between">
                <span>Enterprise Registry</span>
                <span className="font-mono">AB-99214-X</span>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="mt-8 w-full py-2.5 bg-orange-50 hover:bg-orange-100/80 active:scale-95 text-orange-600 font-mono text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              Log Out Account
            </button>
          </section>

          {/* Historical Orders and Calibration Certificates panel */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Orders section */}
            <section className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary-teal text-2xl">
                  orders
                </span>
                <h3 className="font-display text-lg font-bold text-primary-dark">
                  Industrial Acquisitions ({systemsOrders.length})
                </h3>
              </div>

              <div className="space-y-4">
                {systemsOrders.map((ord) => (
                  <div key={ord.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white pb-3 mb-3 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-primary-dark">
                          {ord.id}
                        </span>
                        <span className="text-on-surface-variant/70">| {ord.date}</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full font-sans font-bold text-[10px] uppercase ${
                        ord.status.includes('Delivered') 
                          ? 'bg-green-50 text-green-700 border border-green-100' 
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-100 animate-pulse'
                      }`}>
                        {ord.status}
                      </span>
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <p className="font-semibold text-primary-dark">Included Logistics:</p>
                      <ul className="list-disc pl-4 space-y-1 text-on-surface-variant">
                        {ord.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-[11px]">
                      <div>
                        <span className="opacity-70">DHL TRACKING: </span>
                        <span className="font-bold text-primary-dark select-all">{ord.tracking}</span>
                      </div>
                      <span className="font-bold text-sm text-primary-dark">
                        ${ord.total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            </section>

            {/* Calibration Credentials section */}
            <section className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary-teal text-2xl">
                  verified
                </span>
                <h3 className="font-display text-lg font-bold text-primary-dark">
                  Active Calibration Certificates
                </h3>
              </div>

              <div className="space-y-4">
                {calibrationCertificates.map((cert) => (
                  <div key={cert.id} className="p-4 rounded-2xl bg-sky-50/40 border border-sky-100/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-left">
                    <div className="space-y-1">
                      <h4 className="font-sans font-semibold text-primary-dark text-[13px]">
                        {cert.device}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-on-surface-variant/80">
                        <span>CERT: <strong>{cert.id}</strong></span>
                        <span>•</span>
                        <span>Calibrated: {cert.calibratedAt}</span>
                        <span>•</span>
                        <span>Next Due: {cert.nextDue}</span>
                      </div>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <span className="bg-cyan-100/80 text-cyan-800 font-bold px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wider block text-center">
                        {cert.status}
                      </span>
                      <span className="text-[10px] text-on-surface-variant/70 block mt-1">
                        {cert.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      ) : (
        // Non-authenticated interactive credential fields
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-4xl mx-auto">
          
          {/* Brand Aesthetics Card block */}
          <div className="bg-[#020F12] p-8 md:p-12 text-white rounded-[28px] relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute -left-12 -top-12 opacity-5 pointer-events-none transform rotate-12">
              <span className="material-symbols-outlined text-[180px]">
                hub
              </span>
            </div>
            
            <div className="space-y-4 text-left select-none relative z-10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-accent-teal">hub</span>
                <span className="font-display font-bold text-xl tracking-tight">ABAutomationHub</span>
              </div>
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight pt-4">
                Verify Industrial Identity
              </h2>
              <p className="font-sans text-xs text-slate-300 leading-relaxed pt-2">
                Sign in to your corporate automation portal to trace calibrated systems, manage dynamic freight dispatching, and authorize secure logistics budgets.
              </p>
            </div>

            <div className="pt-10 select-none relative z-10">
              <div className="flex items-center gap-4 text-left p-4 bg-white/5 rounded-2xl border border-white/5">
                <span className="material-symbols-outlined text-accent-teal">shield</span>
                <div>
                  <p className="font-sans text-xs font-bold">Encrypted Handshake Protocol</p>
                  <p className="font-mono text-[10px] text-slate-300/80">RSA-4096 Authenticated Gatekeeping</p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Forms Card block */}
          <div className="bg-white p-8 md:p-10 rounded-[28px] border border-outline-variant/30 shadow-sm text-left flex flex-col justify-center">
            <h2 className="font-display text-2xl font-bold text-primary-dark mb-2">
              {isRegisterMode ? 'Register Hub profile' : 'Sign in to Hub'}
            </h2>
            <p className="font-sans text-xs text-on-surface-variant mb-6">
              State your valid corporate email credentials.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                  Corporate Email
                </label>
                <input 
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all font-sans text-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block ml-1 select-none">
                  Password Key
                </label>
                <input 
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-outline-variant/40 rounded-xl focus:ring-2 focus:ring-primary-teal focus:border-primary-teal outline-none transition-all font-sans text-sm"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#020F12] text-white py-3 rounded-xl font-sans text-sm font-bold tracking-wide shadow-md active:scale-95 transition-all outline-none hover:bg-primary-teal"
                >
                  {isRegisterMode ? 'Construct Hub account' : 'Authorize Credentials'}
                </button>
              </div>

            </form>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <button
                onClick={() => setIsRegisterMode(!isRegisterMode)}
                className="font-mono text-xs text-primary-teal font-bold hover:underline outline-none"
              >
                {isRegisterMode 
                  ? 'Already have credentials? Log In' 
                  : 'Or create a new enterprise workspace account'}
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
