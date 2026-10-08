import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface CTAProps {
  onOpenDemo: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenDemo }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Subtle depth accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700/50 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 relative z-10">
        <ScrollReveal>
          <div className="bg-blue-700/50 rounded-2xl border border-blue-400/30 p-8 sm:p-12 text-center shadow-elevated relative overflow-hidden">
            
            <div className="max-w-2xl mx-auto space-y-4">
              
              {/* Green status accent */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold tracking-wide border border-emerald-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Siap Digunakan</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Kelola Garansi Toko Lebih Rapi Sekarang
              </h2>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl mx-auto">
                Tinggalkan nota kertas manual dan kelola garansi produk Anda secara digital.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onOpenDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-semibold text-blue-900 bg-white hover:bg-blue-50 rounded-lg shadow-md transition-all duration-150 active:scale-95"
                >
                  <span>Coba Demo</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </button>
              </div>

              <div className="pt-2 text-xs text-blue-200/80">
                Simulasi interaktif langsung di browser tanpa instalasi
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
