"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/school-workshops", label: "For Schools" },
  { href: "/projects", label: "Student Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header" style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(14px)" }} onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>
    <div className="container" style={{ minHeight: 78, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18 }}>
      <Link href="/" aria-label="ZIRO AI PATASHALA home" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Image src="/images/ziro-logo.png" alt="ZIRO" width={71} height={82} priority style={{ width: 50, height: 58, objectFit: "contain" }} />
        <span style={{ marginLeft: 5, fontSize: 10, letterSpacing: ".08em", fontWeight: 800, color: "var(--muted)", whiteSpace: "nowrap" }}>AI PATASHALA</span>
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav nav-links" style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {links.map(link => {
          const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(link.href + "/");
          return <Link key={link.href} href={link.href} className={`nav-link${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined} style={{ fontSize: 13, fontWeight: active ? 800 : 650, whiteSpace: "nowrap" }}>{link.label}</Link>;
        })}
      </nav>
      <div className="desktop-nav header-actions"><ThemeToggle /><Link className="btn btn-primary" href="/school-workshops#school-enquiry">Book a Workshop <ArrowUpRight size={16} /></Link></div>
      <div className="mobile-nav mobile-header-actions"><ThemeToggle compact /><button type="button" className="btn btn-secondary" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-site-navigation" onClick={() => setOpen(v => !v)} style={{ minHeight: 44, minWidth: 44, padding: "0 12px" }}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
    </div>
    {open && <nav id="mobile-site-navigation" aria-label="Mobile navigation" className="mobile-nav mobile-panel">
      {links.map(link => {
        const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(link.href + "/");
        return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>;
      })}
      <Link className="btn btn-primary" href="/school-workshops#school-enquiry" onClick={() => setOpen(false)} style={{ display: "flex", marginTop: 10 }}>Book a School Workshop <ArrowUpRight size={16} /></Link>
    </nav>}
  </header>;
}
