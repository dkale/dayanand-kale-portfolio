/** Single source of truth for portfolio content. Edit here to update the site. */
// BASE_URL keeps links working both on Lovable ("/") and GitHub Pages ("/<repo>/").
const base = import.meta.env.BASE_URL;
export const profile = {
  name: "Dayanand Kale",
  initials: "DK",
  title: "Technical Architect | Solution Architect",
  subtitle: "Senior Software Engineer | Full-Stack Specialist",
  headline: "Engineering scalable systems. Architecting the future.",
  intro:
    "Technical / Solution Architect with 15+ years of experience designing, developing, and modernizing enterprise software systems. Specializing in distributed systems, cloud-native architecture, reusable engineering platforms, performance optimization, and AI-powered engineering workflows.",
  location: "Pune, India",
  email: "dkale86@gmail.com",
  phone: "+91 98609 94474",
  phoneHref: "tel:+919860994474",
  dateOfBirth: "13 October 1986",
  languages: ["English", "Hindi", "Marathi"],
  resumeUrl: `${base}Dayanand_Kale_Resume.pdf`,
  resumeFileName: "Dayanand_Kale_Resume.pdf",
  /** Replace the photo by dropping a new file into public/ and updating this path. */
  photoUrl: `${base}dayanand-kale-portrait.png` as string | null,
  heroTags: [".NET", "Azure", "Angular", "Distributed Systems", "Enterprise Architecture", "AI Engineering"],
};

export type Social = { label: string; href: string; kind: "linkedin" | "github" | "email" };
/** Add a GitHub entry here once the profile exists: { label: "GitHub", href: "...", kind: "github" } */
export const socials: Social[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dayanand-kale-3862332", kind: "linkedin" },
];

export const highlights = [
  { value: "15+", label: "Years of experience" },
  { value: "5", label: "Organizations" },
  { value: "3+", label: "Industry domains" },
  { value: "Enterprise", label: "Software & architecture" },
];

export const about = [
  "I started as a .NET developer building desktop and web applications, modernizing legacy systems and learning early that software lives far longer than the sprint that ships it. Over fifteen years that perspective carried me from developer to full-stack specialist and into solution architecture — designing enterprise platforms for agriculture, financial services, healthcare, and workflow management.",
  "My day-to-day spans C#/.NET, Angular, React and Microsoft Azure, with a focus on distributed systems: multi-tenant data platforms, event-driven integration, reusable frontend frameworks, and multi-layer caching. I care about engineering foundations that other teams build on — shared components, scaffolding tools, architectural guardrails and technical governance that make the right path the easy path.",
  "I believe good architecture is a series of deliberate trade-offs: maintainability over cleverness, measured performance over assumed performance, and engineering quality that serves business outcomes. Lately I've been exploring how AI-assisted engineering — Model Context Protocol, multi-agent workflows, and automated TDD validation — can amplify, not replace, sound engineering discipline.",
];

export type Tier = "architecture" | "core" | "tool";
export const expertise: { group: string; icon: string; tier: Tier; blurb: string; items: string[] }[] = [
  { group: "Enterprise & Solution Architecture", icon: "Network", tier: "architecture", blurb: "Structuring systems for scale, change and clear ownership.", items: ["Microservices Architecture", "Event-Driven Architecture", "Event Sourcing", "CQRS", "Domain-Driven Design", "Distributed Systems", "Multi-Tenant Architecture", "Modular Architecture", "Architectural Governance"] },
  { group: "Backend Engineering", icon: "Server", tier: "core", blurb: "Service and API design on the .NET platform.", items: ["C#", ".NET / ASP.NET Core", "Web API", "SignalR", "Node.js"] },
  { group: "Frontend Engineering", icon: "LayoutPanelTop", tier: "core", blurb: "Reusable, type-safe UI architectures for data-heavy apps.", items: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "RxJS", "Kendo UI"] },
  { group: "Cloud & Infrastructure", icon: "Cloud", tier: "core", blurb: "Cloud-native integration, deployment and observability.", items: ["Microsoft Azure", "Azure Functions", "Azure Service Bus", "Azure Blob Storage", "Docker", "Infrastructure as Code", "Bicep", "OpenTelemetry"] },
  { group: "Data & Performance Engineering", icon: "Database", tier: "core", blurb: "Storage, caching and query paths tuned with measurement.", items: ["Microsoft SQL Server", "RavenDB", "Redis", "FusionCache", "Distributed Caching", "Query Optimization", "Performance Engineering"] },
  { group: "AI & Agentic Engineering", icon: "Sparkles", tier: "architecture", blurb: "AI as an engineering amplifier, governed by tests.", items: ["GitHub Copilot", "Claude", "Model Context Protocol", "Multi-Agent Orchestration", "Agentic Test-Driven Development", "AI-Assisted Software Engineering"] },
  { group: "Engineering Practices & Tools", icon: "Wrench", tier: "tool", blurb: "Daily practices and tooling.", items: ["Test-Driven Development", "xUnit", "GitHub", "Visual Studio", "Visual Studio Code", "Azure DevOps", "ReSharper", "StyleCop"] },
];

