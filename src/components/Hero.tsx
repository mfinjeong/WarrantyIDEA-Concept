import React from 'react';
import {
  ArrowRight,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCheck2,
  Cpu,
  Store,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="w-full relative pt-10 pb-16 md:pt-16 md:pb-24 bg-surface-base">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0">
          
          {/* Left Column: Value Proposition */}
          <div className="w-full lg:col-span-6 space-y-6 min-w-0">
            
            {/* Subtle Pill Tag */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide max-w-full">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0"></span>
              <span>Sistem Digitalisasi Ritel Komputer &amp; Elektronik</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span className="text-[11px] font-medium text-pink-700 bg-pink-50 px-1.5 py-0.5 rounded border border-pink-200 shrink-0">
                Inovasi Mahasiswa IT
              </span>
            </div>

            {/* Headline */}
            <h1 className="w-full text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] break-words">
              Garansi Lebih Rapi, <br className="hidden sm:inline" />
              <span className="text-blue-600">Layanan Lebih Mudah.</span>
            </h1>

            {/* Subheadline */}
            <p className="w-full text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              WarrantyIDEA membantu toko komputer dan elektronik mengelola garansi, klaim, dan riwayat servis dalam satu sistem digital.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('preview')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-subtle transition-all duration-150 active:scale-95"
              >
                <span>Jelajahi Produk</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>
              <button
                onClick={() => scrollToSection('alur')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors shadow-subtle"
              >
                <span>Lihat Cara Kerja</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="w-full pt-6 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-4 text-slate-600">
              <div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Bebas Kertas</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">QR Digital Unik</div>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Verifikasi Cepat</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">&lt; 5 Detik</div>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Fokus Pengguna</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">Seller &amp; Buyer</div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Dashboard Mockup */}
          <div className="w-full lg:col-span-6 min-w-0">
            <div className="w-full max-w-full bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden min-w-0">
              
              {/* Mockup Window Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2 min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
                  <span className="hidden sm:inline text-xs font-mono text-slate-400 ml-1 truncate">app.warrantyidea.id/store</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-600 bg-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-200 shrink-0">
                  <Store className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate max-w-[140px] sm:max-w-none">Sentra Komputer</span>
                </div>
              </div>

              {/* Mockup Dashboard Content */}
              <div className="p-3.5 sm:p-5 space-y-4 sm:space-y-5 bg-white w-full min-w-0">
                
                {/* Search & Top Action */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">Warranty Overview</h2>
                    <p className="text-xs text-slate-500">Ringkasan status unit purna jual aktif</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-500">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="hidden sm:inline">Cari SN atau unit...</span>
                  </div>
                </div>

                {/* 4 Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  {/* Active Warranty */}
                  <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-emerald-800">Active</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-xl font-bold text-emerald-950">967</div>
                    <div className="text-[10px] text-emerald-700 mt-0.5">Garansi Berjalan</div>
                  </div>

                  {/* Expiring Soon (Subtle pink accent) */}
                  <div className="p-3 rounded-lg border border-pink-200 bg-pink-50/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-pink-800">Expiring</span>
                      <Clock className="w-3.5 h-3.5 text-pink-600" />
                    </div>
                    <div className="text-xl font-bold text-pink-950">48</div>
                    <div className="text-[10px] text-pink-700 mt-0.5">&lt; 30 Hari Sisa</div>
                  </div>

                  {/* Total Claims */}
                  <div className="p-3 rounded-lg border border-blue-200 bg-blue-50/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-blue-800">Claims</span>
                      <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="text-xl font-bold text-blue-950">24</div>
                    <div className="text-[10px] text-blue-700 mt-0.5">Verifikasi Toko</div>
                  </div>

                  {/* Service Records */}
                  <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-slate-700">Records</span>
                      <FileCheck2 className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                    <div className="text-xl font-bold text-slate-900">183</div>
                    <div className="text-[10px] text-slate-600 mt-0.5">Servis Selesai</div>
                  </div>
                </div>

                {/* Mini Activity Table in Mockup */}
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span>Aktivitas Produk Terkini</span>
                    <span className="text-[11px] text-blue-600 font-normal">Sinkron Real-time</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    
                    {/* Item 1 */}
                    <div className="p-2.5 sm:p-3 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors min-w-0">
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-800 truncate text-xs">ASUS ROG Strix G16</div>
                          <div className="text-[10px] text-slate-400 font-mono truncate">SN: ROG-2026-99A</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Aktif (310 Hari)
                        </span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-2.5 sm:p-3 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors min-w-0">
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-800 truncate text-xs">Lenovo Legion Pro 5</div>
                          <div className="text-[10px] text-slate-400 font-mono truncate">SN: LEG-771-K3</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800 border border-blue-200">
                          Klaim Diajukan
                        </span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="p-2.5 sm:p-3 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors min-w-0">
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-800 truncate text-xs">MSI Stealth 14 Studio</div>
                          <div className="text-[10px] text-slate-400 font-mono truncate">SN: MSI-481-9X</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-pink-100 text-pink-800 border border-pink-200">
                          Sisa 12 Hari
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer bar of Mockup */}
                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    Kepatuhan garansi toko: 99.4%
                  </span>
                  <button
                    onClick={onOpenDemo}
                    className="font-medium text-blue-600 hover:text-blue-700 flex items-center gap-0.5"
                  >
                    Buka Simulator <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
