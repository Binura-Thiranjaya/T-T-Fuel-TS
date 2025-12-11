import { Link } from "react-router-dom";
import { Fuel, MapPin, Headphones, BarChart3, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Fuel,
    title: "Fuel Management",
    description:
      "Complete fuel supply solutions with real-time inventory monitoring, automated ordering, and detailed consumption analytics for optimal efficiency.",
  },
  {
    icon: MapPin,
    title: "Fleet Tracking",
    description:
      "GPS-enabled fleet tracking system providing live location updates, route optimization, and comprehensive vehicle performance metrics.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Round-the-clock dedicated support team ready to assist with orders, technical issues, and emergency fuel delivery requests.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Detailed consumption reports, cost analysis, and insights to help you make data-driven decisions and reduce operational costs.",
  },
  {
    icon: Truck,
    title: "Bulk Delivery",
    description:
      "Scheduled and on-demand bulk fuel delivery services with flexible timing to match your operational requirements.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control measures ensuring you receive only the highest quality fuel products meeting industry standards.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Fuel Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From supply to support, we provide end-to-end services designed to
            optimize your fuel operations and reduce costs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
