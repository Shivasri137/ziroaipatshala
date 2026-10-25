import { CheckCircle2, FileCheck2, LockKeyhole, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/Ui";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata = {
  title: "Testimonials & Impact",
  description: "Share first-hand feedback about ZIRO AI PATASHALA. Testimonials are published only after factual review and explicit permission.",
  alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: "/testimonials" } : undefined,
};

const publishingSteps = [
  { icon: MessageSquareQuote, title: "Share your real experience", text: "Describe what you actually saw, learned, or found useful. Specific details are more valuable than a generic rating." },
  { icon: FileCheck2, title: "We review it with you", text: "ZIRO checks session details, the requested display name, and exact wording. Follow-up may be needed before publication." },
  { icon: LockKeyhole, title: "Nothing goes public by default", text: "Private feedback remains private unless the person with the right to consent approves the exact text for publication." },
];

const caseStudyFields = [
  ["School or venue", "Include only with accurate context and appropriate permission."],
  ["Workshop date and grade range", "Use session records; do not infer dates or learner ages."],
  ["Participant count and duration", "Publish only from attendance records and the confirmed session plan."],
  ["Activities actually conducted", "Describe what happened, not just what was planned."],
  ["Documented learning outcomes", "Separate observed examples from measured results and explain the evidence."],
  ["Teacher or parent feedback", "Use exact approved wording and a confirmed display name."],
  ["Approved photos or student work", "Use authentic material only where publication permission is in place."],
];

export default function TestimonialsPage() {
  return <>
    <PageHero eyebrow="Testimonials & impact" title="Real voices. Real experiences. No invented reviews." description="Feedback can help families and educators understand a learning experience—but only when it comes from a real participant and is shared with permission." />
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ alignItems: "stretch" }}>
          <div className="card" style={{ padding: "clamp(24px,4vw,36px)", background: "linear-gradient(145deg,#fbfaf8,#f7f6ff)" }}>
            <div className="icon-tile"><MessageSquareQuote size={22}/></div>
            <span className="eyebrow" style={{ marginTop: 22 }}>Current status</span>
            <h2 className="subheading" style={{ marginTop: 12 }}>No public testimonials approved yet.</h2>
            <p className="body-copy" style={{ marginTop: 12 }}>The supplied website brief does not include actual testimonial text or publication permission. We will not create quotes, ratings, names, or student outcomes to fill the page.</p>
          </div>
          <div className="card" style={{ padding: "clamp(24px,4vw,36px)" }}>
            <span className="eyebrow">Impact transparency</span>
            <h2 className="subheading" style={{ marginTop: 12 }}>What the current record supports</h2>
            <p className="body-copy" style={{ marginTop: 12 }}>Founder-supplied information reports four offline workshop sessions across three named school venues. AI Buddy Den is described as a three-day online introductory programme.</p>
            <p className="body-copy" style={{ marginTop: 10 }}>Verified participant totals, attendance records, measured learning gains, and approved testimonial wording were not supplied. They will be added only when documented.</p>
            <div style={{ marginTop: 17 }}><Link className="text-link" href="/#impact-title">See experience and measurement approach <span aria-hidden="true">→</span></Link></div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">Our feedback standard</span><h2 className="heading" style={{ marginTop: 15 }}>How a testimonial earns its place.</h2><p className="body-copy" style={{ marginTop: 12 }}>The process is intentionally manual. A form submission is not an automatic public review.</p></div></div>
        <div className="grid-3">
          {publishingSteps.map(item => { const Icon = item.icon; return <article key={item.title} className="card" style={{ padding: 24 }}><div className="icon-tile"><Icon size={21}/></div><h3 style={{ fontSize: 18, fontWeight: 760, lineHeight: 1.4, marginTop: 18 }}>{item.title}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 9 }}>{item.text}</p></article>; })}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "19px 0", marginTop: 22, borderTop: "1px solid #dedfe7" }}>
          <CheckCircle2 size={19} color="var(--blue)" style={{ flexShrink: 0, marginTop: 2 }}/>
          <p className="body-copy" style={{ fontSize: 13 }}>Children&apos;s names, photos, class details, and personal information are not published without appropriate permission. Parents or guardians should provide permission for a learner under 18.</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">Case-study template</span><h2 className="heading" style={{ marginTop: 15 }}>What a documented workshop story should include.</h2><p className="body-copy" style={{ marginTop: 12, maxWidth: 730 }}>This is a reporting framework, not a completed case study. Details are published only when records and permission support them; missing values are omitted rather than guessed.</p></div></div>
        <div className="grid-2">
          {caseStudyFields.map(([title, detail]) => <article key={title} className="card" style={{ padding: 21 }}><h3 style={{ fontSize: 15, fontWeight: 760 }}>{title}</h3><p className="body-copy" style={{ fontSize: 12, marginTop: 7 }}>{detail}</p></article>)}
        </div>
      </div>
    </section>
    <section id="share-feedback" className="section section-soft">
      <div className="container" style={{ maxWidth: 960 }}>
        <div style={{ maxWidth: 720, marginBottom: 28 }}>
          <span className="eyebrow">Share feedback</span>
          <h2 className="heading" style={{ marginTop: 15 }}>Help us describe what really happened.</h2>
          <p className="body-copy" style={{ marginTop: 12 }}>Parents and guardians, educators, and adult participants can share a short first-hand account. Please avoid sensitive information about children. Private feedback is the default.</p>
        </div>
        <FeedbackForm />
      </div>
    </section>
    <CtaBand title="Want to understand a programme before enrolling?" description="Ask about the curriculum, delivery format, schedule, fee, and what learners actually do during a session." primaryHref="/contact" primaryText="Contact ZIRO" secondaryHref="/programs" secondaryText="Explore programs"/>
  </>;
}
