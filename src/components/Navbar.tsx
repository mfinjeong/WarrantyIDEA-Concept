import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('beranda');

  const navLinks = [
    { label: 'Beranda', href: '#beranda', id: 'beranda' },
    { label: 'Masalah', href: '#masalah', id: 'masalah' },
    { label: 'Solusi', href: '#solusi', id: 'solusi' },
    { label: 'Fitur', href: '#fitur', id: 'fitur' },
    { label: 'Alur', href: '#alur', id: 'alur' },
    { label: 'Tentang', href: '#tentang', id: 'tentang' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sectionIds = ['beranda', 'masalah', 'solusi', 'fitur', 'alur', 'tentang'];
    const visibleMap = new Map<string, number>();

    const updateActiveSection = () => {
      // Boundary check: top of page
      if (window.scrollY < 80) {
        setActiveSection('beranda');
        return;
      }
      // Boundary check: bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('tentang');
        return;
      }

      // Pick the currently intersecting section closest to navbar focus line
      let closestSection = '';
      let minDistance = Infinity;

      visibleMap.forEach((_, id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - 80);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    // IntersectionObserver scroll spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleMap.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleMap.delete(entry.target.id);
          }
        });
        updateActiveSection();
      },
      {
        root: null,
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection(); // Run initially

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('beranda');
            }}
            className="flex items-center gap-2.5 text-slate-900 group select-none"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-subtle group-hover:bg-blue-700 transition-colors">
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 flex items-center">
                Warranty<span className="text-blue-600">IDEA</span>
              </span>
              <span className="text-[10px] -mt-1 font-medium text-slate-400 tracking-wider uppercase">
                After-Sales System
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-1.5 text-sm transition-colors rounded-md ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-blue-600 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-subtle transition-all duration-150 active:scale-95"
            >
              <span>Demo</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1.5" aria-label="Mobile Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full text-left px-3.5 py-2.5 text-sm rounded-lg transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-blue-600 bg-blue-50/70 font-semibold border-l-2 border-blue-600'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50 font-medium'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                )}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-subtle transition-colors"
            >
              <span>Buka Demo Interaktif</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
