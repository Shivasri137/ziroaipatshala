import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit, Check, Lightbulb, MessageSquareText, School, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { ButtonLink, CtaBand, SectionTitle } from "@/components/Ui";
import ImpactProof from "@/components/ImpactProof";

const methods = [
  { icon: BrainCircuit, title: "Understand the idea", copy: "Start with AI fundamentals in clear, age-appropriate language." },
  { icon: Wrench, title: "Experiment with tools", copy: "Explore prompts and useful AI tools with curiosity and care." },
  { icon: Lightbulb, title: "Apply what you learn", copy: "Try guided challenges and explain your thinking along the way." },
];
const venues = ["Sri Chaithanya High School", "KGR High School", "Model School, Kandlapally"];
const ideas = [
  { no: "01", title: "A smarter study planner", copy: "Explore how a prompt can turn learning goals into a manageable study plan.", tags: ["Prompting", "Productivity"] },
  { no: "02", title: "Waste-awareness activity", copy: "Use AI to help organise ideas for a school sustainability campaign.", tags: ["Creativity", "Problem-solving"] },
  { no: "03", title: "Library helper concept", copy: "Sketch a prototype that helps students think about organising books by topic.", tags: ["AI basics", "Prototyping"] },
];
export default function HomePage() {
  return <>
    <section style={{ padding: "64px 0 76px", background: "linear-gradient(180deg,#fbfaf8 0%,#fff 100%)", overflow: "hidden" }}>
      <div className="container home-hero-layout">
        <div>
          <div className="pill"><Sparkles size={14} /> Don&apos;t Just Learn AI. Build With It.</div>
          <h1 className="display" style={{ marginTop: 24, maxWidth: 650 }}>Future-Ready AI Education <span style={{ color: "#4f46e5" }}>for Schools.</span></h1>
          <p className="lead" style={{ maxWidth: 590, marginTop: 22 }}>Help students explore artificial intelligence through hands-on workshops, guided activities, and responsible AI learning shaped around their age group and school context.</p>
          <p className="body-copy" style={{ maxWidth: 580, marginTop: 12 }}>Students explore what AI is, practise writing prompts, examine AI-generated answers, and explain what they discover. The exact scope and session format are agreed with each school.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 27 }}>
            <ButtonLink href="/school-workshops#school-enquiry">Book a School Workshop</ButtonLink>
            <ButtonLink href="/programs" secondary>Explore Programs</ButtonLink>
          </div>
          <div style={{ marginTop: 21 }}>
            <Link href="/programs/ai-buddy-den" className="text-link">For parents and individual learners <ArrowRight size={15}/></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 23, color: "#747788", fontSize: 12 }}><ShieldCheck size={17} color="#4f46e5" /> Practical learning. Critical thinking. Responsible use.</div>
        </div>
        <div className="visual-grid" style={{ padding: "clamp(23px,3vw,32px)", minHeight: 435 }}>
          <div className="visual-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div><div style={{ fontSize: 11, letterSpacing: ".13em", color: "#b9bad0", fontWeight: 800 }}>ILLUSTRATIVE WORKSHOP PREVIEW</div><div style={{ fontSize: 22, fontWeight: 760, letterSpacing: "-.03em", marginTop: 8 }}>Learn it. Try it. Explain it.</div></div>
            <div style={{ borderRadius: 14, border: "1px solid #ffffff2b", padding: 11, color: "#c4baff", flexShrink: 0 }}><School size={25}/></div>
          </div>
          <div className="visual-inner" style={{ display: "grid", gap: 12, marginTop: 25 }}>
            <div style={{ border: "1px solid #ffffff20", borderRadius: 15, padding: 16, background: "#ffffff0b", display: "flex", gap: 14, alignItems: "flex-start" }}><div style={{ fontSize: 11, fontWeight: 850, color: "#b7abff", paddingTop: 3 }}>01</div><div><div style={{ fontSize: 15, fontWeight: 750 }}>Understand AI in everyday life</div><p style={{ fontSize: 12, color: "#b9bbce", lineHeight: 1.6, marginTop: 5 }}>Start with approachable examples and clear concepts.</p></div></div>
            <div style={{ border: "1px solid #ffffff20", borderRadius: 15, padding: 16, background: "#ffffff0b", display: "flex", gap: 14, alignItems: "flex-start" }}><div style={{ fontSize: 11, fontWeight: 850, color: "#8ce8c3", paddingTop: 3 }}>02</div><div><div style={{ fontSize: 15, fontWeight: 750 }}>Try a guided prompt activity</div><p style={{ fontSize: 12, color: "#b9bbce", lineHeight: 1.6, marginTop: 5 }}>Write instructions, compare results, and improve the question.</p></div></div>
            <div style={{ border: "1px solid #ffffff20", borderRadius: 15, padding: 16, background: "#ffffff0b", display: "flex", gap: 14, alignItems: "flex-start" }}><div style={{ fontSize: 11, fontWeight: 850, color: "#ffd58a", paddingTop: 3 }}>03</div><div><div style={{ fontSize: 15, fontWeight: 750 }}>Check and explain the result</div><p style={{ fontSize: 12, color: "#b9bbce", lineHeight: 1.6, marginTop: 5 }}>Look for mistakes and share what was learned.</p></div></div>
          </div>
          <p className="visual-inner" style={{ fontSize: 11, color: "#9fa2ba", lineHeight: 1.6, marginTop: 17 }}>Illustrative learning flow — not a photograph or a claim about a specific completed session.</p>
        </div>
      </div>
    </section>
    <section className="section"><div className="container">
      <SectionTitle eyebrow="How we learn" title="AI learning should be more than watching a demo." description="ZIRO's founder-led learning approach connects understandable concepts with guided experimentation. Students are encouraged to ask questions, check answers, and reflect on what they create." />
      <div className="grid-3">{methods.map((item,i) => { const Icon = item.icon; return <article className="card" key={item.title} style={{ padding: 25 }}><div className="icon-tile"><Icon size={22} /></div><div style={{ color: "#85889a", fontSize: 11, fontWeight: 800, letterSpacing: ".08em", marginTop: 23 }}>0{i+1}</div><h3 style={{ fontSize: 20, letterSpacing: "-.03em", marginTop: 8 }}>{item.title}</h3><p className="body-copy" style={{ marginTop: 10 }}>{item.copy}</p></article>})}</div>
    </div></section>
    <section className="section section-soft"><div className="container home-feature-layout">
      <div><span className="eyebrow">Flagship program</span><h2 className="heading" style={{ marginTop: 16 }}>Meet <span style={{ color: "#4f46e5" }}>AI Buddy Den.</span></h2><p className="lead" style={{ marginTop: 16 }}>A three-day online introduction to the world of artificial intelligence.</p><p className="body-copy" style={{ marginTop: 12 }}>Students explore AI fundamentals, prompting, practical tools, and a guided activity—at a beginner-friendly pace.</p><div style={{ display: "grid", gap: 12, marginTop: 24 }}>{["AI, ML, and DL basics", "Prompt engineering through experiments", "Practical tools and responsible use", "A simple activity to explain or present"].map(text => <div key={text} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: "#414454" }}><span style={{ width: 21, height: 21, borderRadius: 50, background: "#e5e3ff", color: "#4338ca", display: "grid", placeItems: "center", flexShrink: 0 }}><Check size={13} /></span>{text}</div>)}</div><div style={{ marginTop: 25 }}><ButtonLink href="/programs/ai-buddy-den">Explore AI Buddy Den</ButtonLink></div></div>
      <div style={{ background: "white", border: "1px solid #e6e5ef", borderRadius: 24, padding: 24 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><span className="pill">3-day online workshop</span><Sparkles size={21} color="#5a4ee6" /></div>
        {[["DAY 01","Discover artificial intelligence","Learn where AI appears and what it can—and cannot—do."],["DAY 02","Communicate with AI","Write clearer prompts and evaluate the results."],["DAY 03","Explore, create, present","Try a guided task and explain what you learned."]].map((d,i)=><div key={d[0]} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 12, padding: "22px 0", borderBottom: i===2 ? "none" : "1px solid #eeeef3" }}><div style={{ color: "#4f46e5", fontSize: 11, fontWeight: 800, paddingTop: 4 }}>{d[0]}</div><div><h3 style={{ fontSize: 16, fontWeight: 750 }}>{d[1]}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 6 }}>{d[2]}</p></div></div>)}
        <p className="notice">Upcoming dates, fee, age group, and session timings are shared after they are confirmed.</p>
      </div>
    </div></section>
    <section className="section"><div className="container">
      <SectionTitle eyebrow="Workshop experience" title="Practical AI learning, brought to schools." description="ZIRO offers introductory and hands-on AI workshops for school students. Final topics and format can be adapted to a school's needs." href="/school-workshops" linkText="Explore school workshops" />
      <div className="grid-3">{venues.map((v,i)=><div key={v} className="card" style={{ padding: 22, display: "flex", alignItems: "center", gap: 14 }}><div className="icon-tile" style={{ background: i===1 ? "#e9f8f1" : "#eeedff", borderColor: "transparent" }}><School size={21} /></div><div><h3 style={{ fontSize: 16, fontWeight: 750 }}>{v}</h3><p style={{ color: "#828596", fontSize: 12, marginTop: 5 }}>Venue listed from founder-supplied information</p></div></div>)}</div>
      <p style={{ color: "#858899", fontSize: 12, lineHeight: 1.7, marginTop: 16 }}>These names describe workshop experience supplied by the founder; they do not imply an ongoing partnership or endorsement.</p>
      <div style={{ marginTop: 22 }}><ButtonLink href="/contact?interest=school-workshop" secondary>Invite ZIRO to your school</ButtonLink></div>
    </div></section>
    <ImpactProof />
    <section className="section section-soft"><div className="container"><SectionTitle eyebrow="Ideas in progress" title="From curiosity to creation." description="These are example project ideas that could be explored in a learning session—not completed or verified student projects." href="/projects" linkText="View project ideas" />
      <div className="grid-3">{ideas.map(p=><article className="card" key={p.no} style={{ padding: 24 }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="eyebrow">Example idea</span><span style={{ color: "#9a9cab", font: "12px ui-monospace" }}>{p.no}</span></div><h3 style={{ fontSize: 20, fontWeight: 750, letterSpacing: "-.03em", marginTop: 24 }}>{p.title}</h3><p className="body-copy" style={{ marginTop: 10 }}>{p.copy}</p><div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 18 }}>{p.tags.map(t=><span key={t} className="pill">{t}</span>)}</div></article>)}</div>
    </div></section>
    <section className="section"><div className="container home-founder-layout">
      <div><span className="eyebrow">Meet the founder</span><h2 className="heading" style={{ marginTop: 15 }}>Learning is better when curiosity has a guide.</h2><p className="body-copy" style={{ marginTop: 17 }}>Shiva Sri Jonnala founded ZIRO AI PATASHALA to make AI education more practical and accessible for students. Through online and offline workshops, the focus is on concepts, useful tools, better questions, and applying what learners discover.</p><div style={{ marginTop: 24 }}><Link href="/about" className="text-link">Read about ZIRO <ArrowRight size={16} /></Link></div></div>
      <div className="founder-mini-card"><Image src="/images/founder-shiva.jpg" alt="Shiva Sri Jonnala, founder of ZIRO AI PATASHALA" width={340} height={510} style={{ width: 150, height: 205, objectFit: "cover", objectPosition: "center top", borderRadius: 15 }} /><div><span className="pill">Founder-led learning</span><h3 style={{ fontSize: 21, letterSpacing: "-.03em", fontWeight: 800, marginTop: 14 }}>Shiva Sri Jonnala</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 9 }}>Making AI concepts easier to explore, one practical learning experience at a time.</p></div></div>
    </div></section>
    <section className="section section-soft"><div className="container"><div className="home-feature-layout"><div><span className="eyebrow">Participant feedback</span><h2 className="heading" style={{ marginTop: 15 }}>The best proof comes from real experiences.</h2><p className="body-copy" style={{ marginTop: 13 }}>We are inviting parents, educators, and adult participants to share what happened in their own words. No invented quotes, ratings, or success stories.</p><div style={{ marginTop: 22 }}><Link href="/testimonials" className="text-link">Read our feedback policy <ArrowRight size={16}/></Link></div></div><div className="card" style={{ padding: 25, background: "#fff" }}><div className="icon-tile"><MessageSquareText size={21}/></div><h3 style={{ fontSize: 19, fontWeight: 760, marginTop: 17 }}>Testimonials are being collected.</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 9 }}>A quote appears publicly only after the wording, display name, and permission are checked. Student identities stay protected.</p><div style={{ marginTop: 18 }}><ButtonLink href="/testimonials" secondary>Share genuine feedback</ButtonLink></div></div></div></div></section>
    <CtaBand title="Ready to explore the world of AI?" description="Discover practical learning experiences for students or start a conversation about bringing a workshop to your school." primaryHref="/contact" primaryText="Contact ZIRO" secondaryHref="/programs" secondaryText="Explore programs" />
  </>;
}
