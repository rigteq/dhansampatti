"use client";

import { Search, ArrowRight } from 'lucide-react';

export default function BankRates() {
    const banks = [
        { name: "HDFC Bank", min: 8.50, max: 9.15, icon: "H" },
        { name: "ICICI Bank", min: 8.75, max: 9.40, icon: "I" },
        { name: "SBI", min: 8.40, max: 9.05, icon: "S" },
        { name: "Axis Bank", min: 8.80, max: 9.50, icon: "A" },
        { name: "Kotak Mahindra", min: 8.70, max: 9.35, icon: "K" },
        { name: "Bank of Baroda", min: 8.45, max: 9.10, icon: "B" },
    ];

    return (
        <section className="py-20 bg-brand-grey">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-2 block">Our Partners</span>
                        <h2 className="text-3xl font-bold text-brand-purple mb-3">Exclusive Interest Rates</h2>
                        <p className="text-gray-500 max-w-lg">Compare exclusive mortgage and loan offers from India's most trusted banking institutions.</p>
                    </div>
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-brand-purple transition-colors" />
                        <input
                            type="text"
                            placeholder="Search Banking Partner"
                            className="pl-10 pr-4 py-3 border-2 border-transparent bg-white rounded-xl w-72 text-sm focus:outline-none focus:border-brand-purple/20 focus:shadow-lg transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {banks.map((bank, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-purple/10 group cursor-pointer">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-grey to-white border border-gray-100 flex items-center justify-center font-serif font-bold text-xl text-gray-700 shadow-sm">
                                        {bank.icon}
                                    </div>
                                    <span className="font-bold text-lg text-gray-800">{bank.name}</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-brand-grey flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>

                            <div className="bg-brand-grey/50 rounded-xl p-5 flex justify-between items-center text-sm border border-gray-100">
                                <div>
                                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Starting From</div>
                                    <div className="text-2xl font-extrabold text-brand-purple">{bank.min}%</div>
                                </div>
                                <div className="w-px h-10 bg-gray-200"></div>
                                <div className="text-right">
                                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Max Rate</div>
                                    <div className="text-xl font-bold text-gray-600">{bank.max}%</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-brand-purple font-bold border-b-2 border-brand-purple/20 pb-0.5 hover:text-brand-orange hover:border-brand-orange transition-colors text-sm uppercase tracking-wide">
                        View All 50+ Banking Partners
                    </button>
                </div>
            </div>
        </section>
    );
}
