import React from 'react';
import {
  QrCode,
  ClipboardCheck,
  History,
  FileSpreadsheet,
  ShieldAlert,
  UserCheck,
} from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      code: '01',
      title: 'Digital Warranty',
      desc: 'Pelanggan dapat melihat informasi garansi melalui QR Code.',
      detail: 'Cukup scan barcode stiker di bagian bawah laptop atau kotak unit tanpa aplikasi khusus.',
      icon: QrCode,
    },
    {
      code: '02',
      title: 'Warranty Claim',
      desc: 'Seller dapat menerima dan memeriksa pengajuan klaim dengan lebih mudah.',
      detail: 'Verifikasi kelayakan klaim garansi toko instan hanya dengan mencocokkan nomor seri.',
      icon: ClipboardCheck,
    },
    {
      code: '03',
      title: 'Service History',
      desc: 'Riwayat servis produk tersimpan dalam satu tempat.',
      detail: 'Catatan pergantian thermal paste, upgrade RAM, atau pergantian layar tersimpan urut.',
      icon: History,
    },
    {
      code: '04',
      title: 'Product Record',
      desc: 'Serial number, tanggal pembelian, dan kondisi produk dapat dicatat.',
      detail: 'Dokumentasi kondisi fisik awal dan kelengkapan aksesoris saat barang diserahkan ke pembeli.',
      icon: FileSpreadsheet,
    },
    {
      code: '05',
      title: 'Warranty Protection',
      desc: 'Seller dapat melihat informasi dan riwayat produk sebelum memproses klaim.',
      detail: 'Mencegah penipuan klaim seperti segel toko yang sudah rusak atau unit yang dibeli dari toko lain.',
      icon: ShieldAlert,
    },
    {
      code: '06',
      title: 'Customer Follow-up',
      desc: 'Seller dapat menjaga hubungan dengan pelanggan setelah transaksi.',
      detail: 'Kirim pengingat servis berkala dan penawaran upgrade komponen saat garansi mendekati habis.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="fitur" className="w-full py-16 md:py-24 bg-surface-base">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            Fungsionalitas Lengkap
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fitur Utama WarrantyIDEA
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Enam modul fungsional yang dirancang khusus untuk mempermudah alur kerja garansi toko komputer dari hari pertama hingga purna jual.
          </p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-subtle group"
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

                  <p className="text-sm font-medium text-slate-700 leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-[11px] text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Modul Aktif Ritel</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
