"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";

const phone = "919059337639";
const email = "aiwithshivasri@gmail.com";
const defaultMessage = "Hello ZIRO AI PATASHALA, I would like to know more about your AI workshops and programs.";
const interestOptions = ["AI Buddy Den", "School workshop", "AI project lab (future program)", "Prompt engineering workshop", "General enquiry"];

export default function EnquiryForm({ school = false }: { school?: boolean }) {
  const params = useSearchParams();
  const initialInterest = school ? "School workshop" : (params.get("interest") === "school-workshop" ? "School workshop" : (params.get("interest") || "AI Buddy Den"));
  const [status, setStatus] = useState("");
  const [prepared, setPrepared] = useState(false);
  const [fields, setFields] = useState({
    name: "", email: "", phone: "", interest: interestOptions.includes(initialInterest) ? initialInterest : "General enquiry",
    age: "", format: "", schoolName: "", city: "", classes: "", students: "", topics: "", message: "", consent: false,
  });
  const update = (key: string, value: string | boolean) => {
    setFields(prev => ({ ...prev, [key]: value }));
    setPrepared(false);
    setStatus("");
  };
  const waMessage = school
    ? `Hello ZIRO AI PATASHALA, I would like to enquire about a school workshop.
School: ${fields.schoolName}
Contact: ${fields.name}
Location: ${fields.city}
Classes/age range: ${fields.classes}
Approximate students: ${fields.students}
Format: ${fields.format}
Topics: ${fields.topics}
Phone/email: ${fields.phone} / ${fields.email}
Message: ${fields.message}`
    : `Hello ZIRO AI PATASHALA, I would like to enquire.
Name: ${fields.name}
Email: ${fields.email}
Phone: ${fields.phone}
Program: ${fields.interest}
Student age range: ${fields.age}
Preferred format: ${fields.format}
Message: ${fields.message}`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(waMessage || defaultMessage)}`;
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!fields.consent) { setPrepared(false); setStatus("Please confirm the privacy acknowledgement before continuing."); return; }
    setPrepared(true);
    setStatus("Your enquiry is prepared. Choose WhatsApp or email below to send it. This website does not store or submit form data.");
  }
  return <div className="card" style={{ padding: "clamp(22px,4vw,34px)" }}>
    <h2 className="subheading">{school ? "Tell us about your school" : "Send an enquiry"}</h2>
    <p className="body-copy" style={{ marginTop: 8, marginBottom: 24 }}>{school ? "Share a few details and we’ll prepare a conversation around your students and school’s needs." : "Parents and guardians are encouraged to enquire on behalf of younger students."}</p>
    <form onSubmit={submit}>
      <div className="form-grid">
        {school && <div className="form-field full"><label htmlFor="schoolName">School name *</label><input id="schoolName" required value={fields.schoolName} onChange={e => update("schoolName", e.target.value)} placeholder="Your school or institution" /></div>}
        <div className="form-field"><label htmlFor="contactName">{school ? "Contact person" : "Parent / contact name"} *</label><input id="contactName" required autoComplete="name" value={fields.name} onChange={e => update("name", e.target.value)} placeholder="Your name" /></div>
        <div className="form-field"><label htmlFor="contactEmail">Email address *</label><input id="contactEmail" type="email" required autoComplete="email" value={fields.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" /></div>
        <div className="form-field"><label htmlFor="contactPhone">Phone / WhatsApp {school ? "*" : "(optional)"}</label><input id="contactPhone" type="tel" autoComplete="tel" required={school} value={fields.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 ..." /></div>
        {school ? <>
          <div className="form-field"><label htmlFor="city">City / location *</label><input id="city" required value={fields.city} onChange={e => update("city", e.target.value)} placeholder="City, district" /></div>
          <div className="form-field"><label htmlFor="classes">Classes / age range *</label><input id="classes" required value={fields.classes} onChange={e => update("classes", e.target.value)} placeholder="e.g. Classes 6–9" /></div>
          <div className="form-field"><label htmlFor="students">Approx. number of students</label><input id="students" inputMode="numeric" value={fields.students} onChange={e => update("students", e.target.value)} placeholder="Approximate count" /></div>
          <div className="form-field"><label htmlFor="format">Preferred format *</label><select id="format" required value={fields.format} onChange={e => update("format", e.target.value)}><option value="">Choose a format</option><option>Offline at school</option><option>Online</option><option>Open to discussion</option></select></div>
          <div className="form-field full"><label htmlFor="topics">Topics of interest</label><input id="topics" value={fields.topics} onChange={e => update("topics", e.target.value)} placeholder="AI basics, prompting, responsible AI…" /></div>
        </> : <>
          <div className="form-field"><label htmlFor="interest">Program of interest *</label><select id="interest" required value={fields.interest} onChange={e => update("interest", e.target.value)}>{interestOptions.map(option => <option key={option}>{option}</option>)}</select></div>
          <div className="form-field"><label htmlFor="age">Student age / class (optional)</label><input id="age" value={fields.age} onChange={e => update("age", e.target.value)} placeholder="e.g. 12 years / Class 7" /></div>
          <div className="form-field"><label htmlFor="format">Preferred format</label><select id="format" value={fields.format} onChange={e => update("format", e.target.value)}><option value="">Choose an option</option><option>Online</option><option>Offline</option><option>Open to discussion</option></select></div>
        </>}
        <div className="form-field full"><label htmlFor="message">Message {school ? "*" : "(optional)"}</label><textarea id="message" required={school} value={fields.message} onChange={e => update("message", e.target.value)} placeholder={school ? "Tell us about your goals, preferred dates, or requirements." : "What would you like to know?"} /></div>
        <div className="full" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><input id="privacyConsent" type="checkbox" required checked={fields.consent} onChange={e => update("consent", e.target.checked)} style={{ marginTop: 4, width: 16, height: 16, accentColor: "#4f46e5" }} /><label htmlFor="privacyConsent" style={{ color: "#626776", fontSize: 12, lineHeight: 1.65 }}>I agree that the information above may be used to respond to this enquiry. I understand that this form does not submit data to a server. Please avoid sharing sensitive information about children.</label></div>
      </div>
      {status && <div role="status" aria-live="polite" className="notice" style={{ marginTop: 18 }}>{status}</div>}
      <button className="btn btn-primary" type="submit" style={{ width: "100%", marginTop: 22 }}>Prepare enquiry <MessageCircle size={16} /></button>
      {prepared && <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer" style={{ flex: 1 }}><MessageCircle size={16} /> Continue on WhatsApp</a>
        <a className="btn btn-secondary" href={`mailto:${email}?subject=${encodeURIComponent(school ? "School workshop enquiry — ZIRO AI PATASHALA" : "Enquiry — ZIRO AI PATASHALA")}&body=${encodeURIComponent(waMessage || defaultMessage)}`} style={{ flex: 1 }}><Mail size={16} /> Email instead</a>
      </div>}
      <p style={{ color: "#777b8b", fontSize: 11, lineHeight: 1.6, marginTop: 14 }}>Your information stays in this browser until you choose to open WhatsApp or your email app. Nothing is sent or stored by this website.</p>
    </form>
  </div>;
}
