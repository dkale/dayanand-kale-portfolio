# Dayanand Kale — Architect Portfolio

## Direction
One long single page, as you asked, with a sticky nav that scrolls to each section. The look is calm and technical: thin grid lines, small node-and-link diagrams, sharp cards. It uses Manrope for text and a small monospace font for labels. Light mode is warm white with charcoal text and a deep indigo accent. Dark mode is deep slate with soft white text and the same indigo. The site follows your device's light or dark setting on the first visit and remembers your choice after that.

## Sections (in order)
1. **Nav**: "DK" mark plus your name, the 7 section links with the current one highlighted, theme switch, Download Résumé button, and a mobile menu.
2. **Hero**: your name, title, headline, intro, buttons for résumé, Let's Connect and LinkedIn, and 6 short tech labels. The right side shows the photo you uploaded (Dayanand_Kale_v2.png) in a portrait frame with fine diagram lines around it. You can swap the photo in one place.
3. **Highlights strip**: 15+ years · 5 organizations · 3+ domains · Enterprise Software & Architecture.
4. **About**: three paragraphs telling your story and how you approach engineering.
5. **Expertise**: 7 groups of tags. Architecture topics are highlighted, core tech is the standard style, and tools are quieter. There are no skill percentages.
6. **Experience**: a timeline of 5 companies with typed company names (no logos). Each entry opens to show its full highlights. I'll leave out the Synechron client names (Davidson Kempner, AQR) unless you confirm I can show them.
7. **Projects**: 6 cards, each with a simple line diagram. "View Case Study" opens a panel with context, your role, highlights and tech.
8. **Architecture**: 8 topics, each with a diagram. 3 or 4 of them open into full case studies covering the problem, constraints, design, decisions, trade-offs, reliability and lessons learned. Each one is labelled "Conceptual illustration, not production architecture".
9. **AI & Engineering**: SuperAgent gets the main spot, with a workflow diagram (agents → TDD check → memory loop) and points on Copilot, MCP and multiple agents.
10. **Education & Certifications**: your BE (Pune, 2010) and DAC (C-DAC ACTS, 2011), plus a "Certifications coming soon" spot.
11. **Contact**: headline, email button, LinkedIn, Pune, and a contact form. The form checks every field, catches spam with a hidden field and a minimum fill time, and shows sending, sent and failed states.
12. **Footer** and a back-to-top button.

## Contact form delivery
- The form is checked again on the server and then sent through Web3Forms, a free form-to-email service. The Web3Forms key stays on the server and never appears in the page.
- You'll need to get a free key at web3forms.com, which is linked to dkale86@gmail.com, and add it when I ask.
- Until the key is added, the form shows a clear "not set up yet, please email directly" message. It never pretends a message was sent.

## Résumé, SEO, accessibility
- The résumé download serves your uploaded PDF as `/Dayanand_Kale_Resume.pdf`.
- Search and sharing setup: page title, description, Open Graph tags, a generated 1200×630 sharing image, Person structured data, robots.txt, and a sitemap once the site has a public URL.
- Accessibility: proper page structure, a skip link, visible focus outlines, gentle fade-in on scroll that turns off for reduced-motion users, and lazy-loaded diagrams and images.
- I'll leave out your date of birth and phone number, and add no GitHub link until you have one.

## Technical details
- `src/data/*.ts` (profile, socials with an optional GitHub entry, expertise, experience, projects, architecture, education) is where all the content lives.
- `src/components/sections/*` holds one file per section. `src/components/portfolio/*` holds TechTag, ExperienceItem, ProjectCard, CaseStudyDialog, DiagramSvg, ThemeToggle and SocialLinks.
- `src/hooks/useActiveSection.ts` (IntersectionObserver) and `useTheme.ts` (localStorage plus the `.dark` class, with an inline head script so the page doesn't flash the wrong theme).
- Motion is added with `useReducedMotion`. The tokens in `src/styles.css` are oklch for both themes, plus a grid-pattern utility.
- The contact form uses a `createServerFn` with a zod check, then POSTs to the Web3Forms API using the `WEB3FORMS_ACCESS_KEY` secret.
- The photo is stored with lovable-assets as an asset pointer. The PDF is copied to `public/`.
- QA: I'll check mobile, tablet and desktop sizes and both themes with Playwright, and confirm there are no console errors.