export type Experience = { company: string; role: string; location?: string; period: string; summary: string; points: { title?: string; text: string }[]; tags: string[] };
export const experience: Experience[] = [
  {
    company: "AgData India Private Limited", role: "Senior Specialist Software Engineer – Solution / Enterprise Architecture", location: "Pune, India", period: "Feb 2024 – Present",
    summary: "Architecture and hands-on engineering for enterprise data, integration and developer platforms in the agriculture domain.",
    points: [
      { title: "Enterprise Data Platform Modernization", text: "Architected a high-throughput master data management platform with multi-tenant structures, entity matching, and ingestion pipelines." },
      { title: "Cloud-Native Integration", text: "Designed .NET integration solutions using Azure Functions, Azure Service Bus, Key Vault, Bicep, and OpenTelemetry." },
      { title: "Reusable Frontend Architecture", text: "Engineered CatalystGrid, a reusable Angular/Kendo UI framework with reactive state, type-safe generics, and virtual scrolling." },
      { title: "Developer Tooling", text: "Created a plugin-based .NET CLI tool using isolated AssemblyLoadContext instances and custom scaffolding templates." },
      { title: "Performance Engineering", text: "Implemented a multi-layer caching architecture using FusionCache and Redis, reducing microservice database latency by approximately 50%." },
      { title: "AI Engineering", text: "Co-developed SuperAgent, an AI orchestration platform integrating VS Code and GitHub Copilot with multi-agent workflows and automated TDD validation." },
    ],
    tags: [".NET", "Azure Functions", "Service Bus", "Bicep", "OpenTelemetry", "Angular", "Kendo UI", "Redis", "FusionCache", "RavenDB"],
  },
  {
    company: "Abjayon Inc.", role: "Senior Principal Software Engineer", location: "Hyderabad, India", period: "Feb 2023 – Feb 2024",
    summary: "Architecture and technical governance for enterprise workflow solutions.",
    points: [
      { text: "Architected a resilient multi-tenant file synchronization framework supporting SFTP and Azure Blob Storage." },
      { text: "Implemented concurrency throttling, differential synchronization, and fault recovery." },
      { text: "Designed scalable front-end architectures using React, Next.js, Redux, and reusable component systems." },
      { text: "Provided architectural consultation and technical governance for enterprise workflow solutions." },
      { text: "Worked on the Mitratech workflow management engagement." },
    ],
    tags: [".NET", "Azure Blob Storage", "SFTP", "React", "Next.js", "Redux"],
  },
  {
    company: "Synechron Technologies", role: "Technology Specialist", location: "Pune, India", period: "Jan 2015 – Feb 2023",
    summary: "Architectural design and front-end development for enterprise capital markets applications — MiddleBackOfficeIT engagements for Davidson Kempner and AQR Capital Management.",
    points: [
      { text: "Developed real-time P&L visualization dashboards." },
      { text: "Built reusable Angular and Kendo UI components and configurable grid export functionality." },
      { text: "Engineered a reconciliation engine using C#, ASP.NET Core, Web API, and SQL Server." },
      { text: "Primary technical liaison for requirements, solution design and production demos with client and on-site teams." },
      { title: "Engagements", text: "MiddleBackOfficeIT, Davidson Kempner and AQR Capital Management (capital markets)." },
    ],
    tags: ["Angular", "Kendo UI", "DevExtreme", "C#", "ASP.NET Core", "Web API", "SQL Server"],
  },
  {
    company: "Ohum Healthcare Solutions", role: "Software Developer", period: "Aug 2013 – Dec 2014",
    summary: "Modular desktop applications for the healthcare domain.",
    points: [
      { text: "Developed modular healthcare applications using C#, WPF, MEF, Prism, and MVVM." },
      { text: "Created reusable controls, audit reporting components, and generic PDF export functionality." },
      { text: "Worked on Alere ACS – System Manager and Vista Pharmacy engagements." },
    ],
    tags: ["C#", "WPF", "MEF", "Prism", "MVVM"],
  },
  {
    company: "Cybage Software Pvt. Ltd.", role: "Associate Software Developer", period: "Mar 2011 – Aug 2013",
    summary: "Web and desktop application development and legacy modernization.",
    points: [
      { text: "Developed applications using C#, ASP.NET, ASP.NET MVC, and WPF." },
      { text: "Modernized legacy desktop applications through .NET Framework migrations and refactoring." },
      { text: "Worked on ATM-MS Multi Choice Cash Advance and Cybage Green Desktop projects." },
    ],
    tags: ["C#", "ASP.NET MVC", "WPF", ".NET Framework"],
  },
];

