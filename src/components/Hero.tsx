import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fuel-station.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern fuel station at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm text-background text-sm font-medium mb-6 border border-background/20">
            Trusted Fuel Partner Since 1995
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            Powering Your Fleet with{" "}
            <span className="text-primary">Reliable</span> Fuel Solutions
          </h1>
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl">
            T & T Fuels Limited delivers comprehensive fuel management services
            to keep your business moving. From fleet tracking to 24/7 customer
            support, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="hero" asChild>
              <Link to="/sites">Explore Our Sites</Link>
            </Button>
          {/*  <Button size="lg" variant="hero-outline" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>*/}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-background/50" />
        </div>
      </div>
    </section>
  );
}
