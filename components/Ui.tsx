import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: ReactNode }) {
  return <section className="page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1 className="heading" style={{ marginTop: 19 }}>{title}</h1><p className="lead" style={{ maxWidth: 760, marginTop: 18 }}>{description}</p>{actions && <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>{actions}</div>}</div></section>;
}
export function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`btn ${secondary ? "btn-secondary" : "btn-primary"}`} href={href}>{children}{secondary ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />}</Link>;
}
export function SectionTitle({ eyebrow, title, description, href, linkText }: { eyebrow?: string; title: string; description?: string; href?: string; linkText?: string }) {
  return <div className="section-heading"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2 className="heading" style={{ marginTop: eyebrow ? 15 : 0 }}>{title}</h2>{description && <p className="body-copy" style={{ marginTop: 13, maxWidth: 650 }}>{description}</p>}</div>{href && <Link className="text-link" href={href}>{linkText || "Learn more"} <ArrowRight size={16} /></Link>}</div>;
}
export function CtaBand({ title, description, primaryHref = "/contact", primaryText = "Talk to ZIRO", secondaryHref = "/programs", secondaryText = "Explore programs" }: { title: string; description: string; primaryHref?: string; primaryText?: string; secondaryHref?: string; secondaryText?: string }) {
  return <section style={{ padding: "28px 0 90px" }}><div className="container"><div style={{ borderRadius: 24, padding: "clamp(26px,5vw,54px)", background: "#f0efff", border: "1px solid #e5e2ff", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 30, flexWrap: "wrap" }}><div style={{ maxWidth: 650 }}><span className="eyebrow">Take the next step</span><h2 className="subheading" style={{ marginTop: 14 }}>{title}</h2><p className="body-copy" style={{ marginTop: 10 }}>{description}</p></div><div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}><ButtonLink href={primaryHref}>{primaryText}</ButtonLink><ButtonLink href={secondaryHref} secondary>{secondaryText}</ButtonLink></div></div></div></section>;
}
