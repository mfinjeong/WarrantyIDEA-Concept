import React from 'react';
import {
  Package,
  QrCode,
  Layers,
  FileCheck,
  ArrowRight,
  ArrowDown,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SolutionSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Produk',
      badge: 'Penjualan',
      icon: Package,
      desc: 'Produk didaftarkan ke sistem saat transaksi kasir.',
      detail: 'Mencatat nomor seri dan masa garansi.',
    },
    {
      step: '02',
      title: 'QR Code',
      badge: 'Stiker Unik',
      icon: QrCode,
      desc: 'Stiker QR Code ditempel langsung pada unit fisik.',
      detail: 'Identitas digital produk.',
    },
    {
      step: '03',
      title: 'WarrantyIDEA',
      badge: 'Sistem Terpusat',
      icon: Layers,
      desc: 'Data garansi dan masa berlaku tersimpan aman.',
      detail: 'Tersinkronisasi otomatis.',
    },
    {
      step: '04',
      title: 'Klaim & Servis',
      badge: 'Akses Instan',
      icon: FileCheck,
      desc: 'Cek status garansi dan riwayat servis kapan saja.',
      detail: 'Dapat diakses dari browser HP.',
    },
  ];

  return (
    <section id="solusi" className="w-full py-16 md:py-24 bg-white relative overflow-hidden border-b border-slate-200/70 scroll-mt-16">
      {/* Subtle edge technical accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50/30 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" aria-hidden="true" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0 relative z-10">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
              Solusi
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Satu Sistem Garansi Digital
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              WarrantyIDEA menggantikan nota kertas dengan identitas digital yang praktis dan akurat.
            </p>
          </div>

          {/* HTML + Tailwind Flow Diagram */}
          <div className="w-full max-w-full bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-10 shadow-card min-w-0">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-2 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
              <span className="text-sm font-bold text-slate-800 truncate">Alur Integrasi Sistem Digital</span>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline shrink-0">
              100% Tanpa Kertas &bull; Otomatisasi Serial Number
            </span>
          </div>

          {/* Desktop & Mobile Responsive Diagram */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 relative min-w-0">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="w-full flex flex-col lg:flex-row items-center min-w-0">
                  
                  {/* Step Card */}
                  <div className="w-full min-w-0 bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-blue-300 p-4 sm:p-5 transition-all shadow-subtle flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {item.step}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {item.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-subtle">
                          <Icon className="w-5 h-5 text-emerald-300" />
                        </div>
                        <h3 className="text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                      {item.detail}
                    </div>
                  </div>

                  {/* Connectors (Arrow Right on Desktop, Arrow Down on Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="my-2 lg:my-0 lg:mx-2 flex items-center justify-center text-blue-600 shrink-0">
                      {/* Desktop arrow */}
                      <div className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      {/* Mobile arrow */}
                      <div className="flex lg:hidden items-center justify-center w-7 h-7 rounded-full bg-blue-50 border border-blue-200 text-blue-600">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verifikasi garansi lebih cepat dan akurat tanpa nota fisik.</span>
            </div>
            <div className="text-slate-400 font-mono text-[11px]">
              ID &amp; QR Code Unik
            </div>
          </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
