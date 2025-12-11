import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Fuel,
  MapPin,
  Headphones,
  BarChart3,
  Truck,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Fuel,
    title: "Fuel Management",
    description:
      "Our comprehensive fuel management service provides end-to-end control over your fuel operations. From automated inventory monitoring to real-time consumption tracking, we ensure you never run out of fuel and always get the best value.",
    features: [
      "Real-time inventory monitoring",
      "Automated reorder alerts",
      "Consumption analytics",
      "Cost optimization reports",
      "Multiple fuel type support",
    ],
  },
  {
    icon: MapPin,
    title: "Fleet Tracking",
    description:
      "Advanced GPS-enabled tracking system that provides complete visibility into your fleet operations. Monitor vehicle locations, optimize routes, and improve driver efficiency with our state-of-the-art technology.",
    features: [
      "Live GPS tracking",
      "Route optimization",
      "Driver behavior analysis",
      "Geofencing alerts",
      "Historical trip data",
    ],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any needs. Whether it's an emergency fuel delivery or a technical question, help is always just a call away.",
    features: [
      "Round-the-clock availability",
      "Emergency response team",
      "Dedicated account managers",
      "Multi-channel support",
      "Rapid issue resolution",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Make data-driven decisions with our comprehensive analytics platform. Access detailed reports on fuel consumption, costs, efficiency metrics, and trends to optimize your operations.",
    features: [
      "Custom report generation",
      "Cost analysis dashboards",
      "Trend identification",
      "Benchmark comparisons",
      "Export capabilities",
    ],
  },
  {
    icon: Truck,
    title: "Bulk Delivery",
    description:
      "Flexible bulk fuel delivery services tailored to your schedule and requirements. From scheduled deliveries to emergency top-ups, we ensure your operations never skip a beat.",
    features: [
      "Scheduled deliveries",
      "On-demand service",
      "Flexible timing",
      "Large volume capacity",
      "Safe handling protocols",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "We maintain the highest standards of fuel quality through rigorous testing and quality control measures. Every drop of fuel we deliver meets or exceeds industry standards.",
    features: [
      "Regular quality testing",
      "Industry certifications",
      "Contamination prevention",
      "Storage best practices",
      "Full traceability",
    ],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background text-sm font-medium mb-6 border border-background/20">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Complete Fuel Solutions for Your Business
            </h1>
            <p className="text-xl text-background/80">
              From supply to support, we provide comprehensive services designed
              to optimize your fuel operations and reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div
                  className={`bg-section-light rounded-3xl aspect-square flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <service.icon className="w-32 h-32 text-primary/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/*
      <CTASection />
*/}
      <Footer />
    </main>
  );
};

export default Services;
