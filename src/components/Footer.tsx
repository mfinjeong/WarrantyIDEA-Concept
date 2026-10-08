import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 pt-12 pb-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Warranty<span className="text-blue-600">IDEA</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Digital warranty &amp; after-sales management.
            </p>
            <div className="text-xs text-slate-500 pt-1">
              Platform manajemen garansi dan layanan purna jual untuk toko komputer, laptop, dan komponen elektronik.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#preview" className="hover:text-blue-600 transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-blue-600 transition-colors">
                  QR Verification
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-blue-600 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#fitur" className="hover:text-blue-600 transition-colors">
                  Digital Warranty
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-blue-600 transition-colors">
                  Warranty Claim
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-blue-600 transition-colors">
                  Service Records
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              About &amp; Contact
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#tentang" className="hover:text-blue-600 transition-colors">
                  Tentang Proyek IT
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-slate-500">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>halo@warrantyidea.id</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            Copyright &copy; 2026 WarrantyIDEA. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Privasi Data Pelanggan</span>
            <span>&bull;</span>
            <span>Syarat Layanan Toko</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
