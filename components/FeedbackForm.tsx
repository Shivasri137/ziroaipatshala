"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

const phone = "919059337639";
const email = "aiwithshivasri@gmail.com";

type FeedbackState = {
  name: string;
  role: string;
  program: string;
  venue: string;
  date: string;
  experience: string;
  impact: string;
  permission: "private" | "approved";
  display: "anonymous" | "first-name" | "full-name-role";
  contact: string;
  adultOrGuardian: boolean;
  quoteConsent: boolean;
  privacyAck: boolean;
};

const initial: FeedbackState = {
  name: "", role: "Parent / guardian", program: "AI workshop at a school",
  venue: "", date: "", experience: "", impact: "", permission: "private",
  display: "anonymous", contact: "", adultOrGuardian: false,
  quoteConsent: false, privacyAck: false,
};

export default function FeedbackForm() {
  const [fields, setFields] = useState<FeedbackState>(initial);
  const [status, setStatus] = useState("");
  const [ready, setReady] = useState(false);

  const update = <K extends keyof FeedbackState>(key: K, value: FeedbackState[K]) => {
    setFields(prev => ({ ...prev, [key]: value }));
    setReady(false);
    setStatus("");
  };

  const displayName = fields.display === "anonymous"
    ? "Anonymous"
    : fields.display === "first-name"
      ? (fields.name.trim().split(/\s+/)[0] || "First name only")
      : (fields.name.trim() || "Name not supplied") + (fields.role ? ` — ${fields.role}` : "");

  const message = `ZIRO AI PATASHALA — PARTICIPANT FEEDBACK
Relationship: ${fields.role}
Program / session: ${fields.program}
School / venue (optional): ${fields.venue || "Not supplied"}
Session date (optional): ${fields.date || "Not supplied"}
Name (for follow-up, optional): ${fields.name || "Not supplied"}
Preferred public display: ${displayName}
Contact (optional): ${fields.contact || "Not supplied"}

EXPERIENCE IN MY OWN WORDS:
${fields.experience}

SPECIFIC EXAMPLE OR CHANGE I OBSERVED:
${fields.impact || "Not supplied"}

PUBLICATION PERMISSION:
${fields.permission === "approved" ? "I approve the exact feedback text above for possible publication using the selected display name." : "Private feedback only. Please ask me before publishing anything."}

Please review this manually. This message does not automatically publish anything.`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const mailUrl = `mailto:${email}?subject=${encodeURIComponent("Participant feedback — ZIRO AI PATASHALA")}&body=${encodeURIComponent(message)}`;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fields.adultOrGuardian) {
      setStatus("Please confirm that you are an adult, or a parent/guardian helping a younger learner.");
      setReady(false);
      return;
    }
    if (fields.permission === "approved" && !fields.quoteConsent) {
      setStatus("To approve public use, please tick the separate publication-permission box. Otherwise choose private feedback.");
      setReady(false);
      return;
    }
    if (!fields.privacyAck) {
      setStatus("Please confirm that you understand how this form works.");
      setReady(false);
      return;
    }
    setReady(true);
    setStatus("Your feedback is prepared. Choose WhatsApp or email to send it to ZIRO. Nothing is stored here, and nothing is published automatically.");
  }

  return <div className="card" style={{ padding: "clamp(22px,4vw,34px)" }}>
    <div style={{ display: "flex", alignItems: "flex-start", gap: 13 }}>
      <div className="icon-tile"><MessageCircle size={21}/></div>
      <div>
        <h2 className="subheading">Share a real experience</h2>
        <p className="body-copy" style={{ marginTop: 7 }}>Specific, honest feedback is more useful than a generic five-star rating. A few sentences are enough.</p>
      </div>
    </div>
    <form onSubmit={submit} style={{ marginTop: 25 }}>
      <div className="form-grid">
        <div className="form-field"><label htmlFor="feedback-role">I am a… *</label><select id="feedback-role" required value={fields.role} onChange={e => update("role", e.target.value)}><option>Parent / guardian</option><option>Teacher / educator</option><option>School coordinator</option><option>Adult learner</option><option>Student with parent / guardian</option></select></div>
        <div className="form-field"><label htmlFor="feedback-program">Program / session *</label><select id="feedback-program" required value={fields.program} onChange={e => update("program", e.target.value)}><option>AI workshop at a school</option><option>AI Buddy Den</option><option>Prompt engineering session</option><option>Other ZIRO session</option></select></div>
        <div className="form-field"><label htmlFor="feedback-name">Name (optional)</label><input id="feedback-name" autoComplete="name" required={fields.permission === "approved" && fields.display !== "anonymous"} value={fields.name} onChange={e => update("name", e.target.value)} placeholder="Name for follow-up" /></div>
        <div className="form-field"><label htmlFor="feedback-contact">Email / phone (optional)</label><input id="feedback-contact" value={fields.contact} onChange={e => update("contact", e.target.value)} placeholder="Only if you want a follow-up" /></div>
        <div className="form-field"><label htmlFor="feedback-venue">School / venue (optional)</label><input id="feedback-venue" value={fields.venue} onChange={e => update("venue", e.target.value)} placeholder="Where the session took place" /></div>
        <div className="form-field"><label htmlFor="feedback-date">Session date (optional)</label><input id="feedback-date" type="date" value={fields.date} onChange={e => update("date", e.target.value)} /></div>
        <div className="form-field full"><label htmlFor="feedback-experience">What was your actual experience? *</label><textarea id="feedback-experience" required minLength={15} value={fields.experience} onChange={e => update("experience", e.target.value)} placeholder="What did you or the learner actually do, notice, or find useful? Write in your own words." /></div>
        <div className="form-field full"><label htmlFor="feedback-impact">A specific example of learning or change (optional)</label><textarea id="feedback-impact" value={fields.impact} onChange={e => update("impact", e.target.value)} placeholder="For example: a concept they can now explain, an activity they completed, or a question they started asking." /></div>
        <div className="form-field full"><label htmlFor="feedback-permission">Permission to publish *</label><select id="feedback-permission" value={fields.permission} onChange={e => update("permission", e.target.value as FeedbackState["permission"])}><option value="private">Private feedback — ask me before publishing</option><option value="approved">I approve the exact feedback text for possible publication</option></select><p style={{ fontSize: 12, color: "#737788", lineHeight: 1.65 }}>Private feedback is the default. If you approve publication, the founder will still review the message and confirm details before adding a quote to the website.</p></div>
        <div className="form-field full"><label htmlFor="feedback-display">If approved, display it as</label><select id="feedback-display" value={fields.display} onChange={e => update("display", e.target.value as FeedbackState["display"])}><option value="anonymous">Anonymous</option><option value="first-name">First name only</option><option value="full-name-role">Full name and role</option></select></div>
        <div className="full" style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <input id="feedback-adult" type="checkbox" required checked={fields.adultOrGuardian} onChange={e => update("adultOrGuardian", e.target.checked)} style={{ width: 16, height: 16, marginTop: 4, accentColor: "#4f46e5" }} />
          <label htmlFor="feedback-adult" style={{ fontSize: 12, lineHeight: 1.65, color: "#5f6374" }}>I am an adult, or a parent/guardian helping a learner under 18. I will not submit another child&apos;s personal information without appropriate permission. *</label>
        </div>
        {fields.permission === "approved" && <div className="full" style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <input id="feedback-publish-consent" type="checkbox" required checked={fields.quoteConsent} onChange={e => update("quoteConsent", e.target.checked)} style={{ width: 16, height: 16, marginTop: 4, accentColor: "#4f46e5" }} />
          <label htmlFor="feedback-publish-consent" style={{ fontSize: 12, lineHeight: 1.65, color: "#5f6374" }}>I have authority to give this permission and approve the exact feedback above for possible public display under the selected name format. For a learner under 18, a parent/guardian must approve. *</label>
        </div>}
        <div className="full" style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <input id="feedback-privacy" type="checkbox" required checked={fields.privacyAck} onChange={e => update("privacyAck", e.target.checked)} style={{ width: 16, height: 16, marginTop: 4, accentColor: "#4f46e5" }} />
          <label htmlFor="feedback-privacy" style={{ fontSize: 12, lineHeight: 1.65, color: "#5f6374" }}>I understand this form does not send information to or store it on the website. It prepares a WhatsApp or email message only; submitting it does not publish anything automatically. *</label>
        </div>
      </div>
      {status && <p role="status" aria-live="polite" className="notice" style={{ marginTop: 18 }}>{status}</p>}
      <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 22 }}>Prepare feedback <MessageCircle size={16}/></button>
      {ready && <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 13 }}>
        <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer" style={{ flex: 1 }}><MessageCircle size={16}/> Send on WhatsApp</a>
        <a className="btn btn-secondary" href={mailUrl} style={{ flex: 1 }}><Mail size={16}/> Send by email</a>
      </div>}
      <p style={{ display: "flex", gap: 7, alignItems: "flex-start", color: "#777b8b", fontSize: 11, lineHeight: 1.65, marginTop: 14 }}><ShieldCheck size={14} style={{ flexShrink: 0, marginTop: 2 }}/>Do not include sensitive student details. Only a human-reviewed, permissioned quote should ever appear publicly.</p>
    </form>
  </div>;
}
