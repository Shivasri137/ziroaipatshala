"use client";
import { useMemo, useState } from "react";
import { BookOpen, Lightbulb, Search, Sparkles } from "lucide-react";
import { CtaBand, PageHero } from "@/components/Ui";

const projects = [
  {
    title: "AI-assisted study planner",
    category: "Productivity",
    problem: "A learner has multiple topics and deadlines and wants to plan revision realistically.",
    concept: "Prompt design and evaluating AI-generated plans.",
    tools: "Not selected. Use age-appropriate tools only after the activity is scoped and reviewed.",
    deliverable: "A draft study plan, revised prompt, and brief check of the plan's realism.",
    skills: ["Prompting", "Planning", "Critical thinking"],
  },
  {
    title: "Waste-awareness activity",
    category: "Creative projects",
    problem: "A school wants to communicate one practical waste-reduction idea clearly.",
    concept: "Brainstorming, summarising, and reviewing AI-generated text.",
    tools: "Not selected. The idea can be planned on paper before any AI tool is chosen.",
    deliverable: "A campaign concept or poster outline, with factual claims checked before publication.",
    skills: ["Creativity", "Communication", "Fact-checking"],
  },
  {
    title: "School-library helper concept",
    category: "Problem-solving",
    problem: "Learners explore how a library might group books and help readers discover topics.",
    concept: "Classification and the idea of text categorisation.",
    tools: "No implementation stack selected; treat as a storyboard or concept until built.",
    deliverable: "A flow diagram explaining inputs, categories, and possible limitations.",
    skills: ["Systems thinking", "Classification", "Prototyping"],
  },
  {
    title: "Quiz-generation workflow",
    category: "Prompting",
    problem: "A learner wants practice questions and must check that they are accurate and appropriately difficult.",
    concept: "Prompting, generation, and output verification.",
    tools: "Not selected. Use an approved option only after the learning activity is scoped.",
    deliverable: "A small set of draft questions reviewed against trusted learning material.",
    skills: ["Prompt design", "Review", "Subject understanding"],
  },
];

const filters = ["All ideas", "Prompting", "Productivity", "Creative projects", "Problem-solving"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All ideas");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => projects.filter(project => {
    const matchesFilter = filter === "All ideas" || project.category === filter;
    const searchable = [project.title, project.problem, project.concept, project.deliverable, ...project.skills].join(" ").toLowerCase();
    return matchesFilter && searchable.includes(query.trim().toLowerCase());
  }), [filter, query]);

  return <>
    <PageHero eyebrow="Student projects" title="Project ideas with a learning purpose." description="Browse illustrative project ideas and see the problem, AI concept, possible output, and skills each could develop. These are proposed concepts—not completed student work or verified outcomes." />
    <section className="section">
      <div className="container">
        <div className="notice" style={{ marginBottom: 26 }}>Transparency note: every card is a proposed idea. Specific tools, screenshots, and implementation details are not claimed until an activity has been selected and completed with permission to publish.</div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 15, marginBottom: 25 }}>
          <label className="form-field" htmlFor="project-search"><span style={{ fontSize: 13, fontWeight: 750 }}>Search project ideas</span><div style={{ display: "flex", gap: 9, alignItems: "center", border: "1px solid #dfe1e9", borderRadius: 12, padding: "0 12px", background: "white" }}><Search size={17} color="#6d7081"/><input id="project-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Try prompting, classification, or planning" style={{ border: 0, outline: 0, minHeight: 47, width: "100%" }} /></div></label>
          <div aria-label="Filter project ideas" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{filters.map(item => <button type="button" key={item} onClick={() => setFilter(item)} className="btn" aria-pressed={filter === item} style={{ minHeight: 40, padding: "0 13px", fontSize: 12, background: filter === item ? "#4f46e5" : "white", color: filter === item ? "white" : "#484b5b", border: filter === item ? "1px solid #4f46e5" : "1px solid #e1e2ea" }}>{item}</button>)}</div>
        </div>
        <p className="body-copy" aria-live="polite" style={{ fontSize: 13, marginBottom: 16 }}>{visible.length} example {visible.length === 1 ? "idea" : "ideas"} shown.</p>
        <div className="grid-2">
          {visible.map((project, index) => <article key={project.title} className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: 23, background: index % 2 === 0 ? "#f0efff" : "#ecf8f2", minHeight: 124, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 15 }}>
              <div><span className="pill" style={{ background: "#ffffffc9" }}>Proposed project idea</span><p style={{ fontSize: 12, fontWeight: 750, color: "#606375", marginTop: 12 }}>{project.category}</p></div>
              <div aria-hidden="true" style={{ width: 63, height: 63, border: "1px solid #ffffffa8", borderRadius: 18, background: "#ffffffaa", display: "grid", placeItems: "center", color: "#4f46e5", flexShrink: 0 }}>{index % 3 === 0 ? <BookOpen size={26}/> : index % 3 === 1 ? <Sparkles size={26}/> : <Lightbulb size={26}/>}</div>
            </div>
            <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
              <h2 style={{ fontSize: 21, fontWeight: 780, letterSpacing: "-.03em" }}>{project.title}</h2>
              <div style={{ display: "grid", gap: 13, marginTop: 17 }}>
                {[["Problem being explored", project.problem], ["AI concept", project.concept], ["Tools / technologies", project.tools], ["What a learner could create", project.deliverable]].map(([label, text]) => <div key={label}><h3 style={{ fontSize: 12, fontWeight: 800, color: "#565a6b" }}>{label}</h3><p className="body-copy" style={{ fontSize: 13, marginTop: 4 }}>{text}</p></div>)}
              </div>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 17 }}>{project.skills.map(skill => <span className="pill" key={skill}>{skill}</span>)}</div>
              <p style={{ color: "#6e7181", fontSize: 11, marginTop: 18, borderTop: "1px solid #ececf2", paddingTop: 13 }}>Project status: proposed idea — not shown as completed student work.</p>
            </div>
          </article>)}
        </div>
        {visible.length === 0 && <div className="card" style={{ padding: 28, textAlign: "center" }}><p className="body-copy">No ideas match those filters. Try another search or choose “All ideas”.</p><button type="button" className="btn btn-secondary" onClick={() => { setFilter("All ideas"); setQuery(""); }} style={{ marginTop: 15 }}>Reset filters</button></div>}
        <p className="body-copy" style={{ fontSize: 12, marginTop: 24 }}>Any future student work should be reviewed with the learner, and appropriate parent/guardian permission for minors, before names, screenshots, or photographs are published.</p>
      </div>
    </section>
    <CtaBand title="Have a problem you want students to explore?" description="Discuss how an age-appropriate AI activity could fit your school or learner's goals." primaryHref="/school-workshops#school-enquiry" primaryText="Request a School Workshop Proposal" secondaryHref="/contact" secondaryText="Contact ZIRO" />
  </>;
}
