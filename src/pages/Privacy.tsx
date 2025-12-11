import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 gradient-primary">
                <div className="container">
                    <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background text-sm font-medium mb-6 border border-background/20">
              Privacy Policy
            </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
                            Your Privacy Matters to Us
                        </h1>
                        <p className="text-xl text-background/80">
                            At T & T Fuels Limited, we are committed to protecting your data and ensuring transparency in how we collect and use information.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-background">
                <div className="container max-w-4xl">

                    {/* Intro */}
                    <div className="space-y-6 text-muted-foreground mb-12">
                        <p>
                            This Privacy Policy explains how T & T Fuels Limited ("we", "our", or "us") collects, uses, stores, and protects your personal information when using our services or website.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Shield,
                                title: "Data Protection",
                                desc: "We follow strict security standards to ensure your information stays secure.",
                            },
                            {
                                icon: Lock,
                                title: "Secure Storage",
                                desc: "All sensitive information is encrypted and stored in compliant systems.",
                            },
                            {
                                icon: UserCheck,
                                title: "User Rights",
                                desc: "You have full control over your personal data and how it is used.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-section-light rounded-2xl p-8 text-center shadow-card"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                            <p className="text-muted-foreground">
                                We may collect information such as name, email, phone number, usage data, and device information when interacting with our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                <li>To provide fuel management and related services</li>
                                <li>To improve user experience and system performance</li>
                                <li>To communicate service updates or alerts</li>
                                <li>To ensure safety, compliance, and fraud prevention</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Services</h2>
                            <p className="text-muted-foreground">
                                We may work with trusted third-party providers for analytics, hosting, or communication tools. Your data is never sold.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Data Rights</h2>
                            <p className="text-muted-foreground mb-4">
                                You may request to:
                            </p>
                            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                                <li>Access your personal data</li>
                                <li>Request corrections or updates</li>
                                <li>Request permanent deletion</li>
                                <li>Limit or object to processing</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy, contact us at:
                                <br />
                                <strong>Email:</strong> support@ttfuels.co.uk
                            </p>
                        </section>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
