import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BankRates from "@/components/BankRates";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import CheckEligibility from "@/components/CheckEligibility";
import { Building2, Home as HomeIcon, UserCircle, Briefcase, Percent, Receipt } from "lucide-react";

export default function Home() {
  const productItems = [
    { title: "Personal Loan", icon: <UserCircle className="w-8 h-8 text-brand-purple" /> },
    { title: "House Loan", icon: <HomeIcon className="w-8 h-8 text-brand-purple" /> },
    {
      title: "Loans against Properties",
      icon: <Building2 className="w-8 h-8 text-white" />,
      subTitle: "Lowest Rates",
      isNew: true,
      highlight: true
    },
    {
      title: "Home loan balance Transfer",
      icon: <Percent className="w-8 h-8 text-white" />,
      subTitle: "Save Lakhs",
      isNew: true,
      highlight: true
    },
    { title: "Business Loan", icon: <Briefcase className="w-8 h-8 text-brand-purple" /> },
    { title: "Gold Loan", icon: <Receipt className="w-8 h-8 text-brand-purple" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section className="py-20">
          <ProductGrid title="Our Exclusive Financial Products" items={productItems} />
        </section>

        <section id="eligibility" className="py-20 bg-brand-grey">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-purple mb-6">
                  Check Your <span className="text-brand-orange">Eligibility</span> in Minutes
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Don't let manual paperwork slow you down. Our digital-first approach ensures you get the fastest loan approvals with minimal documentation.
                </p>
                <ul className="space-y-4">
                  {[
                    "Instant approval from 30+ Banks",
                    "No impact on Credit Score",
                    "Fastest Disbursal Guarantee",
                    "Expert guidance throughout the process"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <CheckEligibility />
              </div>
            </div>
          </div>
        </section>

        <Features />
        <BankRates />

        {/* Premium CTA Section */}
        <section className="bg-brand-purple py-24 text-center text-white relative overflow-hidden">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl -mr-20 -mb-20"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to Multiply Your Wealth?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Join India's most exclusive financial platform. Get tailored loan offers and investment advice today.
            </p>
            <button className="bg-white text-brand-purple px-12 py-4 rounded-full font-bold shadow-2xl hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 duration-300 text-lg">
              Start Your Journey
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
