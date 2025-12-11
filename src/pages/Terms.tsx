import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileCheck, Scale, ShieldAlert } from "lucide-react";

const TermsOfService = () => {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 gradient-primary">
                <div className="container">
                    <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background text-sm font-medium mb-6 border border-background/20">
              Terms of Service
            </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
                            Terms & Conditions of Use
                        </h1>
                        <p className="text-xl text-background/80">
                            Please read our terms carefully before using any T & T Fuels Limited services or platforms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background">
                <div className="container max-w-4xl">

                    {/* Icons Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: FileCheck,
                                title: "User Agreement",
                                desc: "By using our services, you agree to abide by all terms outlined here.",
                            },
                            {
                                icon: Scale,
                                title: "Fair Use",
                                desc: "Our systems must be used responsibly and within legal limits.",
                            },
                            {
                                icon: ShieldAlert,
                                title: "Compliance",
                                desc: "We follow all industry, safety, and data regulations.",
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

                    {/* Details */}
                    <div className="space-y-12">

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground">
                                By accessing our website, systems, or services, you agree to be bound by these Terms of Service and all applicable laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
                            <p className="text-muted-foreground mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                                <li>Misuse or tamper with system data</li>
                                <li>Disrupt system operations or security</li>
                                <li>Share confidential login credentials</li>
                                <li>Use our services for unlawful activities</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Availability</h2>
                            <p className="text-muted-foreground">
                                We aim to provide uninterrupted service, but we cannot guarantee uptime due to maintenance or unexpected issues.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
                            <p className="text-muted-foreground">
                                T & T Fuels Limited is not responsible for losses resulting from misuse, downtime, or third-party integrations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Modifications</h2>
                            <p className="text-muted-foreground">
                                We may update these terms at any time. Continued use of our services after updates constitutes acceptance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                            <p className="text-muted-foreground">
                                For questions about these Terms, contact:
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

export default TermsOfService;
