import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#050d26] text-white pt-16 pb-8 font-sans">
            <div className="container mx-auto px-4 md:px-16">
                {/* Top Footer Section - Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 border-b border-gray-800 pb-12">
                    <div>
                        <h4 className="font-bold mb-4 text-gray-300">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Partners</Link></li>
                            <li><Link href="#" className="hover:text-white">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-300">Loans</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Personal Loan</Link></li>
                            <li><Link href="#" className="hover:text-white">Home Loan</Link></li>
                            <li><Link href="#" className="hover:text-white">Business Loan</Link></li>
                            <li><Link href="#" className="hover:text-white">Loan Transfer</Link></li>
                            <li><Link href="#" className="hover:text-white">Loan Against Property</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-300">Credit Cards</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Top Credit Cards</Link></li>
                            <li><Link href="#" className="hover:text-white">Best Cashback Cards</Link></li>
                            <li><Link href="#" className="hover:text-white">Lifetime Free Cards</Link></li>
                            <li><Link href="#" className="hover:text-white">Travel Credit Cards</Link></li>
                            <li><Link href="#" className="hover:text-white">Shopping Credit Cards</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-300">Investments</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Mutual Funds</Link></li>
                            <li><Link href="#" className="hover:text-white">Fixed Deposits</Link></li>
                            <li><Link href="#" className="hover:text-white">NPS</Link></li>
                            <li><Link href="#" className="hover:text-white">Savings Account</Link></li>
                            <li><Link href="#" className="hover:text-white">SIPs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-300">More</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white">Credit Score</Link></li>
                            <li><Link href="#" className="hover:text-white">Grievance Redressal</Link></li>
                            <li><Link href="#" className="hover:text-white">Sitemap</Link></li>
                            <li><Link href="#" className="hover:text-white">Partner</Link></li>
                            <li><Link href="#" className="hover:text-white">Brochure</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer - Apps & Social */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold tracking-tight">DhanSampatti<span className="text-pb-orange">.com</span></span>
                        <span className="text-sm text-gray-500">© 2014 - 2026 DhanSampatti.com. All Rights Reserved.</span>
                    </div>

                    <div className="flex gap-4">
                        <Link href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pb-orange transition-colors">
                            <Facebook size={16} />
                        </Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pb-orange transition-colors">
                            <Twitter size={16} />
                        </Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pb-orange transition-colors">
                            <Linkedin size={16} />
                        </Link>
                        <Link href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pb-orange transition-colors">
                            <Youtube size={16} />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 text-[10px] text-gray-600 text-center max-w-4xl mx-auto">
                    *CIN No. U74900HR2011PTC044581 | Registered Office: 504/3A/4, GALI NO. 10, Pandev Road, Vishwas Nagar, East Delhi, Delhi (110032).
                    <br /><br />
                    Disclaimer: DhanSampatti.com is an online distributor of financial products. Users are advised to check the product details, terms and conditions before purchasing any product.
                </div>
            </div>
        </footer>
    );
}
