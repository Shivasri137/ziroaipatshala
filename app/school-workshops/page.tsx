import { Suspense } from "react";
import { ArrowRight, BookOpenCheck, BrainCircuit, CheckCircle2, Lightbulb, MessageSquareText, School, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";
import { ButtonLink, PageHero } from "@/components/Ui";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "AI Workshops for Schools",
  description: "Request a proposal for hands-on AI workshops for school students. Explore practical activities, responsible AI learning, and school-specific planning with ZIRO AI PATASHALA.",
  alternates: process.env.NEXT_PUBLIC_SITE_URL ? { canonical: "/school-workshops" } : undefined,
};

const benefits = [
  { icon: BrainCircuit, title: "Understand AI", copy: "Introduce AI, machine learning, and deep learning through clear, age-appropriate examples." },
  { icon: MessageSquareText, title: "Practise better prompts", copy: "Try instructions, compare answers, and improve a prompt through guided experimentation." },
  { icon: ShieldCheck, title: "Question the output", copy: "Discuss mistakes, privacy, bias, and why important information needs checking." },
];
const topics = [
  { icon: BrainCircuit, title: "AI in everyday life", copy: "What AI is, where learners meet it, and where it can fall short." },
  { icon: BookOpenCheck, title: "AI, ML, and DL basics", copy: "Build an initial understanding of the concepts and how they relate." },
  { icon: MessageSquareText, title: "Prompt engineering", copy: "Turn a broad request into clearer instructions and test the difference." },
  { icon: ShieldCheck, title: "Responsible AI", copy: "Consider privacy, errors, bias, age-appropriate use, and verification." },
  { icon: Wrench, title: "Practical AI tools", copy: "Explore suitable tools for a task, subject to school policy and tool availability." },
  { icon: Lightbulb, title: "Guided project activity", copy: "Use an example problem to brainstorm, draft, revise, or present a simple concept." },
];
const agenda = [
  { number: "01", title: "Connect to a familiar problem", detail: "Start from a subject, task, or everyday use of AI that students can recognise." },
  { number: "02", title: "Understand the core idea", detail: "Introduce selected concepts using examples appropriate to the class or age group." },
  { number: "03", title: "Try a guided activity", detail: "Students experiment with a prompt or suitable AI-assisted task, where devices and policy allow." },
  { number: "04", title: "Check, reflect, and share", detail: "Review the output, discuss limitations, and explain one thing learned." },
];
const deliverables = [
  "A draft prompt and an improved version, where prompting is included.",
  "A short explanation, worksheet, or presentation from a guided activity, depending on the agreed scope.",
  "A simple checklist for checking AI-generated output and using tools responsibly.",
];

const faqs = [
  { q: "Which grades can participate?", a: "The grade range is not fixed on the website. Share your target classes and learning goals in the enquiry; suitability is confirmed during scoping." },
  { q: "Do students need prior AI knowledge?", a: "The workshop can be discussed as an introduction. Tell us the students' prior experience so the scope can be agreed before booking." },
  { q: "Are workshops conducted at schools?", a: "Offline school workshop experience has been reported by the founder. Online or offline delivery for a new request must be discussed and confirmed for the specific programme." },
  { q: "How long is a workshop?", a: "There is no single duration published for school workshops. Session length and agenda are agreed with the school before confirmation." },
  { q: "What equipment does the school need to provide?", a: "This depends on the chosen activity and format. We will agree on internet access, projector/display, student devices if needed, and staff supervision during the planning conversation." },
  { q: "What is the fee?", a: "Fees are not published because scope, group size, duration, and delivery needs have not been fixed. Use the enquiry form to request a proposal or quote." },
  { q: "Can the workshop be customised?", a: "The content can be discussed around the classes, timetable, device access, and learning goals. The final scope is confirmed before booking." },
  { q: "Can we request a demonstration?", a: "Mention this in the additional requirements field and the organiser can respond to discuss options. A demonstration is not automatically scheduled by this website." },
];

