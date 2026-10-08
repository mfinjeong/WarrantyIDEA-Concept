import { useState, useMemo } from 'react';
import {
  Package,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  Search,
  Eye,
  QrCode,
  CheckCircle2,
  Clock,
  Laptop,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  serialNumber: string;
  warrantyPeriod: string;
  purchaseDate: string;
  status: 'Active' | 'Expiring' | 'Pending Claim' | 'In Service';
  customer: string;
}

const INITIAL_DATA: ProductItem[] = [
  {
    id: '1',
    name: 'ASUS TUF Gaming A15',
    category: 'Laptop Gaming',
    serialNumber: 'TUF-82A91',
    warrantyPeriod: '12 Months',
    purchaseDate: '14 Jan 2026',
    status: 'Active',
    customer: 'Budi Santoso',
  },
  {
    id: '2',
    name: 'Lenovo LOQ 15IRH8',
    category: 'Laptop Gaming',
    serialNumber: 'LOQ-19X22',
    warrantyPeriod: '6 Months',
    purchaseDate: '20 Agu 2025',
    status: 'Expiring',
    customer: 'Rian Pratama',
  },
  {
    id: '3',
    name: 'Acer Nitro V 15',
    category: 'Laptop Gaming',
    serialNumber: 'NIT-44K09',
    warrantyPeriod: '24 Months',
    purchaseDate: '02 Feb 2026',
    status: 'Active',
    customer: 'Dewi Lestari',
  },
  {
    id: '4',
    name: 'MSI Thin GF63',
    category: 'Laptop Tipis',
    serialNumber: 'MSI-77B12',
    warrantyPeriod: '12 Months',
    purchaseDate: '11 Nov 2025',
    status: 'In Service',
    customer: 'Ahmad Fauzi',
  },
  {
    id: '5',
    name: 'Custom PC Rig Ryzen 5 7600',
    category: 'PC Rakitan Toko',
    serialNumber: 'RIG-9021',
    warrantyPeriod: '18 Months',
    purchaseDate: '19 Des 2025',
    status: 'Active',
    customer: 'Kevin Alexander',
  },
  {
    id: '6',
    name: 'Monitor LG UltraGear 24GN',
    category: 'Monitor Gaming',
    serialNumber: 'LG-650-M1',
    warrantyPeriod: '36 Months',
    purchaseDate: '05 Okt 2025',
    status: 'Pending Claim',
    customer: 'Siti Rahma',
  },
];

