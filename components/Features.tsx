import { ShieldCheck, TrendingUp, Clock, Users } from 'lucide-react';

export default function Features() {
    const features = [
        {
            title: "Wealth Protection",
            description: "Secure your extensive portfolio with our bank-grade encrypted systems and ISO certified processes.",
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
            color: "bg-blue-600",
            shadow: "shadow-blue-200"
        },
        {
            title: "Rapid Growth",
            description: "Experience the fastest approval turnaround in the industry. Your time is our most valued currency.",
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            color: "bg-green-600",
            shadow: "shadow-green-200"
        },
        {
            title: "24/7 Priority",
            description: "Dedicated relationship managers available round the clock to assist you with every financial move.",
            icon: <Clock className="w-8 h-8 text-white" />,
            color: "bg-brand-orange",
            shadow: "shadow-orange-200"
        },
        {
            title: "Expert Network",
            description: "Access our exclusive network of 50+ premium financial institutions tailored to your needs.",
            icon: <Users className="w-8 h-8 text-white" />,
            color: "bg-brand-purple",
            shadow: "shadow-purple-200"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-2 block">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-purple mb-6">Redefining Financial Excellence</h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        At Dhansampatti, we don't just offer loans; we build legacies. Our premium financial solutions are designed to elevate your wealth journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-default">
                            <div className={`w-14 h-14 ${feature.color} rounded-2xl rotate-0 group-hover:-rotate-6 transition-all duration-300 mb-6 flex items-center justify-center shadow-lg ${feature.shadow}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
