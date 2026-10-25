"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/school-workshops", label: "School Workshops" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Feedback" },
];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#ffffffed", backdropFilter: "blur(14px)", borderBottom: "1px solid #e9e9ef" }}>
    <div className="container" style={{ minHeight: 78, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
      <Link href="/" aria-label="ZIRO AI PATASHALA home" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Image src="/images/ziro-logo.png" alt="ZIRO" width={71} height={82} priority style={{ width: 54, height: 62, objectFit: "contain" }} />
        <span style={{ marginLeft: 5, fontSize: 10, letterSpacing: ".08em", fontWeight: 800, color: "#656779", whiteSpace: "nowrap" }}>AI PATASHALA</span>
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav nav-links" style={{ display: "flex", alignItems: "center", gap: 23 }}>
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} style={{ fontSize: 13, fontWeight: pathname === link.href ? 800 : 650, color: pathname === link.href ? "#4338ca" : "#474959", whiteSpace: "nowrap" }}>{link.label}</Link>)}
      </nav>
      <div className="desktop-nav"><Link className="btn btn-primary" href="/contact">Enquire <ArrowUpRight size={16} /></Link></div>
      <div className="mobile-nav"><button type="button" className="btn btn-secondary" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(v => !v)} style={{ minHeight: 42, padding: "0 12px" }}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
    </div>
    {open && <nav aria-label="Mobile navigation" className="mobile-nav mobile-panel">
      {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)} style={{ color: "#4338ca" }}>Contact / Enrol <ArrowUpRight size={15} style={{ verticalAlign: "middle" }} /></Link>
    </nav>}
  </header>;
}
