import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/eprod-logo.png";

const navLinks = ["About Us", "Solutions", "Case Studies", "Insights", "Contact us"];

const routeMap: Record<string, string> = {
  "Home": "/",
  "About Us": "/about",
  "Solutions": "/solutions",
  "Case Studies": "/case-studies",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 gradient-primary">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="eProd" className="h-10 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const href = routeMap[link] ?? `#${link.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <li key={link}>
                <a
                  href={href}
                  className="text-sm font-semibold text-primary-foreground/90 hover:text-secondary transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center rounded-md bg-secondary px-6 py-2.5 text-sm font-bold text-secondary-foreground hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-md"
        >
          Request a Demo
        </a>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 border-t border-primary-foreground/10">
          {navLinks.map((link) => {
            const href = routeMap[link] ?? `#${link.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <a
                key={link}
                href={href}
                className="block text-sm font-semibold text-primary-foreground/90 hover:text-secondary py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            );
          })}
          <a
            href="#cta"
            className="inline-flex items-center rounded-md bg-secondary px-6 py-2.5 text-sm font-bold text-secondary-foreground mt-2"
          >
            Request a Demo
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
