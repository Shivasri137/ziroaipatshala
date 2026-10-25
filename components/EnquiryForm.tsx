"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";

const phone = "919059337639";
const email = "aiwithshivasri@gmail.com";
const defaultMessage = "Hello ZIRO AI PATASHALA, I would like to know more about your AI workshops and programs.";
const interestOptions = ["School workshop", "AI Buddy Den", "AI project lab (future program)", "Prompt engineering workshop", "General enquiry"];

export default function EnquiryForm({ school = false }: { school?: boolean }) {
  const params = useSearchParams();
  const initialInterest = school ? "School workshop" : (params.get("interest") === "school-workshop" ? "School workshop" : (params.get("interest") || "AI Buddy Den"));
  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState<"success" | "error" | "">("");
  const [prepared, setPrepared] = useState(false);
  const [fields, setFields] = useState({
    name: "", email: "", phone: "", role: "Teacher / coordinator", preferredDate: "", callbackTime: "Any convenient time", interest: interestOptions.includes(initialInterest) ? initialInterest : "General enquiry",
    age: "", format: "", schoolName: "", city: "", classes: "", students: "", topics: "", message: "", consent: false,
  });
  const update = (key: string, value: string | boolean) => {
    setFields(prev => ({ ...prev, [key]: value }));
    setPrepared(false);
    setStatus("");
    setStatusKind("");
  };
  const waMessage = school
    ? `Hello ZIRO AI PATASHALA, I would like to enquire about a school workshop.
School: ${fields.schoolName}
Contact: ${fields.name}
Role: ${fields.role}
Location: ${fields.city}
Classes/age range: ${fields.classes}
Approximate students: ${fields.students}
Format: ${fields.format}
Workshop interest: ${fields.interest}
Preferred date: ${fields.preferredDate || "Flexible / to discuss"}
Preferred callback: ${fields.callbackTime}
Topics: ${fields.topics}
Phone/email: ${fields.phone || "Not supplied"} / ${fields.email || "Not supplied"}
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
    if (school && !fields.email.trim() && !fields.phone.trim()) { setPrepared(false); setStatusKind("error"); setStatus("Please add at least one contact method: an email address or phone / WhatsApp number."); return; }
    if (!fields.consent) { setPrepared(false); setStatusKind("error"); setStatus("Please confirm the privacy acknowledgement before continuing."); return; }
    setPrepared(true);
    setStatusKind("success");
    setStatus(school ? "Your school enquiry is prepared. Choose WhatsApp or email below to send it. The website does not store or submit form data." : "Your enquiry is prepared. Choose WhatsApp or email below to send it. This website does not store or submit form data.");
  }
  return <div className="card" style={{ padding: "clamp(22px,4vw,34px)" }}>
    <h2 className="subheading">{school ? "Tell us about your school" : "Send an enquiry"}</h2>
    <p className="body-copy" style={{ marginTop: 8, marginBottom: 24 }}>{school ? "Share a few details and we’ll prepare a conversation around your students and school’s needs." : "Parents and guardians are encouraged to enquire on behalf of younger students."}</p>
    <form onSubmit={submit}>
      <div className="form-grid">
        {school && <div className="form-field full"><label htmlFor="schoolName">School name *</label><input id="schoolName" required value={fields.schoolName} onChange={e => update("schoolName", e.target.value)} placeholder="Your school or institution" /></div>}
        {school && <div className="form-field"><label htmlFor="contactRole">Your role *</label><select id="contactRole" required value={fields.role} onChange={e => update("role", e.target.value)}><option>Principal</option><option>School management</option><option>Teacher / coordinator</option><option>Parent / guardian</option><option>Other</option></select></div>}
        <div className="form-field"><label htmlFor="contactName">{school ? "Contact person" : "Parent / contact name"} *</label><input id="contactName" required autoComplete="name" value={fields.name} onChange={e => update("name", e.target.value)} placeholder="Your name" /></div>
        <div className="form-field"><label htmlFor="contactEmail">Email address {school ? "(optional if phone is provided)" : "*"}</label><input id="contactEmail" type="email" required={!school} autoComplete="email" value={fields.email} onChange={e => update("email", e.target.value)} placeholder="you@example.com" /></div>
        <div className="form-field"><label htmlFor="contactPhone">Phone / WhatsApp {school ? "(optional if email is provided)" : "(optional)"}</label><input id="contactPhone" type="tel" autoComplete="tel" value={fields.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 ..." /></div>
        {school ? <>
          <div className="form-field"><label htmlFor="city">City / location *</label><input id="city" required value={fields.city} onChange={e => update("city", e.target.value)} placeholder="City, district" /></div>
          <div className="form-field"><label htmlFor="classes">Classes / age range *</label><input id="classes" required value={fields.classes} onChange={e => update("classes", e.target.value)} placeholder="e.g. Classes 6–9" /></div>
          <div className="form-field"><label htmlFor="students">Approx. number of students</label><input id="students" inputMode="numeric" value={fields.students} onChange={e => update("students", e.target.value)} placeholder="Approximate count" /></div>
          <div className="form-field"><label htmlFor="format">Preferred format *</label><select id="format" required value={fields.format} onChange={e => update("format", e.target.value)}><option value="">Choose a format</option><option>Offline at school</option><option>Online</option><option>Open to discussion</option></select></div>
          <div className="form-field"><label htmlFor="preferredDate">Preferred date (optional)</label><input id="preferredDate" type="date" value={fields.preferredDate} onChange={e => update("preferredDate", e.target.value)} /></div>
          <div className="form-field"><label htmlFor="callbackTime">Preferred callback time</label><select id="callbackTime" value={fields.callbackTime} onChange={e => update("callbackTime", e.target.value)}><option>Any convenient time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div>
          <div className="form-field full"><label htmlFor="interest">Workshop interest *</label><select id="interest" required value={fields.interest} onChange={e => update("interest", e.target.value)}>{interestOptions.map(option => <option key={option}>{option}</option>)}</select></div>
          <div className="form-field full"><label htmlFor="topics">Topics / additional requirements</label><input id="topics" value={fields.topics} onChange={e => update("topics", e.target.value)} placeholder="AI basics, prompt engineering, timetable, accessibility…" /></div>
        </> : <>
          <div className="form-field"><label htmlFor="interest">Program of interest *</label><select id="interest" required value={fields.interest} onChange={e => update("interest", e.target.value)}>{interestOptions.map(option => <option key={option}>{option}</option>)}</select></div>
          <div className="form-field"><label htmlFor="age">Student age / class (optional)</label><input id="age" value={fields.age} onChange={e => update("age", e.target.value)} placeholder="e.g. 12 years / Class 7" /></div>
          <div className="form-field"><label htmlFor="format">Preferred format</label><select id="format" value={fields.format} onChange={e => update("format", e.target.value)}><option value="">Choose an option</option><option>Online</option><option>Offline</option><option>Open to discussion</option></select></div>
        </>}
        <div className="form-field full"><label htmlFor="message">Message {school ? "*" : "(optional)"}</label><textarea id="message" required={school} value={fields.message} onChange={e => update("message", e.target.value)} placeholder={school ? "Tell us about your goals, preferred dates, or requirements." : "What would you like to know?"} /></div>
        <div className="full" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><input id="privacyConsent" type="checkbox" required checked={fields.consent} onChange={e => update("consent", e.target.checked)} style={{ marginTop: 4, width: 16, height: 16, accentColor: "#4f46e5" }} /><label htmlFor="privacyConsent" style={{ color: "#626776", fontSize: 12, lineHeight: 1.65 }}>I agree that the information above may be used to respond to this enquiry. I understand that this form does not submit data to a server. Please avoid sharing sensitive information about children.</label></div>
      </div>
      {status && <div role={statusKind === "error" ? "alert" : "status"} aria-live="polite" className={statusKind === "error" ? "notice notice-error" : statusKind === "success" ? "notice notice-success" : "notice"} id="enquiry-status" style={{ marginTop: 18 }}>{status}</div>}
      <button className="btn btn-primary" type="submit" disabled={prepared} aria-describedby={status ? "enquiry-status" : undefined} style={{ width: "100%", marginTop: 22 }}>{prepared ? "Enquiry prepared" : "Prepare enquiry"} <MessageCircle size={16} /></button>
      {prepared && <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer" style={{ flex: 1 }}><MessageCircle size={16} /> Continue on WhatsApp</a>
        <a className="btn btn-secondary" href={`mailto:${email}?subject=${encodeURIComponent(school ? "School workshop enquiry — ZIRO AI PATASHALA" : "Enquiry — ZIRO AI PATASHALA")}&body=${encodeURIComponent(waMessage || defaultMessage)}`} style={{ flex: 1 }}><Mail size={16} /> Email instead</a>
      </div>}
      <p style={{ color: "#777b8b", fontSize: 11, lineHeight: 1.6, marginTop: 14 }}>Your information stays in this browser until you choose to open WhatsApp or your email app. Nothing is sent or stored by this website.</p>
    </form>
  </div>;
}
