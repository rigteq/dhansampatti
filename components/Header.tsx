import Link from 'next/link';
import { Menu, Search, User, Smartphone, ChevronDown, Phone, ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Top Utility Bar */}
      <div className="hidden md:flex justify-end items-center bg-gray-50 border-b border-gray-100 px-4 md:px-16 py-1 text-xs text-gray-600 gap-6">
        <Link href="#" className="flex items-center gap-1 hover:text-pb-blue">
          <Phone className="w-3 h-3" />
          Talk to Expert
        </Link>
        <div className="h-3 w-px bg-gray-300"></div>
        <Link href="#" className="flex items-center gap-1 hover:text-pb-blue">
          <Smartphone className="w-3 h-3" />
          Get The App
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-16 py-3 bg-white">
        {/* Logo and Nav Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
             {/* Simple Logo Placeholder */}
             <div className="text-3xl font-bold text-pb-blue tracking-tight">
               Dhansampatti<span className="text-pb-orange"> Finance</span>
             </div>
             <p className="text-[10px] text-gray-500 mt-2 hidden lg:block">India's No. 1 Personal and Home Loans Platform</p>
          </Link>
          
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-700">
            <div className="group relative cursor-pointer hover:text-pb-blue flex items-center gap-1">
              Cards <ChevronDown size={14} />
            </div>
            <div className="group relative cursor-pointer hover:text-pb-blue flex items-center gap-1">
              Loans <ChevronDown size={14} />
            </div>
            <div className="group relative cursor-pointer hover:text-pb-blue flex items-center gap-1">
              Investment <ChevronDown size={14} />
            </div>
             <div className="group relative cursor-pointer hover:text-pb-blue flex items-center gap-1">
              Credit Score
            </div>
            <div className="group relative cursor-pointer hover:text-pb-blue flex items-center gap-1">
              Resources <ChevronDown size={14} />
            </div>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
           {/* Mobile Menu Toggle */}
           <button className="xl:hidden p-2 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>

          <Link href="/login" className="hidden sm:flex items-center gap-2 px-6 py-2 border border-blue-500 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
