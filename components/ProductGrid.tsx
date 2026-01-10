import Link from 'next/link';

interface ProductItem {
    title: string;
    subTitle?: string;
    isNew?: boolean;
    icon?: React.ReactNode;
    highlight?: boolean;
}

interface ProductGridProps {
    title: string;
    items: ProductItem[];
}

export default function ProductGrid({ title, items }: ProductGridProps) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-purple tracking-tight">{title}</h2>
                        <div className="h-1.5 w-24 bg-brand-orange mt-2 rounded-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {items.map((item, idx) => (
                        <Link
                            key={idx}
                            href="#"
                            className={`flex flex-col items-center p-8 rounded-3xl transition-all cursor-pointer group relative overflow-hidden ${item.highlight
                                    ? 'bg-brand-purple text-white shadow-xl shadow-brand-purple/20 scale-105 z-10 border-2 border-brand-gold'
                                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1'
                                }`}
                        >
                            {item.highlight && (
                                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/20 rounded-bl-full -mr-4 -mt-4 blur-xl"></div>
                            )}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.highlight ? 'bg-white/10' : 'bg-brand-grey'
                                }`}>
                                {item.icon ? item.icon : <div className="w-8 h-8 bg-brand-purple rounded-full opacity-20"></div>}
                            </div>
                            <h3 className={`text-lg font-bold text-center leading-tight mb-2 ${item.highlight ? 'text-white' : 'text-brand-purple'}`}>
                                {item.title}
                            </h3>
                            {item.subTitle && (
                                <p className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${item.highlight ? 'bg-brand-gold text-brand-purple' : 'bg-green-50 text-green-600'
                                    }`}>
                                    {item.subTitle}
                                </p>
                            )}
                            {item.isNew && !item.highlight && (
                                <span className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-lg">
                                    New
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