export default function SchoolWorkshopsPage() {
  return <>
    <PageHero
      eyebrow="For schools · AI learning"
      title="Hands-on AI workshops, planned around your school."
      description="Help students explore artificial intelligence through guided activities, clear explanations, and responsible-use discussions. Share your grade range and goals; ZIRO will discuss a suitable scope, format, schedule, and quote with you."
      actions={<><ButtonLink href="#school-enquiry">Request a School Workshop Proposal</ButtonLink><ButtonLink href="#workshop-agenda" secondary>See an example agenda</ButtonLink></>}
    />

    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">What schools get</span><h2 className="heading" style={{ marginTop: 15 }}>A practical introduction—not just a tool demonstration.</h2><p className="body-copy" style={{ marginTop: 12, maxWidth: 680 }}>The focus is on making concepts understandable, encouraging students to ask questions, and showing how to check AI output. The exact lesson and activities are scoped before the session.</p></div>
        </div>
        <div className="grid-3">{benefits.map(item => { const Icon = item.icon; return <article className="card" key={item.title} style={{ padding: 24 }}><div className="icon-tile"><Icon size={21}/></div><h3 style={{ fontSize: 18, fontWeight: 760, marginTop: 18 }}>{item.title}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 9 }}>{item.copy}</p></article>; })}</div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">Topics & activities</span><h2 className="heading" style={{ marginTop: 15 }}>Choose a useful starting point.</h2><p className="body-copy" style={{ marginTop: 12 }}>Topics are examples for planning; what is included depends on student level, session duration, available devices, and school policy.</p></div></div>
        <div className="grid-3">{topics.map(item => { const Icon = item.icon; return <article key={item.title} className="card" style={{ padding: 22 }}><div className="icon-tile"><Icon size={20}/></div><h3 style={{ fontSize: 17, fontWeight: 750, marginTop: 17 }}>{item.title}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 8 }}>{item.copy}</p></article>; })}</div>
      </div>
    </section>

    <section id="workshop-agenda" className="section">
      <div className="container home-feature-layout">
        <div>
          <span className="eyebrow">Example workshop flow</span>
          <h2 className="heading" style={{ marginTop: 15 }}>A clear path from concept to reflection.</h2>
          <p className="body-copy" style={{ marginTop: 13 }}>This is an illustrative agenda, not a promised fixed-duration session. The final sequence and timings are agreed in the proposal.</p>
          <div style={{ marginTop: 23, display: "grid", gap: 15 }}>{agenda.map(item => <div key={item.number} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}><span style={{ minWidth: 37, height: 37, display: "grid", placeItems: "center", background: "#eeedff", color: "#4338ca", borderRadius: 11, fontSize: 11, fontWeight: 850 }}>{item.number}</span><div><h3 style={{ fontSize: 16, fontWeight: 750 }}>{item.title}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 5 }}>{item.detail}</p></div></div>)}</div>
        </div>
        <div className="card" style={{ padding: "clamp(24px,4vw,34px)", background: "#191a2b", color: "white" }}>
          <div style={{ color: "#beb5ff", fontSize: 11, fontWeight: 850, letterSpacing: ".12em" }}>ILLUSTRATIVE LEARNING OUTPUTS</div>
          <h3 style={{ fontSize: 23, letterSpacing: "-.03em", lineHeight: 1.2, fontWeight: 760, marginTop: 15 }}>Something students can explain.</h3>
          <p style={{ color: "#c4c5d5", fontSize: 13, lineHeight: 1.75, marginTop: 10 }}>The purpose is to leave learners with a task they can describe, a result they can question, and a reason to keep learning—not a promise of a production-ready application.</p>
          <div style={{ display: "grid", gap: 13, marginTop: 22 }}>{deliverables.map(text => <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "#e4e4ee", lineHeight: 1.7 }}><CheckCircle2 size={16} color="#8ce8c3" style={{ flexShrink: 0, marginTop: 3 }}/>{text}</div>)}</div>
          <p style={{ color: "#aeb0c3", fontSize: 11, lineHeight: 1.6, marginTop: 20 }}>Illustrative deliverables only; the final output depends on the confirmed workshop plan.</p>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container grid-2">
        <div><span className="eyebrow">Planning & logistics</span><h2 className="heading" style={{ marginTop: 15 }}>The school and facilitator agree on the setup.</h2><p className="body-copy" style={{ marginTop: 12 }}>The enquiry is the starting point. The scope, date, duration, group size, supervision, tools, and price are confirmed before any booking.</p></div>
        <div className="card" style={{ padding: 24 }}>
          {[["Grades / age range","Agreed with the school; not pre-set here."],["Duration & agenda","Proposed after discussing timetable and goals."],["Devices & internet","Confirmed for the selected activity and format."],["School staff","Agree on adult supervision and classroom coordination."],["Fees & schedule","Request a proposal; nothing is booked by this form."],["Photos & student work","Separate appropriate permissions are required before publication."]].map(([label,desc])=><div key={label} style={{ display: "grid", gridTemplateColumns: "minmax(110px,.7fr) minmax(0,1.3fr)", gap: 14, padding: "13px 0", borderBottom: "1px solid #ececf2" }}><div style={{ fontSize: 13, fontWeight: 750 }}>{label}</div><div className="body-copy" style={{ fontSize: 12 }}>{desc}</div></div>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">Previous workshop experience</span><h2 className="heading" style={{ marginTop: 15 }}>A starting record, with context.</h2><p className="body-copy" style={{ marginTop: 12 }}>Founder-supplied information reports four offline workshop sessions across the school venues listed below. These references do not imply current partnerships, institutional endorsements, or school-approved testimonials.</p></div></div>
        <div className="grid-3">{["Sri Chaithanya High School", "KGR High School", "Model School, Kandlapally"].map(name => <article className="card" key={name} style={{ padding: 22, display: "flex", alignItems: "flex-start", gap: 13 }}><div className="icon-tile"><School size={20}/></div><div><h3 style={{ fontSize: 15, fontWeight: 760 }}>{name}</h3><p className="body-copy" style={{ fontSize: 12, marginTop: 6 }}>Venue reference supplied by the founder.</p></div></article>)}</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginTop: 20, padding: "18px 20px", border: "1px solid #e7e6f1", borderRadius: 16 }}>
          <div style={{ fontSize: 29, fontWeight: 850, letterSpacing: "-.06em", color: "#4338ca" }}>4</div><div style={{ flex: "1 1 230px" }}><p style={{ fontSize: 14, fontWeight: 750 }}>Offline sessions reported by the founder</p><p className="body-copy" style={{ fontSize: 12, marginTop: 4 }}>Participant totals, dates, grade ranges, and measured learning outcomes have not been supplied for public reporting.</p></div><Link href="/testimonials" className="text-link">Feedback & evidence <ArrowRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container home-feature-layout">
        <div><span className="eyebrow">Frequently asked questions</span><h2 className="heading" style={{ marginTop: 15 }}>Clear answers before a school books.</h2><p className="body-copy" style={{ marginTop: 12 }}>If a policy or programme detail has not been finalised, we say so and confirm it directly rather than guessing.</p><div style={{ marginTop: 22 }}><ButtonLink href="#school-enquiry">Request a School Workshop Proposal</ButtonLink></div></div>
        <div style={{ display: "grid", gap: 10 }}>{faqs.map(item => <details key={item.q} style={{ padding: "17px 18px", background: "white", border: "1px solid #e5e5ed", borderRadius: 13 }}><summary style={{ cursor: "pointer", fontWeight: 740, fontSize: 14, lineHeight: 1.5 }}>{item.q}</summary><p className="body-copy" style={{ fontSize: 13, marginTop: 11 }}>{item.a}</p></details>)}</div>
      </div>
    </section>

    <section id="school-enquiry" className="section">
      <div className="container school-enquiry-layout">
        <div>
          <span className="eyebrow">Next step for school leaders</span>
          <h2 className="heading" style={{ marginTop: 15 }}>Request a School Workshop Proposal.</h2>
          <p className="body-copy" style={{ marginTop: 13 }}>Tell us about your school, target grades, approximate group size, and goals. The organiser can then discuss scope, possible dates, delivery format, logistics, and a quote.</p>
          <div style={{ display: "grid", gap: 14, marginTop: 25 }}>{[{n:"01",t:"Share your context",d:"School, role, grades, group size, and workshop interest."},{n:"02",t:"Discuss fit and logistics",d:"Agree on learning goals, duration, devices, and format."},{n:"03",t:"Confirm proposal and fee",d:"Nothing is booked until the details are agreed directly."}].map(item=><div key={item.n} style={{ display: "flex", gap: 13 }}><span style={{ color: "#4338ca", fontSize: 12, fontWeight: 850, paddingTop: 3 }}>{item.n}</span><div><h3 style={{ fontSize: 15, fontWeight: 750 }}>{item.t}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 4 }}>{item.d}</p></div></div>)}</div>
        </div>
        <Suspense fallback={<div className="card" style={{ padding: 28 }}>Loading enquiry form…</div>}><EnquiryForm school/></Suspense>
      </div>
    </section>
    <section style={{ padding: "0 0 90px" }}><div className="container"><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 22, flexWrap: "wrap", padding: "clamp(24px,4vw,34px)", borderRadius: 21, background: "#191a2b", color: "white" }}><div><h2 className="subheading">Let&apos;s plan a useful first AI session.</h2><p style={{ color: "#c1c2d3", fontSize: 13, marginTop: 8 }}>Share your goals and request a workshop proposal.</p></div><ButtonLink href="#school-enquiry">Request a School Workshop Proposal</ButtonLink></div></div></section>
  </>;
}