export type DiagramKind = "platform" | "grid" | "agents" | "sync" | "cache" | "recon" | "microservices" | "events" | "cqrs" | "tenant" | "cloud" | "frontend";

export type Project = { id: string; title: string; summary: string; context: string; contribution: string; highlights: string[]; tech: string[]; diagram: DiagramKind; company: string };
export const projects: Project[] = [
  { id: "edp", title: "Enterprise Data Platform", company: "AgData", summary: "Master data management and entity matching at enterprise scale.", context: "Retail and agriculture data arrives from many sources and formats; downstream consumers need a single, trusted view of each entity.", contribution: "Architected the high-throughput platform: multi-tenant data structures, ingestion pipelines and entity matching workflows.", highlights: ["Multi-tenant data structures", "Ingestion pipelines supporting FTP, APIs, and email", "Entity matching and master data workflows", "Automated retailer export workflows"], tech: [".NET", "Azure", "Service Bus", "RavenDB"], diagram: "platform" },
  { id: "catalystgrid", title: "CatalystGrid", company: "AgData", summary: "Reusable Angular UI framework for enterprise data grids.", context: "Multiple teams were building similar data-heavy grid screens with inconsistent behaviour and duplicated effort.", contribution: "Engineered the framework and its public API so feature teams configure grids instead of re-implementing them.", highlights: ["Angular and Kendo UI", "Reactive state management", "Type-safe generics", "Virtual scrolling", "Standardized grid components"], tech: ["Angular", "TypeScript", "RxJS", "Kendo UI"], diagram: "grid" },
  { id: "superagent", title: "SuperAgent", company: "AgData", summary: "AI orchestration platform for software development workflows.", context: "AI coding assistants are powerful but unstructured; output quality depends on process, context and verification.", contribution: "Co-developed the platform integrating VS Code and GitHub Copilot with multi-agent workflows and automated TDD validation.", highlights: ["VS Code and GitHub Copilot integration", "Multi-agent development workflows", "Automated TDD validation", "Reflective memory loops", "Engineering productivity and code quality"], tech: ["GitHub Copilot", "VS Code", "MCP", "TDD"], diagram: "agents" },
  { id: "filesync", title: "Distributed File Synchronization", company: "Abjayon", summary: "Reliable multi-tenant file synchronization across SFTP and cloud storage.", context: "Tenants exchange large file sets across SFTP and Azure Blob Storage; transfers must be efficient and survive failures.", contribution: "Architected the framework including throttling, differential sync and recovery strategies.", highlights: ["SFTP and Azure Blob Storage", "Differential synchronization", "Concurrency throttling", "Fault recovery"], tech: [".NET", "Azure Blob Storage", "SFTP"], diagram: "sync" },
  { id: "caching", title: "Enterprise Caching Architecture", company: "AgData", summary: "Multi-layer distributed caching for microservices.", context: "Microservices were spending significant time on repeated database reads.", contribution: "Implemented a multi-layer caching architecture with FusionCache and Redis.", highlights: ["FusionCache and Redis", "Multi-layer caching", "Improved RavenDB query performance", "Approximately 50% reduction in microservice database latency"], tech: ["FusionCache", "Redis", "RavenDB", ".NET"], diagram: "cache" },
  { id: "recon", title: "Capital Markets Reconciliation Engine", company: "Synechron · Davidson Kempner / AQR", summary: "High-volume financial data reconciliation.", context: "Capital markets operations need to reconcile large volumes of positions and transactions across systems.", contribution: "Engineered the reconciliation engine and its extensible workflow model.", highlights: ["C# and ASP.NET Core", "Web APIs", "SQL Server", "Extensible reconciliation workflows"], tech: ["C#", "ASP.NET Core", "SQL Server"], diagram: "recon" },
];

