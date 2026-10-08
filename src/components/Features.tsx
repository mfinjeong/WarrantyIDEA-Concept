import React from 'react';
import {
  QrCode,
  ClipboardCheck,
  History,
  FileSpreadsheet,
  ShieldAlert,
  UserCheck,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Features: React.FC = () => {
  const featureList = [
    {
      code: '01',
      title: 'Digital Warranty',
      desc: 'Pelanggan dapat mengecek masa aktif garansi langsung lewat scan QR Code.',
      icon: QrCode,
    },
    {
      code: '02',
      title: 'Warranty Claim',
      desc: 'Seller dapat memverifikasi dan memproses pengajuan klaim secara cepat.',
      icon: ClipboardCheck,
    },
    {
      code: '03',
      title: 'Service History',
      desc: 'Catatan servis teknisi dan pergantian suku cadang tersimpan rapi.',
      icon: History,
    },
    {
      code: '04',
      title: 'Product Record',
      desc: 'Nomor seri, tipe unit, dan tanggal pembelian tercatat otomatis.',
      icon: FileSpreadsheet,
    },
    {
      code: '05',
      title: 'Warranty Protection',
      desc: 'Cegah klaim palsu dengan verifikasi data unit yang akurat.',
      icon: ShieldAlert,
    },
    {
      code: '06',
      title: 'Customer Service',
      desc: 'Bangun kepercayaan pelanggan lewat layanan purna jual yang transparan.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="fitur" className="w-full py-16 md:py-24 bg-[oklch(0.99_0.012_145)] bg-subtle-dots border-b border-slate-200/70 scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-3 border border-emerald-200/80">
              Fitur
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Fitur Utama WarrantyIDEA
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Fitur praktis untuk mempermudah pengelolaan garansi dan layanan purna jual.
            </p>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-300 hover:-translate-y-0.5 hover:shadow-card transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {item.code}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-[11px] text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>Fitur Toko Komputer</span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
