import type { MetadataRoute } from "next";
const routes = ["", "/about", "/programs", "/programs/ai-buddy-den", "/school-workshops", "/projects", "/testimonials", "/contact", "/privacy", "/terms", "/refund-policy"];
export default function sitemap(): MetadataRoute.Sitemap {
 const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
 if (!configuredUrl) return [];
 const base = configuredUrl.replace(/\/$/, "");
 return routes.map(route => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7 }));
}
