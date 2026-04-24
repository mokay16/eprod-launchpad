import { Quote } from "lucide-react";

const quotes = [
  {
    quote:
      "eProd provides the data integrity and transparency we need to confidently deploy capital into agricultural value chains that were previously considered too risky.",
    name: "Head of Agribusiness",
    role: "Partner Bank",
    tag: "Bank Partner",
  },
  {
    quote:
      "The platform didn't just digitize our operations; it completely changed our relationship with our buyers in Europe. We now sell traceability as a premium feature.",
    name: "CEO",
    role: "Nut Exporter",
    tag: "Agribusiness CEO",
  },
  {
    quote:
      "Our farmers are paid faster and more accurately than ever before. eProd has built immense trust within our network.",
    name: "Chairman",
    role: "Dairy Cooperative",
    tag: "Cooperative Leader",
  },
];

const VoiceOfCustomer = () => {
  return (
    <section className="section-gray py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">
            The Voice of the Customer
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            In Their <span className="gradient-primary-text">Own Words</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quotes.map((q) => (
            <figure
              key={q.quote}
              className="relative bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition flex flex-col"
            >
              <Quote size={32} className="text-secondary mb-4" />
              <blockquote className="text-foreground leading-relaxed mb-6 flex-1 italic">
                "{q.quote}"
              </blockquote>
              <figcaption className="pt-5 border-t border-border">
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{q.tag}</div>
                <div className="font-bold text-foreground text-sm">{q.name}</div>
                <div className="text-xs text-muted-foreground">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceOfCustomer;
