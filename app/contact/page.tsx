import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export const metadata = {
    title: "Contact Us | Dhansampatti Finance",
    description: "Get in touch with Dhansampatti Finance experts for personal loans, home loans, and property-related financial solutions.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow pt-12 pb-24 px-4">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-purple mb-6">
                            Let's Start a <span className="text-brand-orange">Conversation</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Whether you're looking for a new loan, want to transfer your existing balance, or just need financial advice, our team is here to guide you every step of the way.
                        </p>
                    </div>

                    <ContactUs />

                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-8 bg-brand-grey rounded-3xl">
                            <h3 className="text-xl font-bold text-brand-purple mb-4">Visit Us</h3>
                            <p className="text-gray-600">
                                123, Finance Plaza, Bandra Kurla Complex,<br />
                                Mumbai, Maharashtra - 400051
                            </p>
                        </div>
                        <div className="p-8 bg-brand-grey rounded-3xl">
                            <h3 className="text-xl font-bold text-brand-purple mb-4">Working Hours</h3>
                            <p className="text-gray-600">
                                Monday - Friday: 9:00 AM - 7:00 PM<br />
                                Saturday: 10:00 AM - 4:00 PM
                            </p>
                        </div>
                        <div className="p-8 bg-brand-grey rounded-3xl">
                            <h3 className="text-xl font-bold text-brand-purple mb-4">Customer Support</h3>
                            <p className="text-gray-600">
                                Toll Free: 79822 88552<br />
                                Email: support@dhansampatti.com
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
