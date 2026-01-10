"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, Phone, Shield, ArrowRight, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm font-sans transition-all duration-300">
      {/* Top Bar - Trust Signals */}
      <div className="bg-brand-purple text-white py-1.5 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Shield size={12} className="text-brand-gold" /> ISO 9001:2015 Certified</span>
            <span className="flex items-center gap-1 opacity-80">|</span>
            <span className="flex items-center gap-1">Trusted by 2 Lakh+ Families</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:79822 88552" className="hover:text-brand-gold transition-colors flex items-center gap-1"><Phone size={12} /> 24x7 Support: 79822 88552</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-brand-gold to-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-3xl font-extrabold text-brand-purple tracking-tight leading-none uppercase">Dhansampatti</span>
            <span className="text-[8px] md:text-xs text-brand-orange font-bold tracking-[0.2em] uppercase">Finance</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 text-sm font-bold text-gray-700">
          <div className="group relative cursor-pointer hover:text-brand-purple flex items-center gap-1 transition-colors py-2">
            Loans <ChevronDown size={14} className="stroke-[3px] group-hover:-rotate-180 transition-transform duration-300" />
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden text-gray-600">
              <Link href="#" className="block px-4 py-3 hover:bg-brand-grey hover:text-brand-purple font-medium">Home Loans</Link>
              <Link href="#" className="block px-4 py-3 hover:bg-brand-grey hover:text-brand-purple font-medium">Personal Loans</Link>
              <Link href="#" className="block px-4 py-3 hover:bg-brand-grey hover:text-brand-purple font-medium">Business Loans</Link>
            </div>
          </div>
          <Link href="#" className="hover:text-brand-purple transition-colors">Credit Cards</Link>
          <Link href="#" className="hover:text-brand-purple transition-colors">Insurance</Link>
          <Link href="#" className="hover:text-brand-purple transition-colors flex items-center gap-1">Calculators <ChevronDown size={14} /></Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-brand-purple text-white rounded-full font-bold text-sm md:text-base hover:bg-gray-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group shrink-0"
          >
            Contact Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-brand-purple hover:bg-brand-grey rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 space-y-4 font-bold text-gray-700">
            <Link href="#" className="py-2 border-b border-gray-50 flex justify-between items-center" onClick={() => setIsMenuOpen(false)}>
              Loans <ChevronDown size={18} />
            </Link>
            <Link href="#" className="py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Credit Cards</Link>
            <Link href="#" className="py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Insurance</Link>
            <Link href="#" className="py-2 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Calculators</Link>
            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-brand-purple text-white rounded-xl shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Now <ArrowRight size={18} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