export const DashboardPreview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Active' | 'Expiring' | 'Claims'>('All');
  const [selectedRow, setSelectedRow] = useState<ProductItem | null>(null);

  const filteredData = useMemo(() => {
    return INITIAL_DATA.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.customer.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchSearch) return false;

      if (activeTab === 'Active') return item.status === 'Active';
      if (activeTab === 'Expiring') return item.status === 'Expiring';
      if (activeTab === 'Claims') return item.status === 'Pending Claim' || item.status === 'In Service';
      return true;
    });
  }, [searchTerm, activeTab]);

  return (
    <section id="preview" className="w-full py-16 md:py-24 bg-white border-b border-slate-200/70 scroll-mt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <ScrollReveal>
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
              Dashboard Toko
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pratinjau Sistem
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Pantau status garansi aktif, pengajuan klaim, dan riwayat servis unit secara terpusat.
            </p>
          </div>

        {/* Big Dashboard Window Mockup */}
        <div className="w-full max-w-full min-w-0 bg-white rounded-2xl border border-slate-200 shadow-elevated overflow-hidden">
          
          {/* Top App Bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
              </div>
              <div className="h-4 w-px bg-slate-200 mx-1"></div>
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="font-bold text-sm text-slate-900 truncate">WarrantyIDEA</span>
                <span className="text-xs text-slate-400">/</span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0">
                  Overview
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 shrink-0">
              <span className="hidden sm:inline text-slate-400">Toko:</span>
              <span className="font-medium bg-white px-2 sm:px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 shadow-subtle truncate max-w-[200px] sm:max-w-none">
                Sentra Komputer &amp; Elektronik
              </span>
            </div>
          </div>

          <div className="w-full max-w-full p-3 sm:p-6 md:p-8 space-y-6 min-w-0">
            
            {/* 4 Stat Overview Cards: grid-cols-2 on mobile, sm:grid-cols-2, lg:grid-cols-4 on desktop */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 min-w-0">
              
              {/* Card 1: Total Products */}
              <div className="w-full min-w-0 bg-white rounded-xl border border-slate-200 p-3.5 sm:p-5 shadow-subtle flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider">Total Products</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Package className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  1,284
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Unit terdaftar dalam database
                </div>
              </div>

              {/* Card 2: Active Warranty */}
              <div className="w-full min-w-0 bg-emerald-50/30 rounded-xl border border-emerald-200 p-3.5 sm:p-5 shadow-subtle flex flex-col justify-between">
                <div className="flex items-center justify-between text-emerald-800 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider truncate">Active Warranty</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">
                  967
                </div>
                <div className="text-[11px] text-emerald-700 mt-1 truncate">
                  Garansi berjalan aman
                </div>
              </div>

              {/* Card 3: Pending Claims */}
              <div className="w-full min-w-0 bg-blue-50/30 rounded-xl border border-blue-200 p-3.5 sm:p-5 shadow-subtle flex flex-col justify-between">
                <div className="flex items-center justify-between text-blue-800 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider truncate">Pending Claims</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
                  24
                </div>
                <div className="text-[11px] text-blue-700 mt-1 truncate">
                  Menunggu verifikasi
                </div>
              </div>

              {/* Card 4: Service Records */}
              <div className="w-full min-w-0 bg-pink-50/30 rounded-xl border border-pink-200 p-3.5 sm:p-5 shadow-subtle flex flex-col justify-between">
                <div className="flex items-center justify-between text-pink-800 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider truncate">Service Records</span>
                  <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-pink-950 tracking-tight">
                  183
                </div>
                <div className="text-[11px] text-pink-700 mt-1 truncate">
                  Tindakan servis
                </div>
              </div>

            </div>

            {/* Filter and Search Bar */}
            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 min-w-0">
              
              {/* Status Tabs */}
              <div className="w-full sm:w-auto flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs overflow-x-auto min-w-0">
                <button
                  onClick={() => setActiveTab('All')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                    activeTab === 'All'
                      ? 'bg-white text-slate-900 shadow-subtle'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua (6)
                </button>
                <button
                  onClick={() => setActiveTab('Active')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                    activeTab === 'Active'
                      ? 'bg-white text-emerald-700 shadow-subtle'
                      : 'text-slate-600 hover:text-emerald-700'
                  }`}
                >
                  Active (3)
                </button>
                <button
                  onClick={() => setActiveTab('Expiring')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                    activeTab === 'Expiring'
                      ? 'bg-white text-pink-700 shadow-subtle'
                      : 'text-slate-600 hover:text-pink-700'
                  }`}
                >
                  Expiring (1)
                </button>
                <button
                  onClick={() => setActiveTab('Claims')}
                  className={`px-3 py-1.5 rounded-md font-semibold transition-colors shrink-0 ${
                    activeTab === 'Claims'
                      ? 'bg-white text-blue-700 shadow-subtle'
                      : 'text-slate-600 hover:text-blue-700'
                  }`}
                >
                  Klaim &amp; Servis (2)
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari produk / SN / customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 focus:bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

            </div>

            {/* Responsive Table Container */}
            <div className="w-full max-w-full overflow-x-auto border border-slate-200 rounded-xl shadow-subtle min-w-0">
              <table className="w-full min-w-[540px] sm:min-w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Serial Number</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Warranty</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredData.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        Tidak ada data yang sesuai dengan pencarian.
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                        onClick={() => setSelectedRow(item)}
                      >
                        {/* Product */}
                        <td className="py-3.5 px-4 font-medium text-slate-900">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                              <Laptop className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{item.name}</div>
                              <div className="text-[10px] text-slate-400">{item.category}</div>
                            </div>
                          </div>
                        </td>

                        {/* Serial Number */}
                        <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                          <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200 text-[11px]">
                            {item.serialNumber}
                          </span>
                        </td>

                        {/* Customer */}
                        <td className="py-3.5 px-4 text-slate-600">
                          <div>{item.customer}</div>
                          <div className="text-[10px] text-slate-400">Beli: {item.purchaseDate}</div>
                        </td>

                        {/* Warranty */}
                        <td className="py-3.5 px-4 font-medium text-slate-800">
                          {item.warrantyPeriod}
                        </td>

                        {/* Status */}
                        <td className="py-3.5 px-4">
                          {item.status === 'Active' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              Active
                            </span>
                          )}
                          {item.status === 'Expiring' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-pink-100 text-pink-800 border border-pink-200">
                              <Clock className="w-3 h-3 text-pink-600" />
                              Expiring
                            </span>
                          )}
                          {item.status === 'Pending Claim' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                              <AlertTriangle className="w-3 h-3 text-blue-600" />
                              Pending Claim
                            </span>
                          )}
                          {item.status === 'In Service' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-300">
                              <Wrench className="w-3 h-3 text-slate-600" />
                              In Service
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRow(item);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium text-[11px] transition-colors"
                          >
                            <Eye className="w-3 h-3 text-slate-500" />
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Micro Details Modal Preview when row is clicked */}
            {selectedRow && (
              <div className="bg-slate-50 rounded-xl border border-blue-200 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <QrCode className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Detail Unit Terpilih: {selectedRow.name} ({selectedRow.serialNumber})
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Customer: {selectedRow.customer} &bull; Garansi: {selectedRow.warrantyPeriod} &bull; Status: {selectedRow.status}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert(`Label QR Code untuk serial ${selectedRow.serialNumber} siap dicetak.`)}
                    className="px-3 py-1.5 text-xs font-semibold text-blue-700 bg-white border border-blue-200 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    Cetak Label QR
                  </button>
                  <button
                    onClick={() => setSelectedRow(null)}
                    className="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-800 rounded-md"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}

            {/* Note text below preview */}
            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 pt-2 gap-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Menampilkan simulasi tabel garansi ritel (Data dummy prototipe bisnis IT)
              </span>
              <span className="font-mono text-slate-400">
                Pencarian real-time &bull; Filter status terintegrasi
              </span>
            </div>

          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
