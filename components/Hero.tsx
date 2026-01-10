"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    // EMI Calculator State
    const [amount, setAmount] = useState(5000000);
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        const r = rate / 12 / 100;
        const n = tenure * 12;
        const calcEmi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmi(Math.round(calcEmi));
    }, [amount, rate, tenure]);

    return (
        <section className="relative pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-brand-grey">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop"
                    alt="Modern Home Interior"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-sm mb-6 border border-brand-purple/20">
                            🚀 #1 Finance Platform in India
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-purple leading-tight mb-6">
                            Empowering Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">Wealth Journey</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                            Experience hassle-free loans with lowest interest rates. We combine technology with financial expertise to deliver your dreams.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#eligibility" className="px-8 py-4 bg-brand-orange text-white rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Check Eligibility <ArrowRight size={20} />
                            </a>
                            <Link href="/contact" className="px-8 py-4 bg-white text-brand-purple border-2 border-brand-purple/10 rounded-xl font-bold text-lg hover:bg-brand-purple hover:text-white transition-all text-center">
                                Talk to Expert
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm font-semibold text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div> 24hr Disbursal
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div> 100% Digital
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div> No Hidden Fees
                            </div>
                        </div>
                    </div>

                    {/* Right Content - EMI Calculator Card */}
                    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-brand-purple/20 p-6 md:p-8 border border-gray-100 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                                <Calculator size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">EMI Calculator</h3>
                                <p className="text-xs text-gray-500 font-medium">Plan your loan repayment</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Amount Slider */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Loan Amount</label>
                                    <span className="text-sm font-bold text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded">₹ {amount.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="100000"
                                    max="10000000"
                                    step="50000"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                                />
                            </div>

                            {/* Interest Rate Slider */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Interest Rate (% p.a)</label>
                                    <span className="text-sm font-bold text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded">{rate} %</span>
                                </div>
                                <input
                                    type="range"
                                    min="6"
                                    max="18"
                                    step="0.1"
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                />
                            </div>

                            {/* Tenure Slider */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-bold text-gray-700">Tenure (Years)</label>
                                    <span className="text-sm font-bold text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded">{tenure} Years</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="1"
                                    value={tenure}
                                    onChange={(e) => setTenure(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                                />
                            </div>

                            {/* Result Block */}
                            <div className="bg-brand-purple text-white rounded-2xl p-6 mt-8 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-orange opacity-20 rounded-full blur-xl -ml-5 -mb-5"></div>

                                <p className="text-sm text-brand-gold font-bold uppercase tracking-wider mb-1 relative z-10">Your Monthly EMI</p>
                                <div className="text-4xl font-extrabold relative z-10">
                                    ₹ {emi.toLocaleString()}*
                                </div>
                                <button className="w-full mt-4 py-3 bg-white text-brand-purple font-bold rounded-xl hover:bg-gray-100 transition-colors relative z-10 text-sm">
                                    View Breakdown
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
