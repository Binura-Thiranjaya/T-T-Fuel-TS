import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sites = [
  {
    id: 1,
    name: "T & T Fuels - Main Depot",
    address: "123 Industrial Estate, Port of Spain",
    city: "Port of Spain",
    country: "Trinidad & Tobago",
    phone: "+1 (868) 555-0101",
    email: "maindepot@ttfuels.com",
    hours: "Mon - Fri: 6:00 AM - 10:00 PM\nSat - Sun: 7:00 AM - 8:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31352.987654321!2d-61.5227!3d10.6549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM5JzE3LjYiTiA2McKwMzEnMjEuNyJX!5e0!3m2!1sen!2stt!4v1234567890",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "T & T Fuels - San Fernando Station",
    address: "45 Southern Main Road, San Fernando",
    city: "San Fernando",
    country: "Trinidad & Tobago",
    phone: "+1 (868) 555-0202",
    email: "sanfernando@ttfuels.com",
    hours: "Mon - Fri: 5:30 AM - 11:00 PM\nSat - Sun: 6:00 AM - 9:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31352.987654321!2d-61.4627!3d10.2849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE3JzA1LjYiTiA2McKwMjcnNDUuNyJX!5e0!3m2!1sen!2stt!4v1234567890",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "T & T Fuels - Chaguanas Hub",
    address: "78 Chaguanas Main Road, Chaguanas",
    city: "Chaguanas",
    country: "Trinidad & Tobago",
    phone: "+1 (868) 555-0303",
    email: "chaguanas@ttfuels.com",
    hours: "24/7 - Open All Day",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31352.987654321!2d-61.4127!3d10.5149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzUzLjYiTiA2McKwMjQnNDUuNyJX!5e0!3m2!1sen!2stt!4v1234567890",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop",
  },
];

export default function Sites() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
      
      <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground text-sm font-medium rounded-full mb-4">
        Our Locations
      </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find a Site Near You
            </h1>

            <p className="text-lg text-slate-300">
              Visit any of our convenient locations across Trinidad & Tobago for quality fuel and exceptional service.
            </p>

          </div>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12">
            {sites.map((site, index) => (
              <div
                key={site.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-card group">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-background/90 text-foreground text-sm font-medium rounded-full">
                        {site.city}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {site.name}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">{site.address}</p>
                        <p className="text-muted-foreground">{site.city}, {site.country}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href={`tel:${site.phone.replace(/\s/g, "")}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {site.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href={`mailto:${site.email}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {site.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">Operating Hours</p>
                        <p className="text-muted-foreground whitespace-pre-line">{site.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          site.address + ", " + site.city
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={`tel:${site.phone.replace(/\s/g, "")}`}>Call Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  {/*    <section className="py-16 bg-section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Can't Find a Location Near You?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us to learn about our delivery services or upcoming site openings in your area.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
*/}
      <Footer />
    </div>
  );
}
