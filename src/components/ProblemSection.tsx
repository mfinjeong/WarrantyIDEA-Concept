import React from 'react';
import { FileQuestion, Clock, Wrench } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: FileQuestion,
      title: 'Nota kertas mudah hilang atau pudar',
      desc: 'Pelanggan kesulitan membuktikan masa garansi saat nota fisik hilang atau tintanya pudar.',
      tag: 'Nota Fisik',
    },
    {
      icon: Clock,
      title: 'Pengecekan garansi toko memakan waktu',
      desc: 'Seller harus membongkar arsip manual untuk mencocokkan nomor seri saat ada komplain.',
      tag: 'Proses Lambat',
    },
    {
      icon: Wrench,
      title: 'Riwayat perbaikan teknisi tercecer',
      desc: 'Catatan servis dan pergantian suku cadang tidak tersimpan dalam satu data terpusat.',
      tag: 'Data Tercecer',
    },
  ];

  return (
    <section id="masalah" className="w-full py-16 md:py-24 bg-[oklch(0.985_0.012_250)] bg-subtle-diagonal border-b border-slate-200/80 scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200/80">
              Masalah
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kendala Garansi yang Sering Terjadi
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Pengelolaan manual dengan nota kertas sering merepotkan toko dan membingungkan pelanggan.
            </p>
          </div>

          {/* 3 Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:-translate-y-0.5 hover:shadow-card transition-all duration-200"
                >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Masalah #{idx + 1}</span>
                  <span className="text-slate-500 font-medium">Perlu Solusi</span>
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
