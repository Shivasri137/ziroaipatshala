import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit, Check, Lightbulb, MessageSquareText, School, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { ButtonLink, CtaBand, SectionTitle } from "@/components/Ui";

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
    <section style={{ padding: "70px 0 80px", background: "linear-gradient(180deg,#fbfaf8 0%,#fff 100%)", overflow: "hidden" }}>
      <div className="container home-hero-layout">
        <div>
          <div className="pill"><Sparkles size={14} /> Practical AI education for curious minds</div>
          <h1 className="display" style={{ marginTop: 25, maxWidth: 680 }}>Don&apos;t Just Learn AI. <span style={{ color: "#4f46e5" }}>Build With It.</span></h1>
          <p className="lead" style={{ maxWidth: 575, marginTop: 24 }}>ZIRO AI PATASHALA helps students understand artificial intelligence through interactive workshops, practical AI tools, real-world challenges, and hands-on learning experiences.</p>
          <p className="body-copy" style={{ maxWidth: 560, marginTop: 12 }}>From AI fundamentals to machine learning, deep learning, and prompt engineering, take your first steps into the world of AI.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 27 }}><ButtonLink href="/programs">Explore Programs</ButtonLink><ButtonLink href="/contact?interest=AI%20Buddy%20Den" secondary>Enquire for a Workshop</ButtonLink></div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 28, color: "#747788", fontSize: 12 }}><ShieldCheck size={17} color="#4f46e5" /> Learn thoughtfully. Check AI outputs. Create responsibly.</div>
        </div>
        <div className="visual-grid" style={{ padding: "25px 25px 23px", minHeight: 460 }}>
          <div className="visual-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div><div style={{ fontSize: 11, letterSpacing: ".13em", color: "#b2b3ca", fontWeight: 750 }}>THE LEARNING LOOP</div><div style={{ fontSize: 21, fontWeight: 750, marginTop: 6 }}>Think → Try → Improve</div></div>
            <div style={{ borderRadius: 14, border: "1px solid #ffffff22", padding: 10, color: "#c4baff" }}><BrainCircuit size={25} /></div>
          </div>
          <div className="visual-inner learning-cards-layout" style={{ marginTop: 24 }}>
            <div style={{ background: "#ffffff0d", border: "1px solid #ffffff18", borderRadius: 16, padding: 16, minHeight: 123 }}><div style={{ color: "#b5aaff", fontSize: 12, fontWeight: 800 }}>01 / LEARN</div><BookOpen size={23} style={{ marginTop: 17 }} /><div style={{ fontWeight: 700, marginTop: 9 }}>Understand AI</div><div style={{ color: "#b9bbce", fontSize: 12, marginTop: 5 }}>Build the basics</div></div>
            <div style={{ background: "#ffffff0d", border: "1px solid #ffffff18", borderRadius: 16, padding: 16, minHeight: 123 }}><div style={{ color: "#8ce8c3", fontSize: 12, fontWeight: 800 }}>02 / EXPLORE</div><MessageSquareText size={23} style={{ marginTop: 17 }} /><div style={{ fontWeight: 700, marginTop: 9 }}>Ask better questions</div><div style={{ color: "#b9bbce", fontSize: 12, marginTop: 5 }}>Try prompts</div></div>
          </div>
          <div className="visual-inner hero-code" style={{ marginTop: 13 }}>
            <div><span className="purple">goal</span> = <span className="green">&quot;solve a small problem&quot;</span></div>
            <div><span className="purple">ask</span>(clear_question)</div><div><span className="purple">check</span>(the_answer)</div><div><span className="purple">improve</span>(your_idea)</div>
            <div style={{ borderTop: "1px solid #ffffff17", marginTop: 9, paddingTop: 9, color: "#9ea1b8" }}>A learning process — not magic.</div>
          </div>
          <div className="visual-inner" style={{ display: "flex", justifyContent: "space-between", marginTop: 16, color: "#b5b7c8", fontSize: 11 }}><span>Curiosity first</span><span>Responsibility always</span></div>
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
    <section className="section section-soft"><div className="container"><SectionTitle eyebrow="Ideas in progress" title="From curiosity to creation." description="These are example project ideas that could be explored in a learning session—not completed or verified student projects." href="/projects" linkText="View project ideas" />
      <div className="grid-3">{ideas.map(p=><article className="card" key={p.no} style={{ padding: 24 }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span className="eyebrow">Example idea</span><span style={{ color: "#9a9cab", font: "12px ui-monospace" }}>{p.no}</span></div><h3 style={{ fontSize: 20, fontWeight: 750, letterSpacing: "-.03em", marginTop: 24 }}>{p.title}</h3><p className="body-copy" style={{ marginTop: 10 }}>{p.copy}</p><div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 18 }}>{p.tags.map(t=><span key={t} className="pill">{t}</span>)}</div></article>)}</div>
    </div></section>
    <section className="section"><div className="container home-founder-layout">
      <div><span className="eyebrow">Meet the founder</span><h2 className="heading" style={{ marginTop: 15 }}>Learning is better when curiosity has a guide.</h2><p className="body-copy" style={{ marginTop: 17 }}>Shiva Sri Jonnala founded ZIRO AI PATASHALA to make AI education more practical and accessible for students. Through online and offline workshops, the focus is on concepts, useful tools, better questions, and applying what learners discover.</p><div style={{ marginTop: 24 }}><Link href="/about" className="text-link">Read about ZIRO <ArrowRight size={16} /></Link></div></div>
      <div className="founder-mini-card"><Image src="/images/founder-shiva.jpg" alt="Shiva Sri Jonnala, founder of ZIRO AI PATASHALA" width={340} height={510} style={{ width: 150, height: 205, objectFit: "cover", objectPosition: "center top", borderRadius: 15 }} /><div><span className="pill">Founder-led learning</span><h3 style={{ fontSize: 21, letterSpacing: "-.03em", fontWeight: 800, marginTop: 14 }}>Shiva Sri Jonnala</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 9 }}>Making AI concepts easier to explore, one practical learning experience at a time.</p></div></div>
    </div></section>
    <CtaBand title="Ready to explore the world of AI?" description="Discover practical learning experiences for students or start a conversation about bringing a workshop to your school." primaryHref="/contact" primaryText="Contact ZIRO" secondaryHref="/programs" secondaryText="Explore programs" />
  </>;
}
