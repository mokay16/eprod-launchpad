import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground">
              Stop Managing Your Supply Chain in{" "}
              <span className="gradient-primary-text">Spreadsheets.</span>
            </h1>
            <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              eProd helps agribusinesses manage 1,000+ farmers, ensure traceability, and reduce waste—all in one affordable platform.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:brightness-110 transition shadow-lg"
              >
                Request a Demo
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary bg-transparent px-8 py-3.5 text-base font-semibold text-primary hover:bg-secondary/10 transition"
              >
                <Play size={18} className="text-secondary" />
                Watch a 2-Minute Overview
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="African farmer using mobile technology in a green agricultural field with digital data overlays"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
