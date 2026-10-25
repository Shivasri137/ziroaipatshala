import { CheckCircle2, FileCheck2, LockKeyhole, MessageSquareQuote } from "lucide-react";
import { CtaBand, PageHero } from "@/components/Ui";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata = {
  title: "Testimonials & Impact",
  description: "Share first-hand feedback about ZIRO AI PATASHALA. Testimonials are published only after factual review and explicit permission.",
  alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: "/testimonials" } : undefined,
};

const process = [
  { icon: MessageSquareQuote, title: "Share your real experience", text: "Describe what you actually saw, learned, or found useful. Specific details are more valuable than a generic rating." },
  { icon: FileCheck2, title: "We review it with you", text: "ZIRO checks the session details, requested display name, and exact wording. We may ask a follow-up question before using it." },
  { icon: LockKeyhole, title: "Nothing goes public by default", text: "Feedback sent privately remains private unless the person with the right to consent approves the exact text for publication." },
];

export default function TestimonialsPage() {
  return <>
    <PageHero
      eyebrow="Testimonials & impact"
      title="Real voices. Real experiences. No invented reviews."
      description="Feedback is one part of understanding impact—but only when it comes from a real participant and is shared with permission. This page is being built around that standard."
    />
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ alignItems: "stretch" }}>
          <div className="card" style={{ padding: "clamp(24px,4vw,36px)", background: "linear-gradient(145deg,#fbfaf8,#f7f6ff)" }}>
            <div className="icon-tile"><MessageSquareQuote size={22}/></div>
            <span className="eyebrow" style={{ marginTop: 22 }}>Current status</span>
            <h2 className="subheading" style={{ marginTop: 12 }}>No public testimonials approved yet.</h2>
            <p className="body-copy" style={{ marginTop: 12 }}>The information supplied for this website does not include actual testimonial text or publication permission. We will not create quotes, star ratings, names, or student outcomes to fill the page.</p>
          </div>
          <div className="card" style={{ padding: "clamp(24px,4vw,36px)" }}>
            <span className="eyebrow">Impact transparency</span>
            <h2 className="subheading" style={{ marginTop: 12 }}>What the evidence supports today</h2>
            <p className="body-copy" style={{ marginTop: 12 }}>The supplied founder brief reports four offline workshop sessions across three named school venues. It also outlines the three-day AI Buddy Den curriculum.</p>
            <p className="body-copy" style={{ marginTop: 10 }}>Verified participant totals, attendance records, measured learning gains, and approved testimonial wording were not included. They will be added only when documented.</p>
            <div style={{ marginTop: 17 }}><a className="text-link" href="/#impact-title">See experience and measurement approach <span aria-hidden="true">→</span></a></div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">Our feedback standard</span><h2 className="heading" style={{ marginTop: 15 }}>How a testimonial earns its place.</h2><p className="body-copy" style={{ marginTop: 12 }}>The process is intentionally manual. A form submission is not an automatic public review.</p></div>
        </div>
        <div className="grid-3">
          {process.map(item => { const Icon = item.icon; return <article key={item.title} className="card" style={{ padding: 24 }}><div className="icon-tile"><Icon size={21}/></div><h3 style={{ fontSize: 18, fontWeight: 760, lineHeight: 1.4, marginTop: 18 }}>{item.title}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 9 }}>{item.text}</p></article>; })}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "19px 0", marginTop: 22, borderTop: "1px solid #dedfe7" }}>
          <CheckCircle2 size={19} color="#4f46e5" style={{ flexShrink: 0, marginTop: 2 }}/>
          <p className="body-copy" style={{ fontSize: 13 }}>Children's names, photos, class details, and personal information are not published without appropriate permission. Parents or guardians should provide permission for a learner under 18.</p>
        </div>
      </div>
    </section>
    <section id="share-feedback" className="section">
      <div className="container" style={{ maxWidth: 960 }}>
        <div style={{ maxWidth: 720, marginBottom: 28 }}>
          <span className="eyebrow">Share feedback</span>
          <h2 className="heading" style={{ marginTop: 15 }}>Help us describe what really happened.</h2>
          <p className="body-copy" style={{ marginTop: 12 }}>Parents and guardians, educators, and adult participants can share a short first-hand account below. Please avoid sensitive information about children. Private feedback is the default.</p>
        </div>
        <FeedbackForm />
      </div>
    </section>
    <CtaBand title="Want to understand a program before enrolling?" description="Ask directly about the current curriculum, delivery format, schedule, fee, and what learners actually do during a session." primaryHref="/contact" primaryText="Contact ZIRO" secondaryHref="/programs" secondaryText="Explore programs"/>
  </>;
}
