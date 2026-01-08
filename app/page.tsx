import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BankRates from "@/components/BankRates";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <Hero />
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
