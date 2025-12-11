import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "T & T Fuels has transformed our fleet operations. Their tracking system and reliable delivery have cut our costs by 20%.",
    author: "Michael Thompson",
    role: "Fleet Manager, Thompson Logistics",
    avatar: "MT",
  },
  {
    quote:
      "The 24/7 support team is incredible. No matter when we need assistance, they're always there to help us keep our operations running.",
    author: "Sarah Chen",
    role: "Operations Director, Chen Transport",
    avatar: "SC",
  },
  {
    quote:
      "We've been with T & T Fuels for over 10 years. Their consistency, quality, and professionalism are unmatched in the industry.",
    author: "Robert Williams",
    role: "CEO, Williams Haulage Ltd",
    avatar: "RW",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it – hear from businesses that trust us
            with their fuel needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-section-light rounded-2xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
