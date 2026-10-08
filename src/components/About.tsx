import React from 'react';
import {
  GraduationCap,
  Code2,
  Briefcase,
  Lightbulb,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="w-full py-16 md:py-24 bg-white border-y border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Latar Belakang Proyek
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tentang WarrantyIDEA
            </h2>
          </div>

          {/* Main Statement Box */}
          <div className="bg-surface-base rounded-2xl border border-slate-200 p-6 md:p-10 shadow-subtle space-y-6">
            
            {/* 3 Badges Requested by User */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                Student Project
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                Information Technology
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
                <Briefcase className="w-3.5 h-3.5 text-pink-600" />
                Digital Business
              </span>
            </div>

            {/* Core Message */}
            <blockquote className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed border-l-4 border-blue-600 pl-4 py-1 italic">
              &ldquo;WarrantyIDEA dikembangkan sebagai solusi digital untuk membantu toko komputer dan elektronik mengelola layanan setelah pembelian dengan lebih teratur.&rdquo;
            </blockquote>

            {/* Context & Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-sm text-slate-600 leading-relaxed">
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  Observasi Lapangan
                </h4>
                <p>
                  Ide ini berawal dari permasalahan riil saat mengunjungi pusat pertokoan komputer lokal. Banyak pemilik toko servis dan rakit PC masih bergantung pada nota cetak karbon atau stiker kecil yang mudah pudar tintanya, berujung pada perdebatan garansi dengan pembeli.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-600" />
                  Pendekatan Teknologi
                </h4>
                <p>
                  Dibangun menggunakan arsitektur web modern yang ringan, aman, dan berorientasi pengguna. Fokus utama kami bukan membuat sistem yang rumit, melainkan menghadirkan alat kerja yang langsung bisa dipakai oleh staf toko tanpa pelatihan berbelit.
                </p>
              </div>
            </div>

            {/* Honesty & Academic Note */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Siap diuji coba dan dipresentasikan untuk validasi pasar ritel lokal.</span>
              </div>
              <span className="text-slate-400 font-mono text-[11px]">
                Inisiasi Mahasiswa IT &bull; Angkatan 2026
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