export type CaseStudy = { problem: string; constraints: string[]; architecture: string; components: string[]; decisions: string[]; tradeoffs: string[]; quality: string[]; lessons: string[] };
export type ArchTopic = { id: string; title: string; summary: string; diagram: DiagramKind; caseStudy?: CaseStudy };
export const architecture: ArchTopic[] = [
  { id: "micro", title: "Microservices & Distributed Systems", diagram: "microservices", summary: "Services aligned to business capabilities, owning their data, communicating through well-defined contracts." },
  { id: "events", title: "Event-Driven Architecture", diagram: "events", summary: "Decoupling producers and consumers through messaging so systems evolve and scale independently.",
    caseStudy: { problem: "Multiple downstream systems need to react to data changes without tight coupling to the source service.", constraints: ["At-least-once delivery semantics", "Consumers deploy independently", "Traceability across hops"], architecture: "Producers publish domain events to a message broker topic; each consumer owns a subscription and processes idempotently.", components: ["Publisher with outbox", "Broker topics & subscriptions", "Idempotent consumers", "Dead-letter handling", "Distributed tracing"], decisions: ["Events describe facts, not commands", "Idempotency keys on every handler", "Correlation IDs propagated via OpenTelemetry"], tradeoffs: ["Eventual consistency vs. simpler synchronous calls", "Operational overhead of a broker"], quality: ["Retries with backoff and dead-letter queues", "Schema versioning for events", "Least-privilege access to topics"], lessons: ["Design for replay from day one", "Observability is part of the architecture, not an add-on"] } },
  { id: "cqrs", title: "Event Sourcing & CQRS", diagram: "cqrs", summary: "Separating write models from read models, optionally persisting state as a sequence of events." },
  { id: "tenant", title: "Multi-Tenant Platform Design", diagram: "tenant", summary: "Isolation, configuration and data partitioning strategies that let one platform serve many tenants safely.",
    caseStudy: { problem: "Serve many tenants from one platform while keeping data isolated and allowing tenant-specific configuration.", constraints: ["Strict tenant data isolation", "Per-tenant configuration and onboarding", "Shared operational cost"], architecture: "Tenant context resolved at the edge, propagated through every service and enforced at the data-access layer.", components: ["Tenant resolution middleware", "Tenant-scoped data access", "Configuration store", "Per-tenant ingestion pipelines"], decisions: ["Isolation enforced centrally, not per feature", "Tenant ID is part of every key and message"], tradeoffs: ["Shared schema efficiency vs. stronger physical isolation", "Noisy-neighbour risk managed with throttling"], quality: ["Automated isolation tests", "Per-tenant throttling and quotas", "Audit of cross-tenant access paths"], lessons: ["Make the tenant boundary impossible to forget", "Onboarding automation pays off quickly"] } },
  { id: "cache", title: "Distributed Caching & Performance", diagram: "cache", summary: "In-memory and distributed cache layers, with fail-safe and stampede protection, guided by measurement.",
    caseStudy: { problem: "Repeated reads against the database add latency and load across microservices.", constraints: ["Data freshness requirements vary by entity", "Multiple service instances", "Cache must never become a single point of failure"], architecture: "L1 in-process memory cache backed by an L2 distributed Redis cache, coordinated by a hybrid caching library with backplane invalidation.", components: ["L1 memory cache per instance", "L2 Redis cache", "Backplane for invalidation", "Fail-safe & soft timeouts"], decisions: ["Cache at the query boundary, not the controller", "Explicit TTLs per entity type", "Fail-safe to stale data when the source is slow"], tradeoffs: ["Staleness windows vs. latency", "Memory footprint per instance"], quality: ["Stampede protection", "Metrics on hit ratio and latency", "No sensitive data cached without need"], lessons: ["Measure before and after — intuition about hot paths is often wrong", "Invalidation design matters more than the cache store"] } },
  { id: "cloud", title: "Cloud-Native Integration & Resilience", diagram: "cloud", summary: "Serverless functions, messaging, secrets management and infrastructure as code with observability built in." },
  { id: "frontend", title: "Reusable Frontend Architecture", diagram: "frontend", summary: "Component frameworks with typed APIs and reactive state so feature teams compose rather than rebuild." },
  { id: "ai", title: "AI-Assisted Engineering Workflows", diagram: "agents", summary: "Agents bounded by tests, context and review — AI as an accelerator within an engineering process." },
];

export const aiPillars = [
  { icon: "Code2", title: "AI-assisted development", text: "GitHub Copilot and Claude woven into everyday coding, review and refactoring inside VS Code." },
  { icon: "Plug", title: "MCP & agentic engineering", text: "Model Context Protocol to give agents structured, governed access to tools and project context." },
  { icon: "Workflow", title: "Multi-agent orchestration", text: "Specialised agents for planning, implementation and review, coordinated in explicit workflows." },
  { icon: "FlaskConical", title: "Automated TDD validation", text: "Tests are the contract: agent output is accepted only when it passes the test suite." },
  { icon: "ShieldCheck", title: "Quality & productivity", text: "Faster delivery measured against maintainability, readability and coding standards." },
];

export const education = [
  { title: "Diploma in Advanced Computing", org: "C-DAC, ACTS, Pune", year: "2011" },
  { title: "Bachelor of Engineering – Computer Science", org: "University of Pune", year: "2010" },
];
/** Add verified certifications here: { title, issuer, year, url? } */
export const certifications: { title: string; issuer: string; year: string; url?: string }[] = [];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "architecture", label: "Architecture" },
  { id: "contact", label: "Contact" },
];
