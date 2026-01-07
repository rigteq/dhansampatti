import Link from 'next/link';

interface ProductItem {
    title: string;
    subTitle?: string;
    isNew?: boolean;
    icon?: React.ReactNode;
}

interface ProductGridProps {
    title: string;
    items: ProductItem[];
}

export default function ProductGrid({ title, items }: ProductGridProps) {
    return (
        <section className="py-12 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">{title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {items.map((item, idx) => (
                        <Link key={idx} href="#" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                {/* Placeholder Icon if none provided */}
                                {item.icon ? item.icon : <div className="w-8 h-8 bg-pb-blue rounded-full opacity-20"></div>}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center">{item.title}</h3>
                            {item.subTitle && (
                                <p className="text-xs text-green-600 font-semibold mt-1 bg-green-50 px-2 py-0.5 rounded-full">
                                    {item.subTitle}
                                </p>
                            )}
                            {item.isNew && (
                                <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">
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
