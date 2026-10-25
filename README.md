# ZIRO AI PATASHALA website

A responsive multi-page website for practical AI education for school students, parents, and schools. Built with Next.js App Router, TypeScript, React, and custom CSS.

## Pages
- `/` — Home
- `/about` — Founder, mission, and teaching philosophy
- `/programs` — Program directory
- `/programs/ai-buddy-den` — Three-day online introductory workshop
- `/school-workshops` — School workshop topics and enquiry form
- `/projects` — Filterable example project ideas (not claimed as completed student work)
- `/testimonials` — Honest empty state until approved feedback is available
- `/contact` — Contact details and enquiry form
- `/privacy`, `/terms`, `/refund-policy` — Draft policies requiring owner review

## Local setup
Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Visit http://localhost:3000. For a production check use `npm run lint` and `npm run build`.

## Configure deployment
Set `NEXT_PUBLIC_SITE_URL` to the confirmed public URL in your deployment environment. Until then, canonical URLs are omitted and the sitemap is empty rather than inventing a domain. Import this repository into Vercel or another Next.js-compatible host, then configure your domain DNS with that provider.

## Enquiry handling
No fake server submission is shown. The forms validate required fields and then provide WhatsApp and email links, so visitors explicitly choose how to send their enquiry. Add a trusted server-side form provider only after configuring private environment variables, validation, spam protection, and a retention policy.

## Assets
- `public/images/ziro-logo.png`: supplied ZIRO logo, preserved in its proportions and colours.
- `public/images/founder-shiva.jpg`: compressed web version of the supplied founder portrait.
- `app/icon.png`: favicon derived from the supplied logo.

## Before launch
Confirm the public domain, AI Buddy Den date/time/fee/age group/registration conditions, school-workshop claims and venue permissions, approved testimonials, actual social profiles, and final policy wording. Do not publish identifying information or photographs of minors without appropriate permissions. Policies are drafts, not a legal-compliance claim.
