"use client";

import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, ChevronDown, Send } from 'lucide-react';

export default function ContactUs() {
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
            <div className="bg-brand-purple p-8 rounded-3xl shadow-2xl text-center text-white max-w-lg mx-auto">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-brand-grey opacity-80 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="w-full py-4 bg-white text-brand-purple rounded-xl font-bold hover:bg-brand-grey transition-all"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row max-w-4xl mx-auto">
            {/* Left Info Panel */}
            <div className="md:w-1/3 bg-brand-purple p-8 text-white flex flex-col justify-between">
                <div>
                    <h3 className="text-3xl font-extrabold mb-4">Contact Us</h3>
                    <p className="text-brand-grey opacity-70 text-sm leading-relaxed mb-8">
                        Have questions about our financial products? Our experts are here to help you make the right choice.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Phone size={18} className="text-brand-gold" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-brand-grey opacity-50">Call Us</p>
                                <p className="font-bold">79822 88552</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Mail size={18} className="text-brand-gold" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-brand-grey opacity-50">Email Us</p>
                                <p className="font-bold">support@dhansampatti.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-12">
                    <p className="text-xs font-medium text-brand-gold italic">"Your financial growth is our priority."</p>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:w-2/3 p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Name</label>
                            <div className="relative">
                                <User size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-purple" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    className="w-full pl-8 pr-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-purple outline-none transition-all font-medium text-gray-800"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Email</label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-purple" />
                                <input
                                    type="email"
                                    required
                                    placeholder="Email ID"
                                    className="w-full pl-8 pr-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-purple outline-none transition-all font-medium text-gray-800"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Phone</label>
                            <div className="relative">
                                <Phone size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-purple" />
                                <input
                                    type="tel"
                                    required
                                    placeholder="Phone Number"
                                    className="w-full pl-8 pr-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-purple outline-none transition-all font-medium text-gray-800"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Inquiry Type</label>
                            <div className="relative">
                                <ChevronDown size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-purple pointer-events-none" />
                                <select
                                    className="w-full pl-0 pr-8 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-purple outline-none appearance-none transition-all font-medium text-gray-800 cursor-pointer"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                >
                                    {loanTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Message</label>
                        <div className="relative">
                            <MessageSquare size={18} className="absolute left-0 top-4 text-brand-purple" />
                            <textarea
                                rows={4}
                                required
                                placeholder="How can we help you?"
                                className="w-full pl-8 pr-0 py-3 bg-transparent border-b-2 border-gray-100 focus:border-brand-purple outline-none transition-all font-medium text-gray-800 resize-none"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-brand-purple text-white rounded-xl font-bold text-lg shadow-lg hover:bg-gray-900 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 mt-4"
                    >
                        {isSubmitting ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <Send size={20} className="text-brand-gold" />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
