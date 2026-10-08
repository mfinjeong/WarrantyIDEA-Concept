import React, { useState } from 'react';
import {
  QrCode,
  Smartphone,
  Info,
  ShieldCheck,
  History,
  Calendar,
  Clock,
  Wrench,
} from 'lucide-react';

export const QRFlow: React.FC = () => {
  const [showHistory, setShowHistory] = useState(false);

  const flowSteps = [
    {
      num: '01',
      title: 'Scan QR',
      desc: 'Customer mengarahkan kamera HP ke stiker QR WarrantyIDEA pada unit.',
      icon: QrCode,
    },
    {
      num: '02',
      title: 'Product Information',
      desc: 'Halaman web otomatis terbuka menampilkan model, seri, dan detail toko.',
      icon: Info,
    },
    {
      num: '03',
      title: 'Warranty Status',
      desc: 'Masa aktif garansi dan sisa hari garansi terlihat secara transparan.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Service History',
      desc: 'Catatan servis teknisi dan penggantian komponen dapat dipantau.',
      icon: History,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-y border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-emerald-200">
            Pengalaman Pengguna (Customer Experience)
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Semudah Scan QR
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Tidak perlu mendownload aplikasi tambahan. Pelanggan cukup memindai kode QR dari kamera bawaan smartphone untuk memeriksa garansi secara instan.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-w-0">
          
          {/* Left Column: Alur Penjelasan */}
          <div className="w-full lg:col-span-7 space-y-6 min-w-0">
            <div className="space-y-4">
              {flowSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-surface-base hover:bg-slate-50 transition-colors min-w-0"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-subtle">
                      <Icon className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 shrink-0">
                          {step.num}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 truncate">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note box */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3 min-w-0">
              <Smartphone className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                Kompatibel dengan semua smartphone Android dan iOS tanpa instalasi aplikasi native.
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Mobile Mockup Screen */}
          <div className="w-full lg:col-span-5 flex justify-center min-w-0">
            
            {/* Phone Container */}
            <div className="w-full max-w-[300px] sm:max-w-[320px] bg-white rounded-3xl border-4 border-slate-800 shadow-elevated overflow-hidden min-w-0">
              
              {/* Phone Speaker Notch */}
              <div className="bg-slate-800 pt-2 pb-1.5 flex justify-center">
                <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
              </div>

              {/* Mobile Browser Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="truncate">warrantyidea.id/v/TUF-82A91</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>

              {/* Mobile Content Screen */}
              <div className="p-4 space-y-4 bg-white text-left">
                
                {/* App Brand Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    </div>
                    <span className="text-xs font-bold text-slate-900">WarrantyIDEA</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                    VERIFIED
                  </span>
                </div>

                {/* Product Name Card */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Model Produk</div>
                  <div className="text-sm font-bold text-slate-900">ASUS TUF Gaming F15</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">SN: TUF-82A91-FX506</div>
                </div>

                {/* Status Badge & Days remaining */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
                  <div className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider">Status Garansi</div>
                  <div className="text-lg font-extrabold text-emerald-900 mt-0.5">ACTIVE</div>
                  <div className="text-xs font-semibold text-emerald-700 mt-1">
                    Sisa: 287 Hari
                  </div>
                  {/* Subtle Progress Bar */}
                  <div className="w-full bg-emerald-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                {/* Purchase Info */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Purchase Date
                    </span>
                    <span className="font-semibold text-slate-800">12 August 2026</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Masa Perlindungan
                    </span>
                    <span className="font-semibold text-slate-800">12 Bulan</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500">Toko Pembelian</span>
                    <span className="font-semibold text-blue-600">Sentra Komputer</span>
                  </div>
                </div>

                {/* View Service History Button */}
                <div>
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="w-full py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-subtle transition-colors"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>{showHistory ? 'Sembunyikan Riwayat' : 'View Service History'}</span>
                  </button>
                </div>

                {/* History Drawer Simulation */}
                {showHistory && (
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-[11px] space-y-2 animate-fadeIn">
                    <div className="font-bold text-slate-800 flex items-center justify-between">
                      <span>Riwayat Pemeliharaan:</span>
                      <span className="text-emerald-700 font-normal">1 Catatan</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>10 Sep 2026</span>
                        <span className="text-emerald-700 font-semibold">Selesai</span>
                      </div>
                      <div className="font-medium text-slate-800">Pembersihan Fan &amp; Upgrade RAM</div>
                      <div className="text-slate-500 text-[10px]">Teknisi: Riko &bull; Komponen: 1x 16GB DDR5 Kingston</div>
                    </div>
                  </div>
                )}

                <div className="text-center text-[10px] text-slate-400 pt-1">
                  Didukung oleh WarrantyIDEA Core
                </div>

              </div>

              {/* Phone Bottom Home Bar */}
              <div className="bg-slate-100 py-2 flex justify-center border-t border-slate-200">
                <div className="w-24 h-1 bg-slate-400 rounded-full"></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
