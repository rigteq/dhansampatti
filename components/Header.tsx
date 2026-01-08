import Link from 'next/link';
import { Menu, ChevronDown, User, Phone, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans transition-all duration-300">
      {/* Top Bar - Trust Signals */}
      <div className="bg-brand-purple text-white py-1.5 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Shield size={12} className="text-brand-gold" /> ISO 9001:2015 Certified</span>
            <span className="flex items-center gap-1 opacity-80">|</span>
            <span className="flex items-center gap-1">Trusted by 2 Lakh+ Families</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:1800-123-9999" className="hover:text-brand-gold transition-colors flex items-center gap-1"><Phone size={12} /> 24x7 Support: 1800-123-9999</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-brand-purple tracking-tight leading-none uppercase">Dhansampatti</span>
            <span className="text-[10px] md:text-xs text-brand-orange font-bold tracking-[0.2em] uppercase">Finance</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-bold text-gray-700">
          <div className="group relative cursor-pointer hover:text-brand-purple flex items-center gap-1 transition-colors py-2">
            Loans <ChevronDown size={14} className="stroke-[3px] group-hover:-rotate-180 transition-transform duration-300" />

            {/* Mega Menu Dropdown (Simplified structure) */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
              <Link href="#" className="block px-4 py-3 hover:bg-brand-grey hover:text-brand-purple">Home Loans</Link>
              <Link href="#" className="block px-4 py-3 hover:bg-brand-grey hover:text-brand-purple">Personal Loans</Link>
              <Link href="#" className="block px-4 py-3 hover:bg-brand-grey hover:text-brand-purple">Business Loans</Link>
            </div>
          </div>

          <div className="group relative cursor-pointer hover:text-brand-purple flex items-center gap-1 transition-colors">
            Credit Cards
          </div>

          <div className="group relative cursor-pointer hover:text-brand-purple flex items-center gap-1 transition-colors">
            Insurance
          </div>

          <div className="group relative cursor-pointer hover:text-brand-purple flex items-center gap-1 transition-colors">
            Calculators <ChevronDown size={14} className="stroke-[3px]" />
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <button className="xl:hidden p-2 text-brand-purple hover:bg-brand-grey rounded-lg transition-colors">
            <Menu className="w-7 h-7" />
          </button>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-brand-purple rounded-full font-bold hover:border-brand-purple hover:bg-brand-grey transition-all shadow-sm">
              Login
            </Link>
            <Link href="#" className="flex items-center gap-2 px-6 py-2.5 bg-brand-purple text-white rounded-full font-bold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <User size={18} />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
