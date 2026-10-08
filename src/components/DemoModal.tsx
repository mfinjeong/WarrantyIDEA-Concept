import { useState, useEffect } from 'react';
import {
  X,
  Store,
  Smartphone,
  ShieldCheck,
  Search,
  Wrench,
  QrCode,
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'seller' | 'customer'>('customer');
  const [querySerial, setQuerySerial] = useState('TUF-82A91');
  const [showHistory, setShowHistory] = useState(true);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-none animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-elevated">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Simulator Interaktif WarrantyIDEA
              </h3>
              <p className="text-[11px] text-slate-500">
                Pilih peran untuk menguji pengalaman pengguna produk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Toggle Tabs */}
        <div className="px-5 pt-4">
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('customer')}
              className={`py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-all ${
                activeTab === 'customer'
                  ? 'bg-white text-blue-700 shadow-subtle'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>1. Tampilan Pelanggan (Scan QR)</span>
            </button>
            <button
              onClick={() => setActiveTab('seller')}
              className={`py-2 px-3 rounded-md flex items-center justify-center gap-2 transition-all ${
                activeTab === 'seller'
                  ? 'bg-white text-blue-700 shadow-subtle'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>2. Tampilan Toko (Dashboard Kasir)</span>
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-5">
          {activeTab === 'customer' ? (
            /* CUSTOMER SIMULATION */
            <div className="space-y-4">
              <div className="text-xs text-slate-600">
                Simulasi halaman yang langsung terbuka di smartphone customer ketika memindai kode QR pada laptop atau kartu garansi:
              </div>

              {/* Sample SN Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Uji Coba Serial:</span>
                <button
                  onClick={() => setQuerySerial('TUF-82A91')}
                  className={`px-2.5 py-1 rounded border text-[11px] font-mono ${
                    querySerial === 'TUF-82A91'
                      ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  TUF-82A91 (Aktif)
                </button>
                <button
                  onClick={() => setQuerySerial('LOQ-19X22')}
                  className={`px-2.5 py-1 rounded border text-[11px] font-mono ${
                    querySerial === 'LOQ-19X22'
                      ? 'bg-pink-50 border-pink-300 text-pink-700 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  LOQ-19X22 (Expiring)
                </button>
              </div>

              {/* Customer Mobile Mock Card */}
              <div className="border border-slate-200 rounded-xl p-5 bg-surface-base space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">WarrantyIDEA Portal</div>
                      <div className="text-[10px] text-slate-400">Verifikasi Resmi Toko Mitra</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                    VALID CERTIFIED
                  </span>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Model Terverifikasi</div>
                  <div className="text-base font-bold text-slate-900">
                    {querySerial === 'TUF-82A91' ? 'ASUS TUF Gaming F15' : 'Lenovo LOQ 15IRH8'}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    SN: {querySerial}
                  </div>
                </div>

                <div className={`p-4 rounded-lg border text-center ${
                  querySerial === 'TUF-82A91'
                    ? 'bg-emerald-50 border-emerald-200'
                    : 'bg-pink-50 border-pink-200'
                }`}>
                  <div className={`text-[11px] font-semibold uppercase ${
                    querySerial === 'TUF-82A91' ? 'text-emerald-800' : 'text-pink-800'
                  }`}>
                    Status Masa Garansi
                  </div>
                  <div className={`text-xl font-extrabold mt-1 ${
                    querySerial === 'TUF-82A91' ? 'text-emerald-950' : 'text-pink-950'
                  }`}>
                    {querySerial === 'TUF-82A91' ? 'GARANSI AKTIF' : 'SEGERA BERAKHIR'}
                  </div>
                  <div className={`text-xs font-medium mt-1 ${
                    querySerial === 'TUF-82A91' ? 'text-emerald-800' : 'text-pink-800'
                  }`}>
                    {querySerial === 'TUF-82A91' ? 'Sisa 287 Hari Perlindungan Toko' : 'Sisa 12 Hari Perlindungan Toko'}
                  </div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Tanggal Pembelian:</span>
                    <span className="font-semibold text-slate-800">
                      {querySerial === 'TUF-82A91' ? '12 Agustus 2026' : '20 Agustus 2025'}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Durasi Garansi:</span>
                    <span className="font-semibold text-slate-800">12 Bulan Perlindungan</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Toko Retail:</span>
                    <span className="font-semibold text-blue-600">Sentra Komputer Pratama</span>
                  </div>
                </div>

                {/* Service History Toggle */}
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>{showHistory ? 'Sembunyikan Catatan Servis' : 'Lihat Catatan Servis'}</span>
                </button>

                {showHistory && (
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-2">
                    <div className="font-bold text-slate-800 flex items-center justify-between text-[11px]">
                      <span>Riwayat Servis Tercatat:</span>
                      <span className="text-emerald-700 font-semibold">Tervalidasi Teknisi</span>
                    </div>
                    <div className="p-2.5 bg-white rounded border border-slate-200 text-[11px] space-y-1">
                      <div className="text-slate-400 text-[10px]">10 Sep 2026 &bull; Cabang Mangga Dua</div>
                      <div className="font-semibold text-slate-800">Maintenance Berkala &amp; Upgrade Ram 16GB</div>
                      <div className="text-slate-500">Teknisi: Riko &bull; Status: Selesai &bull; Bebas Biaya Jasa Garansi</div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          ) : (
            /* SELLER SIMULATION */
            <div className="space-y-4 text-xs">
              <div className="text-slate-600">
                Simulasi antarmuka kasir toko untuk mengecek dan mendaftarkan produk baru:
              </div>

              <div className="bg-surface-base p-4 rounded-xl border border-slate-200 space-y-3">
                <div className="font-bold text-slate-900 text-sm">
                  Cari / Verifikasi Serial Number
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={querySerial}
                      onChange={(e) => setQuerySerial(e.target.value)}
                      placeholder="Masukkan Serial Number..."
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                    Cek SN
                  </button>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-2 text-slate-700">
                  <div className="flex items-center justify-between font-bold text-slate-900">
                    <span>Hasil Pencarian: Unit Ditemukan</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] border border-emerald-200">
                      ORIGINAL PURCHASE
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-400">Model:</span> ASUS TUF Gaming F15
                    </div>
                    <div>
                      <span className="text-slate-400">Pembeli:</span> Budi Santoso
                    </div>
                    <div>
                      <span className="text-slate-400">Tanggal Jual:</span> 14 Jan 2026
                    </div>
                    <div>
                      <span className="text-slate-400">Garansi Toko:</span> 12 Bulan (Aktif)
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => alert('Fitur cetak QR Code mengirim perintah ke printer thermal kasir.')}
                    className="flex-1 py-2 px-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <QrCode className="w-3.5 h-3.5 text-blue-600" />
                    <span>Cetak Ulang Stiker QR</span>
                  </button>
                  <button
                    onClick={() => alert('Formulir penerimaan klaim servis terbuka.')}
                    className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Terima Klaim Servis</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>WarrantyIDEA v1.0.0 Prototipe Produk IT</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors"
          >
            Tutup Demo
          </button>
        </div>

      </div>
    </div>
  );
};
