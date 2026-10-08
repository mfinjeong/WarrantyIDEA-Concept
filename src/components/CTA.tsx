import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface CTAProps {
  onOpenDemo: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="w-full py-16 md:py-20 bg-surface-base">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-card relative overflow-hidden">
          
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>

          <div className="max-w-2xl mx-auto space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Siap Bertransformasi Digital
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kelola Garansi Tanpa Ribet.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              WarrantyIDEA membantu seller dan pelanggan mengelola informasi garansi dan layanan produk dalam satu sistem.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-subtle transition-all duration-150 active:scale-95"
              >
                <span>View Demo</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
            </div>

            <div className="pt-4 text-xs text-slate-400">
              Tidak membutuhkan kartu kredit &bull; Simulasi demo interaktif langsung di browser
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
