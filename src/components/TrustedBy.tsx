"use client";

export default function TrustedBy() {
  const brands = [
    { name: "Apex Dynamics", svg: (
      <svg className="h-6 fill-current text-slate-400 hover:text-slate-900 transition-colors duration-250" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 L20 5 L30 20 L25 20 L20 12 L15 20 Z" />
        <text x="38" y="20" className="font-bold text-[12px] tracking-widest font-sans">APEX</text>
      </svg>
    )},
    { name: "Vortex Data", svg: (
      <svg className="h-6 fill-current text-slate-400 hover:text-slate-900 transition-colors duration-250" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
        <text x="32" y="20" className="font-bold text-[12px] tracking-widest font-sans">VORTEX</text>
      </svg>
    )},
    { name: "Cognitex AI", svg: (
      <svg className="h-6 fill-current text-slate-400 hover:text-slate-900 transition-colors duration-250" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="7" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="13" cy="15" r="2.5" />
        <text x="28" y="20" className="font-bold text-[12px] tracking-widest font-sans">COGNITEX</text>
      </svg>
    )},
    { name: "Synthetix Cloud", svg: (
      <svg className="h-6 fill-current text-slate-400 hover:text-slate-900 transition-colors duration-250" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20 L15 10 L22 20 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M15 20 L22 10 L29 20 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="36" y="20" className="font-bold text-[12px] tracking-widest font-sans">SYNTHETIX</text>
      </svg>
    )},
    { name: "Quantum Labs", svg: (
      <svg className="h-6 fill-current text-slate-400 hover:text-slate-900 transition-colors duration-250" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="8" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="2" />
        <line x1="15" y1="8" x2="15" y2="22" stroke="currentColor" strokeWidth="2" />
        <text x="30" y="20" className="font-bold text-[12px] tracking-widest font-sans">QUANTUM</text>
      </svg>
    )},
    { name: "Chronos Inc", svg: (
      <svg className="h-6 fill-current text-slate-400 hover:text-slate-900 transition-colors duration-250" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="18" height="18" rx="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="14" y1="14" x2="14" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="32" y="20" className="font-bold text-[12px] tracking-widest font-sans">CHRONOS</text>
      </svg>
    )},
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 flex justify-center lg:justify-start">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Trusted by Technology Pioneers
        </span>
      </div>

      {/* Overflow slider container */}
      <div className="flex w-[200%] gap-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
        {/* Scroller Group 1 */}
        <div className="flex items-center justify-around min-w-full gap-8 animate-infinite-scroll shrink-0">
          {brands.map((brand, idx) => (
            <div key={`brand-1-${idx}`} className="flex items-center justify-center py-1">
              {brand.svg}
            </div>
          ))}
        </div>

        {/* Scroller Group 2 (Duplicate for loop) */}
        <div className="flex items-center justify-around min-w-full gap-8 animate-infinite-scroll shrink-0" aria-hidden="true">
          {brands.map((brand, idx) => (
            <div key={`brand-2-${idx}`} className="flex items-center justify-center py-1">
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
