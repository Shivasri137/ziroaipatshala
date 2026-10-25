import Link from "next/link";
import { Activity, BookOpenCheck, ClipboardCheck, School, Users, MessageSquareQuote, ArrowRight } from "lucide-react";

const metrics = [
  {
    value: "4",
    label: "offline workshop sessions",
    tag: "Founder-reported",
    description: "The founder's supplied brief reports four offline AI workshop sessions. Attendance totals and session dates are not yet published.",
    icon: School,
  },
  {
    value: "3",
    label: "named school venues",
    tag: "Experience supplied",
    description: "Sri Chaithanya High School, KGR High School, and Model School, Kandlapally. These are experience references, not endorsements or ongoing partnerships.",
    icon: Users,
  },
  {
    value: "3 days",
    label: "AI Buddy Den curriculum",
    tag: "Program scope",
    description: "An introductory online program outline covering AI basics, ML/DL concepts, prompting, practical tools, and a guided activity.",
    icon: BookOpenCheck,
  },
];

const measures = [
  { icon: ClipboardCheck, title: "Reach", description: "Record confirmed sessions, actual attendance, age/class range, and format—without estimating or double-counting learners." },
  { icon: Activity, title: "Learning", description: "Use simple before-and-after questions to check whether learners can explain key AI ideas. Publish results only after collecting and reviewing real responses." },
  { icon: MessageSquareQuote, title: "Experience", description: "Gather specific feedback from parents, educators, and participants, then share only the exact words approved for publication." },
];

export default function ImpactProof() {
  return <section className="section section-soft" aria-labelledby="impact-title">
    <div className="container">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Experience & evidence</span>
          <h2 id="impact-title" className="heading" style={{ marginTop: 15 }}>Real work. Honest reporting. Better measurement.</h2>
          <p className="body-copy" style={{ marginTop: 12, maxWidth: 670 }}>ZIRO is building a public record of its AI learning work. We separate founder-reported delivery experience from measured student outcomes—and publish the latter only when records support them.</p>
        </div>
      </div>
      <div className="grid-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return <article className="card" key={metric.label} style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <span className="pill">{metric.tag}</span>
              <span className="icon-tile"><Icon size={20}/></span>
            </div>
            <div style={{ fontSize: "clamp(35px,4vw,48px)", lineHeight: 1, letterSpacing: "-.06em", fontWeight: 800, marginTop: 24 }}>{metric.value}</div>
            <h3 style={{ fontSize: 17, lineHeight: 1.4, fontWeight: 760, marginTop: 9 }}>{metric.label}</h3>
            <p className="body-copy" style={{ fontSize: 13, marginTop: 10 }}>{metric.description}</p>
          </article>;
        })}
      </div>
      <div style={{ marginTop: 48 }}>
        <div className="section-heading" style={{ marginBottom: 24 }}>
          <div>
            <span className="eyebrow">How impact will be measured</span>
            <h3 className="subheading" style={{ marginTop: 13 }}>Outcome claims should follow evidence.</h3>
          </div>
          <p className="body-copy" style={{ maxWidth: 430, fontSize: 13 }}>No student counts, learning gains, or success rates are displayed yet because verified records were not included in the supplied material.</p>
        </div>
        <div className="grid-3">
          {measures.map((item) => {
            const Icon = item.icon;
            return <div key={item.title} style={{ padding: "20px 0", borderTop: "1px solid #dfe0e9" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon size={19} color="#4f46e5"/><h4 style={{ fontSize: 16, fontWeight: 760 }}>{item.title}</h4></div>
              <p className="body-copy" style={{ fontSize: 13, marginTop: 11 }}>{item.description}</p>
            </div>;
          })}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 22, flexWrap: "wrap", marginTop: 25, padding: "22px 24px", border: "1px solid #e3e1f5", borderRadius: 18, background: "#fff" }}>
        <div style={{ maxWidth: 660 }}>
          <h3 style={{ fontSize: 18, fontWeight: 760 }}>Have first-hand feedback about a ZIRO session?</h3>
          <p className="body-copy" style={{ marginTop: 6, fontSize: 13 }}>Share a specific experience. Public quotes are added only after review and explicit permission.</p>
        </div>
        <Link href="/testimonials" className="btn btn-primary">Share feedback <ArrowRight size={16}/></Link>
      </div>
    </div>
  </section>;
}
