import { CheckCircle } from "lucide-react";

const values = [
  "Quality fuel products at competitive prices",
  "24/7 emergency fuel delivery services",
  "Advanced fleet management technology",
  "Dedicated account managers",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Fuel Management
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              For over 25 years, T & T Fuels Limited has been at the forefront
              of the fuel management industry. We understand that reliable fuel
              supply is the lifeblood of your business operations.
            </p>
            <p className="text-muted-foreground mb-8">
              Our commitment to excellence, combined with cutting-edge technology
              and a customer-first approach, has made us the preferred choice for
              businesses across the region. We don't just supply fuel; we provide
              complete energy solutions tailored to your needs.
            </p>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "500+", label: "Active Clients" },
              { number: "1M+", label: "Gallons Delivered" },
              { number: "99.9%", label: "Uptime Guarantee" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-section-light rounded-2xl p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
