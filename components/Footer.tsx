import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  return <footer className="footer">
    <div className="container">
      <div className="footer-grid" style={{ paddingBottom: 45 }}>
        <div>
          <Link href="/" aria-label="ZIRO AI PATASHALA home" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "white", padding: "7px 12px", borderRadius: 12 }}>
            <Image src="/images/ziro-logo.png" alt="ZIRO logo" width={42} height={48} style={{ width: 38, height: 43, objectFit: "contain" }} />
            <span style={{ color: "#171923", fontWeight: 850, fontSize: 10, letterSpacing: ".06em" }}>AI PATASHALA</span>
          </Link>
          <p style={{ maxWidth: 290, color: "#b1b4c2", fontSize: 14, lineHeight: 1.8, marginTop: 18 }}>Practical AI learning for curious minds. Understand the concept, experiment with tools, and explore what you can create.</p>
          <p style={{ color: "#d9dbe4", fontSize: 12, fontWeight: 800, letterSpacing: ".08em" }}>DON&apos;T JUST LEARN AI. BUILD WITH IT.</p>
        </div>
        <div><div className="footer-label">Explore</div><div className="footer-links"><Link href="/">Home</Link><Link href="/about">About ZIRO</Link><Link href="/programs">Programs</Link><Link href="/projects">Student Projects</Link><Link href="/testimonials">Feedback</Link></div></div>
        <div><div className="footer-label">For schools</div><div className="footer-links"><Link href="/school-workshops">School Workshops</Link><Link href="/programs/ai-buddy-den">AI Buddy Den</Link><Link href="/contact?interest=school-workshop">Invite ZIRO</Link><Link href="/contact">Contact / Enrol</Link></div></div>
        <div><div className="footer-label">Get in touch</div><div className="footer-links">
          <a href="tel:+919059337639"><Phone size={14} style={{ verticalAlign: "middle", marginRight: 7 }} />+91 90593 37639</a>
          <a href="mailto:aiwithshivasri@gmail.com"><Mail size={14} style={{ verticalAlign: "middle", marginRight: 7 }} />Email ZIRO <ArrowUpRight size={12} style={{ display: "inline" }} /></a>
          <Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link><Link href="/refund-policy">Cancellation &amp; Refund</Link>
        </div></div>
      </div>
      <div style={{ borderTop: "1px solid #343645", paddingTop: 18, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", color: "#85899a", fontSize: 12 }}>
        <span>© {new Date().getFullYear()} ZIRO AI PATASHALA. All rights reserved.</span><span>Built for curious minds. Policies require review before launch.</span>
      </div>
    </div>
  </footer>;
}
