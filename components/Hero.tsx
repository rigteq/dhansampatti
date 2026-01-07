import Link from 'next/link';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
    return (
        <section className="bg-white pb-12 pt-6 md:pt-10">
            <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-pb-blue leading-tight">
                        India's Top Platform for <br />
                        <span className="text-pb-orange">Loans & Cards</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg">
                        Compare and choose from 100+ partners. Get the best offers on Credit Cards, Personal Loans, and more.
                    </p>

                    <div className="flex flex-col gap-3 pt-4">
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <Shield className="text-pb-teal w-5 h-5" /> 100% Secure & Frictionless
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <Users className="text-pb-teal w-5 h-5" /> 35 Million+ Happy Customers
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-medium">
                            <Award className="text-pb-teal w-5 h-5" /> 50+ Banking Partners
                        </div>
                    </div>

                    <div className="pt-6">
                        <Link href="#" className="inline-flex items-center gap-2 bg-pb-orange hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-orange-200 transition-all transform hover:scale-105">
                            Get Your Free Credit Score
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Right Banner / Slider Placeholder */}
                <div className="flex-1 max-w-md w-full">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-pb-blue to-blue-900 text-white p-8 md:h-[350px] flex flex-col justify-center">
                        {/* Shapes/Decor */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-pb-orange opacity-20 rounded-full blur-3xl"></div>

                        <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                            Special Offer
                        </span>
                        <h3 className="text-3xl font-bold mb-2">Lifetime Free Credit Cards</h3>
                        <p className="text-blue-100 mb-6 max-w-xs">
                            0 Annual Fee. Unlimited Rewards. Complimentry Airport Lounge Access.
                        </p>
                        <button className="bg-white text-pb-blue font-bold py-3 px-6 rounded-lg w-fit hover:bg-gray-100 transition-colors">
                            Check Eligibility Now
                        </button>
                    </div>
                    {/* Slider Dots Placeholder */}
                    <div className="flex justify-center gap-2 mt-6">
                        <div className="w-8 h-2 bg-pb-blue rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
