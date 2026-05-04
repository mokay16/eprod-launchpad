import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/eprod-logo.png";

const navLinks = ["Home", "About Us", "Solutions", "Case Studies", "Insights", "Contact"];

const routeMap: Record<string, string> = {
  "Home": "/",
  "About Us": "/about",
  "Solutions": "/solutions",
  "Case Studies": "/case-studies",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="eProd" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} className="text-secondary" />
          <span>Rosslyn, Nairobi</span>
          <Phone size={14} className="ml-3 text-secondary" />
          <span>+254 0112203982</span>
          <Mail size={14} className="ml-3 text-secondary" />
          <span>info@eprod-solutions.com</span>
        </div>
      </div>

      <nav className="gradient-primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const href = routeMap[link] ?? `#${link.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <li key={link}>
                  <a
                    href={href}
                    className="text-sm font-medium text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#cta"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground hover:brightness-110 hover:scale-105 transition-all duration-200"
          >
            Request a Demo
          </a>

          <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {navLinks.map((link) => {
              const href = routeMap[link] ?? `#${link.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <a
                  key={link}
                  href={href}
                  className="block text-sm font-medium text-primary-foreground/80 hover:text-secondary py-1 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              );
            })}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground mt-2"
            >
              Request a Demo
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
