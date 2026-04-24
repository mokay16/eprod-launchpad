import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import poultryImg from "@/assets/case-poultry.jpg";
import coffeeImg from "@/assets/case-coffee.jpg";
import dairyImg from "@/assets/case-dairy.jpg";

type Category = "All" | "Financial Inclusion" | "EUDR Traceability" | "Operational Efficiency";

const stories = [
  {
    image: poultryImg,
    tag: "Financial Inclusion" as Category,
    client: "Novos Horizontes — Poultry Sector",
    headline: "Unlocking $2M in Input Financing for 5,000 Poultry Farmers",
    situation:
      "A major poultry aggregator struggled with high feed costs and poor feed conversion ratios (FCR) among its outgrower network, limiting their ability to secure bank financing.",
    action:
      "Implementing eProd's mobile ERP provided real-time tracking of FCR and mortality rates, creating a verifiable data trail.",
    result:
      "The transparent data de-risked the portfolio, allowing a partner bank to extend $2M in low-interest input financing, boosting overall production by 35%.",
    cta: "Read Full Case Study",
    video: false,
  },
  {
    image: coffeeImg,
    tag: "EUDR Traceability" as Category,
    client: "Nyamirima — Coffee Sector",
    headline: "Achieving 100% EUDR Compliance Ahead of the 2026 Deadline",
    situation:
      "A coffee exporting cooperative faced the threat of losing access to European markets due to an inability to prove zero-deforestation across its complex, multi-tiered supply chain.",
    action:
      "eProd's offline-first mobile app was deployed to map 1,000+ individual farm plots via GPS polygons, seamlessly integrating with the core ERP.",
    result:
      "The exporter achieved full, automated EUDR reporting compliance 18 months ahead of the deadline, securing long-term European contracts and a premium price point.",
    cta: "Watch Video Interview",
    video: true,
  },
  {
    image: dairyImg,
    tag: "Operational Efficiency" as Category,
    client: "Billys — Dairy Sector",
    headline: "Scaling from 2,000 to 15,000 Farmers with Zero Added Overhead",
    situation:
      "A rapidly growing dairy company was drowning in spreadsheet management, leading to delayed farmer payments, high error rates, and an inability to scale operations efficiently.",
    action:
      "Transitioning to eProd's centralized platform automated milk collection data, quality testing, and mobile money payment integrations.",
    result:
      "The company scaled its farmer network by 750% without hiring additional administrative staff, while reducing payment processing time from 14 days to 24 hours.",
    cta: "Download PDF Report",
    video: false,
  },
];

const filters: Category[] = ["All", "Financial Inclusion", "EUDR Traceability", "Operational Efficiency"];

const ImpactGrid = () => {
  const [active, setActive] = useState<Category>("All");

  const visible = active === "All" ? stories : stories.filter((s) => s.tag === active);

  return (
    <section id="impact-grid" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Success Stories</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Measurable Results Across{" "}
            <span className="gradient-primary-text">Every Value Chain</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real outcomes from clients who transformed their operations into bankable, compliant, scalable
            businesses.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                active === f
                  ? "gradient-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary-lighter hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visible.map((story) => (
            <article
              key={story.headline}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.client}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                {story.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play size={24} className="text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary text-xs font-bold text-secondary-foreground uppercase tracking-wider">
                  {story.tag}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {story.client}
                </p>
                <h3 className="text-xl font-bold text-foreground leading-snug mb-5">{story.headline}</h3>

                <dl className="space-y-3 mb-6 flex-1">
                  {[
                    { label: "Challenge", text: story.situation },
                    { label: "Solution", text: story.action },
                    { label: "Impact", text: story.result },
                  ].map((row) => (
                    <div key={row.label} className="border-l-2 border-secondary pl-3">
                      <dt className="text-xs font-bold text-primary uppercase tracking-wider mb-0.5">
                        {row.label}
                      </dt>
                      <dd className="text-sm text-muted-foreground leading-relaxed">{row.text}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  {story.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
