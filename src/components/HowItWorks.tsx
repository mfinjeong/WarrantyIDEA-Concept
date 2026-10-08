import React from 'react';
import {
  UserPlus,
  QrCode,
  Smartphone,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Seller mendaftarkan produk',
      desc: 'Kasir atau admin toko menginput serial number, tipe produk, dan tanggal pembelian ke dashboard WarrantyIDEA.',
      icon: UserPlus,
    },
    {
      num: '02',
      title: 'QR Code dibuat untuk produk',
      desc: 'Sistem secara otomatis menghasilkan kode QR unik yang dapat dicetak langsung ke stiker unit atau struk digital.',
      icon: QrCode,
    },
    {
      num: '03',
      title: 'Customer melakukan scan',
      desc: 'Customer cukup mengarahkan kamera smartphone ke kode QR stiker tanpa perlu menginstal aplikasi pihak ketiga.',
      icon: Smartphone,
    },
    {
      num: '04',
      title: 'Warranty & service history dapat diakses',
      desc: 'Informasi garansi aktif, sisa masa perlindungan, dan riwayat perbaikan terbuka secara transparan dan akurat.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="alur" className="w-full py-16 md:py-24 bg-white border-y border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            Alur Implementasi
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cara Kerja WarrantyIDEA
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Hanya butuh empat tahapan mudah untuk beralih dari nota kertas manual ke ekosistem garansi digital yang andal.
          </p>
        </div>

        {/* Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-200 -translate-y-8 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-subtle hover:border-blue-300 transition-colors"
                >
                  <div>
                    {/* Top Row: Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-extrabold text-lg">
                        {step.num}
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Langkah {idx + 1} Terotomatisasi</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
