import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenDemo: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const plans = [
    {
      name: 'Starter',
      price: 'Rp49.000',
      period: '/ bulan',
      desc: 'Tepat untuk toko servis komputer perorangan atau konter rakitan skala awal.',
      highlight: false,
      features: [
        'Hingga 200 produk terdaftar',
        '1 Akun pengelola kasir',
        'Generator QR Code standar',
        'Pencarian nomor seri instan',
        'Dukungan via WhatsApp',
      ],
    },
    {
      name: 'Business',
      price: 'Rp149.000',
      period: '/ bulan',
      desc: 'Solusi ideal untuk toko ritel komputer aktif dengan volume transaksi harian reguler.',
      highlight: true,
      tag: 'Pilihan Populer',
      features: [
        'Hingga 1.500 produk terdaftar',
        '3 Akun pengelola (Kasir & Teknisi)',
        'Pencatatan riwayat servis lengkap',
        'Notifikasi garansi via WhatsApp',
        'Cetak stiker QR ke printer thermal',
        'Prioritas bantuan teknis',
      ],
    },
    {
      name: 'Pro',
      price: 'Rp299.000',
      period: '/ bulan',
      desc: 'Untuk distributor lokal atau toko komputer dengan multi-cabang dan teknisi banyak.',
      highlight: false,
      features: [
        'Produk terdaftar tanpa batas',
        'Multi-cabang & multi-gudang',
        'Akun teknisi & admin tidak terbatas',
        'Export data Excel & PDF analitik',
        'Integrasi API sistem kasir (POS)',
        'SLA respon teknis 24 jam',
      ],
    },
  ];

  return (
    <section id="harga" className="w-full py-16 md:py-24 bg-surface-base">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            Skema Langganan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Model Bisnis
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            WarrantyIDEA menggunakan model subscription terjangkau untuk toko, dirancang fleksibel tanpa biaya tersembunyi.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-colors ${
                plan.highlight
                  ? 'bg-white border-blue-500 shadow-card ring-1 ring-blue-500/20'
                  : 'bg-white border-slate-200 shadow-subtle hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {plan.tag}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mt-3 mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {plan.period}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <button
                  onClick={onOpenDemo}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                    plan.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-subtle'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>Pilih Paket {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Sub-note */}
        <div className="text-center mt-8 text-xs text-slate-500">
          Uji coba gratis 14 hari untuk toko baru tanpa komitmen kartu kredit.
        </div>

      </div>
    </section>
  );
};
