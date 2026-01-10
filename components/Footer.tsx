import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#111] text-gray-400 font-sans text-sm">
            <div className="container mx-auto px-4 md:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2 pr-8">
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="flex flex-col">
                                <span className="text-2xl font-extrabold text-white tracking-tight leading-none uppercase">Dhansampatti</span>
                                <span className="text-[10px] text-brand-orange font-bold tracking-[0.2em] uppercase">Finance</span>
                            </div>
                        </Link>
                        <p className="mb-8 max-w-sm leading-relaxed text-gray-500">
                            Your trusted partner in wealth creation. We provide premium financial solutions, from exclusive home loans to investment planning, tailored for the ambitious Indian family.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-base">Solutions</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Home Loans</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Property Loans</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Business Finance</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Wealth Management</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Insurance</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-base">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">About Dhansampatti</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Leadership Team</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Investor Relations</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Press & Media</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-base">Get in Touch</h4>
                        <ul className="space-y-5">
                            <li className="flex gap-3 items-start">
                                <Mail className="shrink-0 w-5 h-5 text-brand-orange mt-0.5" />
                                <div>
                                    <span className="block text-xs uppercase font-bold text-gray-600 mb-1">Email Support</span>
                                    <a href="mailto:care@dhansampatti.com" className="hover:text-white transition-colors font-medium">care@dhansampatti.com</a>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Phone className="shrink-0 w-5 h-5 text-brand-orange mt-0.5" />
                                <div>
                                    <span className="block text-xs uppercase font-bold text-gray-600 mb-1">Call Us</span>
                                    <a href="tel:18001239999" className="hover:text-white transition-colors font-medium">79822 88552</a>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <MapPin className="shrink-0 w-5 h-5 text-brand-orange mt-0.5" />
                                <div>
                                    <span className="block text-xs uppercase font-bold text-gray-600 mb-1">Headquarters</span>
                                    <span className="leading-relaxed">504/3A/4, GALI NO.- 10, PANDEV ROAD, VISHWAS NAGAR, East Delhi, 110032</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                    <div>
                        © 2026 Dhansampatti Finance Ltd. All Rights Reserved. CIN: U65922MH1999PLC123456
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
