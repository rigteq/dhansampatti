import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { CreditCard, Banknote, Landmark, Briefcase, IndianRupee, Percent, ShieldCheck, HeartPulse, GraduationCap } from 'lucide-react';

export default function Home() {
  const creditCards = [
    { title: "Personal Loan", subTitle: "Best Rates", icon: <Banknote className="w-8 h-8 text-pb-blue" /> },
    { title: "Home Loan", subTitle: "Lowest Interest", icon: <Landmark className="w-8 h-8 text-pb-blue" /> },
    { title: "Loan Against Prop", subTitle: "High Value", icon: <ShieldCheck className="w-8 h-8 text-pb-blue" /> },
    { title: "Credit Cards", subTitle: "35+ Offers", icon: <CreditCard className="w-8 h-8 text-pb-blue" /> },
    { title: "Loan Transfer", subTitle: "Easy Approval", icon: <Briefcase className="w-8 h-8 text-pb-blue" /> },
    { title: "Micro Loans", subTitle: "Under ₹50K", icon: <IndianRupee className="w-8 h-8 text-pb-blue" /> },
  ];

  const investmentProducts = [
    { title: "Mutual Funds", subTitle: "Direct Plans", icon: <Percent className="w-8 h-8 text-green-600" /> },
    { title: "Fixed Deposits", subTitle: "High Returns", icon: <Landmark className="w-8 h-8 text-green-600" /> },
    { title: "NPS", subTitle: "Tax Saver", icon: <ShieldCheck className="w-8 h-8 text-green-600" /> },
    { title: "Health Insurance", subTitle: "Port Policy", icon: <HeartPulse className="w-8 h-8 text-green-600" /> },
    { title: "Savings Account", subTitle: "Zero Balance", icon: <Banknote className="w-8 h-8 text-green-600" /> },
    { title: "Education Loan", subTitle: "Study Abroad", icon: <GraduationCap className="w-8 h-8 text-green-600" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <Hero />

        {/* Core Products Grid (Loans & Cards) */}
        <ProductGrid title="Loans & Credit Cards" items={creditCards} />

        {/* Investment Products Grid */}
        <ProductGrid title="Investment & Insurance" items={investmentProducts} />

        {/* Feature/Trust Banner Replica */}
        <section className="py-10 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg w-full">
              <div className="bg-orange-100 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-pb-orange" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">100% Secure</h4>
                <p className="text-sm text-gray-600">Your data is safe with us</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg w-full">
              <div className="bg-blue-100 p-3 rounded-full">
                <Briefcase className="w-8 h-8 text-pb-blue" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">CIBIL Score</h4>
                <p className="text-sm text-gray-600">Check for free instantly</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg w-full">
              <div className="bg-green-100 p-3 rounded-full">
                <Percent className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Tax Saving</h4>
                <p className="text-sm text-gray-600">Save up to ₹46,800</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Scrolling (Static Placeholder) */}
        <section className="py-12 bg-gray-50 text-center">
          <h5 className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-6">Our Partners</h5>
          <div className="container mx-auto px-4 opacity-50 grayscale flex flex-wrap justify-center gap-8 md:gap-16">
            {/* Text Placeholders for Logos */}
            <span className="text-xl font-bold font-serif">HDFC Bank</span>
            <span className="text-xl font-bold font-sans">SBI Card</span>
            <span className="text-xl font-bold font-mono">ICICI Bank</span>
            <span className="text-xl font-bold font-serif">AXIS Bank</span>
            <span className="text-xl font-bold font-sans">Kotak</span>
            <span className="text-xl font-bold font-mono">YES BANK</span>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
