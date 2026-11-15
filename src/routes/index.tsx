import { createFileRoute } from "@tanstack/react-router";
import { profile, socials } from "@/data/portfolio";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { AIEngineering } from "@/components/sections/AIEngineering";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const title = "Dayanand Kale — Technical & Solution Architect";
const description = "Technical / Solution Architect with 15+ years in enterprise software, distributed systems, Microsoft Azure, .NET, Angular and AI-assisted engineering. Based in Pune, India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.title,
        email: `mailto:${profile.email}`, telephone: profile.phone,
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
        sameAs: socials.map((s) => s.href),
        knowsAbout: ["Solution Architecture", "Distributed Systems", "Microsoft Azure", ".NET", "Angular", "AI-assisted software engineering"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Architecture />
        <AIEngineering />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
