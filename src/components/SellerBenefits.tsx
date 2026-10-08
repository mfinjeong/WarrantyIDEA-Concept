import React from 'react';
import {
  Check,
  ShieldCheck,
  Store,
  AlertOctagon,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SellerBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Data produk lebih teratur',
      desc: 'Setiap unit yang keluar dari kasir tercatat rapi berdasarkan Serial Number dan tanggal rilisnya.',
    },
    {
      title: 'Riwayat klaim lebih mudah diperiksa',
      desc: 'Toko bisa langsung melihat apakah unit pernah diservis sebelumnya atau masih dalam periode garansi resmi.',
    },
    {
      title: 'Kondisi barang dapat dicatat',
      desc: 'Catat goresan fisik awal atau kelengkapan bawaan saat pembelian untuk menghindari sengketa saat retur.',
    },
    {
      title: 'Riwayat servis tersimpan',
      desc: 'Semua tindakan perbaikan dan penggantian suku cadang terdokumentasi rapi tanpa perlu cari-cari nota manual.',
    },
    {
      title: 'Mengurangi kesalahan pencatatan',
      desc: 'Hindari salah tulis tanggal, salah nomor seri, atau manipulasi nota palsu dari pihak yang tidak bertanggung jawab.',
    },
    {
      title: 'Membantu menjaga pelanggan setelah pembelian',
      desc: 'Pelayanan purna jual yang transparan membangun kepercayaan tinggi, membuat pelanggan setia berbelanja kembali.',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-slate-200/70">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
              Kemitraan Toko Ritel
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dirancang untuk Membantu Seller
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              WarrantyIDEA tidak dibuat untuk membebani atau merugikan pemilik toko. Sistem ini hadir sebagai pelindung operasional agar toko terhindar dari sengketa klaim palsu dan biaya administrasi yang membengkak.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3.5 hover:border-blue-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 shadow-subtle"
              >
              <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Comparison Card: Toko Tradisional vs Menggunakan WarrantyIDEA */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Store className="w-4 h-4 text-blue-600" />
              Perbandingan Operasional Toko Fisik
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Efisiensi Manajemen Purna Jual
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Sisi Tanpa Sistem */}
            <div className="p-6 space-y-3 bg-white">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mb-4">
                <AlertOctagon className="w-4 h-4 text-slate-400" />
                Cara Manual / Nota Kertas
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">&bull;</span>
                  <span>Nota hilang berarti sengketa antara kasir dan pembeli.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">&bull;</span>
                  <span>Rentan klaim barang dari toko lain yang ditempel stiker serupa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">&bull;</span>
                  <span>Teknisi tidak tahu riwayat kerusakan unit terdahulu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">&bull;</span>
                  <span>Waktu tunggu verifikasi kasir lama saat pelanggan komplain.</span>
                </li>
              </ul>
            </div>

            {/* Sisi Menggunakan WarrantyIDEA */}
            <div className="p-6 space-y-3 bg-blue-50/20">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5 mb-4">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Dengan WarrantyIDEA
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Serial number terkunci di cloud, validasi instan dalam hitungan detik.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Perlindungan seller terhadap klaim palsu berkat verifikasi data awal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Semua catatan pergantian part tersimpan kronologis dan transparan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Citra toko meningkat profesional di mata pelanggan ritel modern.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
