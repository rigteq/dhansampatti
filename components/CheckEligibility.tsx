"use client";

import { useState } from 'react';
import { User, Mail, Phone, FileText, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function CheckEligibility() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'Personal Loan',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const loanTypes = [
        'Personal Loan',
        'House Loan',
        'Loans against Properties',
        'Home loan balance Transfer'
    ];

    if (isSuccess) {
        return (
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-purple/10 text-center max-w-lg mx-auto">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-purple mb-4">Request Received!</h3>
                <p className="text-gray-600 mb-8">
                    Thank you, {formData.name}. Our expert will contact you shortly to check your eligibility.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="w-full py-4 bg-brand-purple text-white rounded-xl font-bold hover:bg-brand-purple/90 transition-all"
                >
                    Close
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-brand-purple/10 max-w-lg mx-auto">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-purple">Check Your Eligibility</h3>
                <p className="text-gray-500 text-sm mt-2">Get instant approval details from multiple banks.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Email ID</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                required
                                placeholder="email@example.com"
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Registered Phone</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="tel"
                                required
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Loan Type</label>
                    <div className="relative">
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                        <select
                            className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none appearance-none transition-all font-medium text-gray-700"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                            {loanTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="relative">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Description</label>
                    <div className="relative">
                        <FileText className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                        <textarea
                            rows={3}
                            placeholder="Tell us about your requirements..."
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all resize-none"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold text-lg shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        'Check Eligibility Now'
                    )}
                </button>
                <p className="text-[10px] text-gray-400 text-center font-medium">
                    By clicking, you agree to our Terms and Conditions and Privacy Policy.
                </p>
            </form>
        </div>
    );
}
