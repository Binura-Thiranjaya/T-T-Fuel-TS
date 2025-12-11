import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Target, Eye, Heart, Users } from "lucide-react";

const teamMembers = [
  {
    name: "Thomas Anderson",
    role: "Chief Executive Officer",
    initials: "TA",
    bio: "25+ years in the fuel industry, leading T & T Fuels with vision and integrity.",
  },
  {
    name: "Emily Richardson",
    role: "Operations Director",
    initials: "ER",
    bio: "Expert in logistics and supply chain management, ensuring seamless operations.",
  },
  {
    name: "James Mitchell",
    role: "Technical Director",
    initials: "JM",
    bio: "Pioneering our fleet tracking and analytics technology solutions.",
  },
  {
    name: "Sarah Williams",
    role: "Customer Relations Manager",
    initials: "SW",
    bio: "Dedicated to delivering exceptional service and building lasting relationships.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background text-sm font-medium mb-6 border border-background/20">
              About T & T Fuels
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Fueling Success Since 1995
            </h1>
            <p className="text-xl text-background/80">
              From a single fuel truck to a nationwide network, our journey is built on trust, 
              reliability, and an unwavering commitment to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  T & T Fuels Limited was founded in 1995 by brothers Thomas and Timothy 
                  Harrison with a simple mission: to provide reliable fuel services to local businesses.
                </p>
                <p>
                  What started as a small operation with a single delivery truck has grown 
                  into one of the region's most trusted fuel management companies, serving 
                  over 500 businesses across the country.
                </p>
                <p>
                  Today, we combine decades of industry experience with cutting-edge 
                  technology to deliver comprehensive fuel solutions that help businesses 
                  optimize their operations and reduce costs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { year: "1995", event: "Company Founded" },
                { year: "2005", event: "Fleet Tracking Launch" },
                { year: "2015", event: "500th Client" },
                { year: "2024", event: "Digital Platform" },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="bg-section-light rounded-2xl p-6 text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-2">
                    {milestone.year}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {milestone.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-section-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To deliver reliable, efficient, and innovative fuel management solutions that empower businesses to achieve their full potential.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be the most trusted and technologically advanced fuel management partner for businesses of all sizes across the nation.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Integrity, reliability, innovation, and customer-centricity guide every decision we make and every service we provide.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-card text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-section-light rounded-2xl p-6 text-center group hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground text-xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
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

export default About;
