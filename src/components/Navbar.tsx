import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Sites", href: "/sites" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={cn(
            "flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300",
            isScrolled ? "bg-primary" : "bg-background"
          )}>
            <Fuel className={cn(
              "w-5 h-5 transition-colors duration-300",
              isScrolled ? "text-primary-foreground" : "text-primary"
            )} />
          </div>
          <span className={cn(
            "text-xl font-bold transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-background"
          )}>
            T & T Fuels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                location.pathname === link.href
                  ? isScrolled
                    ? "bg-primary/10 text-primary"
                    : "bg-background/20 text-background"
                  : isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-background/80 hover:text-background hover:bg-background/10"
              )}
            >
              {link.name}
            </Link>
          ))}
          {/*<Button
            variant={isScrolled ? "default" : "hero"}
            size="sm"
            className="ml-4"
            asChild
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>*/}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-foreground" : "text-background"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            {/*<Button className="mt-2" asChild>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>*/}
          </nav>
        </div>
      )}
    </header>
  );
}
