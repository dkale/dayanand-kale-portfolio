/** Single source of truth for portfolio content. Edit here to update the site. */
// BASE_URL keeps links working on GitHub Pages project sites and custom domains.
const base = import.meta.env.BASE_URL;
export const profile = {
  name: "Dayanand Kale",
  initials: "DK",
  title: "Senior Specialist Software Engineer | Technical Architect",
  subtitle: "Enterprise Architecture · AI-Native Software Engineering · Agentic Systems",
  headline: "Designing scalable enterprise architectures, distributed systems, and cloud-native solutions.",
  intro:
    "I apply modern engineering practices, intelligent automation, and AI-assisted engineering to solve complex technical challenges and deliver measurable technical and operational outcomes.",
  location: "Pune, India",
  email: "dkale86@gmail.com",
  phone: "+91 98609 94474",
  phoneHref: "tel:+919860994474",
  languages: ["English", "Hindi", "Marathi"],
  resumeUrl: `2026-11_Resume_DayanandKale_FullStackArchitect.pdf`,
  resumeFileName: "2026-11_Resume_DayanandKale_FullStackArchitect.pdf",
  /** Replace the photo by dropping a new file into public/ and updating this path. */
  photoUrl: `${base}dayanand-kale-portrait.png` as string | null,
  heroTags: [".NET", "Azure", "Angular", "Distributed Systems", "AI Engineering", "Agentic Systems"],
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
  { value: "Production", label: "Software delivery" },
];

export const about = [
  "Over 15 years, I have moved from .NET desktop and web development into full-stack delivery and technical architecture, modernizing legacy applications and designing scalable enterprise systems.",
  "My work spans enterprise data platforms, cloud integrations, reusable UI frameworks, distributed caching, and AI-enabled developer tools. I stay hands-on with .NET, TypeScript, Angular, React, and Azure, building shared components and tooling that help teams deliver consistently.",
  "I use domain-driven and event-driven design, specification-driven development, and test-first validation to turn business requirements into maintainable systems. I partner with stakeholders, mentor distributed teams, and guide architecture and engineering standards. I also explore how AI-assisted and agentic workflows can improve productivity and code quality while keeping engineering discipline at the center.",
];

export type Tier = "architecture" | "core" | "tool";
export const expertise: { group: string; icon: string; tier: Tier; blurb: string; items: string[] }[] = [
  { group: "Systems & Software Architecture", icon: "Network", tier: "architecture", blurb: "Practical system design for change, scale and clear ownership.", items: ["Microservices Architecture", "Event-Driven Architecture", "Event Sourcing", "CQRS", "Domain-Driven Design", "Mediator Pattern", "Distributed Systems", "Multi-Tenant Design", "Modular Architecture", "Polly Resilience", "Circuit Breakers", "Rate Limiting", "Technical Governance", "Stakeholder Management"] },
  { group: "Backend Engineering", icon: "Server", tier: "core", blurb: "Service and API design on the .NET platform.", items: ["C#", ".NET 10", "ASP.NET Core", "Entity Framework Core", "Web API", "SignalR", "WPF", "Node.js"] },
  { group: "Frontend Engineering", icon: "LayoutPanelTop", tier: "core", blurb: "Reusable, type-safe UI architectures for data-heavy apps.", items: ["Angular 15", "React", "Next.js", "Redux", "Vue.js", "TypeScript", "JavaScript", "HTML", "RxJS", "Kendo UI", "ApexCharts", "Reusable UI Frameworks"] },
  { group: "Cloud & Infrastructure", icon: "Cloud", tier: "core", blurb: "Cloud-native integration, deployment and observability.", items: ["Microsoft Azure", "Azure Functions", "Azure Container Apps", "Azure Service Bus", "Azure Blob Storage", "Apache Kafka", "Kafka Streams", "Docker", "Infrastructure as Code", "Bicep", "OpenTelemetry"] },
  { group: "Data & Performance Engineering", icon: "Database", tier: "core", blurb: "Storage, caching and query paths tuned with measurement.", items: ["SQL", "Microsoft SQL Server", "RavenDB", "Redis", "SQLite", "FusionCache", "Distributed Caching", "Query Optimization", "Performance Engineering", "Performance Optimization"] },
  { group: "AI & Agentic Engineering", icon: "Sparkles", tier: "architecture", blurb: "AI as an engineering amplifier, governed by tests.", items: ["AI Coding Agents", "GitHub Copilot", "Codex", "Claude Code", "Agent Skills", "Repository Context Engineering", "Model Context Protocol", "AI Agent Orchestration", "Multi-Agent Orchestration", "Agentic Development Workflows", "Specification-Driven Development", "Agentic Test-Driven Development", "AI-Assisted Software Engineering"] },
  { group: "Engineering Practices & Tools", icon: "Wrench", tier: "tool", blurb: "Daily practices and tooling.", items: ["Full-Stack Development", "Software Development Lifecycle", "Test-Driven Development", "xUnit", "CI/CD Pipelines", "Central Package Management", "GitHub", "Visual Studio", "Visual Studio Code", "Azure DevOps", "SQL Server Management Studio", "Service Bus Explorer", "ReSharper", "StyleCop"] },
];

export type Experience = { company: string; role: string; location?: string; period: string; summary: string; points: { title?: string; text: string }[]; tags: string[] };
export const experience: Experience[] = [
  {
    company: "AgData India Private Limited", role: "Senior Specialist Software Engineer (Technical Architect)", location: "Pune, India", period: "Feb 2024 – Present",
    summary: "Enterprise architecture and hands-on delivery across a high-throughput MDM platform, AI-assisted engineering, cloud-native integrations, reusable UI frameworks, developer tooling and governance, and performance-focused caching.",
    points: [
      { title: "Enterprise Architecture & Data Platform Modernization", text: "Architected a high-throughput master data management platform supporting entity matching, multi-channel ingestion, multi-tenancy, and automated retailer exports." },
      { title: "AI-Assisted Engineering", text: "Co-developed SuperAgent, an enterprise AI orchestration platform integrating VS Code and GitHub Copilot with multi-agent workflows, automated TDD validation, and reflective memory loops." },
      { title: "Cloud-Native Integration & Resiliency", text: "Designed a .NET transmission platform integrating Agvance ERP through a two-phase ETL pipeline using Azure Functions, Service Bus, Key Vault, Bicep, and OpenTelemetry." },
      { title: "Reusable Frontend Architecture", text: "Engineered CatalystGrid, a reusable Angular/Kendo data-grid platform with reactive state, type-safe APIs, virtual scrolling, and progressive loading, standardizing UI architecture across teams." },
      { title: "Developer Tooling & Governance", text: "Created a plugin-based .NET CLI tool using isolated AssemblyLoadContext instances and custom scaffolding templates to reinforce architectural consistency across distributed development teams." },
      { title: "Performance Engineering", text: "Implemented multi-layer caching with FusionCache and Redis, reducing microservice database latency by approximately 50% and improving RavenDB query throughput under high concurrency." },
    ],
    tags: [".NET", "Azure Functions", "Azure Container Apps", "Azure Service Bus", "Key Vault", "Bicep", "OpenTelemetry", "Docker", "Angular", "Kendo UI", "Redis", "FusionCache", "RavenDB"],
  },
  {
    company: "Abjayon Inc.", role: "Senior Principal Software Engineer", location: "Hyderabad, India", period: "Feb 2023 – Feb 2024",
    summary: "Architecture, integration, and technical governance for multi-tenant enterprise workflow solutions.",
    points: [
      { title: "Distributed Systems & Integration Architecture", text: "Architected a multi-tenant file synchronization framework for SFTP and Azure Blob Storage, with concurrency throttling, differential synchronization, and fault recovery." },
      { title: "Front-End Architecture & Design Systems", text: "Led architecture for workflow dashboards and instrument-method editors using React, Next.js, Redux, and Vue.js, establishing reusable component libraries for consistent delivery." },
      { title: "Technical Consultation & Solutioning", text: "Advised enterprise stakeholders and translated business needs into technical specifications for distributed job scheduling, database optimization, and transient-fault handling." },
      { title: "Engineering Governance & Code Quality", text: "Strengthened engineering standards through architecture reviews, automated refactoring guidance, and technical approval gates for critical deployments." },
      { text: "Worked on the Mitratech workflow management engagement." },
    ],
    tags: ["C#", ".NET", "Azure Blob Storage", "SFTP", "React", "Next.js", "Redux", "Vue.js", "ApexCharts", "Azure DevOps"],
  },
  {
    company: "Synechron Technologies", role: "Technology Specialist", location: "Pune, India", period: "Jan 2015 – Feb 2023",
    summary: "Architectural design and front-end development for enterprise capital markets applications — MiddleBackOfficeIT engagements for Davidson Kempner and AQR Capital Management.",
    points: [
      { text: "Led architecture and front-end development for capital-markets applications, including real-time profit-and-loss dashboards." },
      { text: "Built reusable Angular and Kendo UI framework components, including configurable WYSIWYG grid exports for flexible reporting." },
      { text: "Engineered a reconciliation engine using C#, ASP.NET Core, Web API, and SQL Server to integrate high-volume financial data sources." },
      { text: "Served as a technical liaison for requirements, solution design, stakeholder communication, and production demonstrations with client and on-site teams." },
      { text: "Contributed across the software development lifecycle, aligning architecture, implementation practices, and delivery milestones across distributed teams." },
      { title: "Engagements", text: "MiddleBackOfficeIT, Davidson Kempner and AQR Capital Management (capital markets)." },
    ],
    tags: ["Angular 10", "Kendo UI", "DevEx Angular Components", "DevExtreme", "C#", "ASP.NET Core", "Web API", "SQL Server"],
  },
  {
    company: "Ohum Healthcare Solutions", role: "Software Developer", period: "Aug 2013 – Dec 2014",
    summary: "Modular healthcare applications focused on testability and maintainability.",
    points: [
      { text: "Developed loosely coupled healthcare applications using C#, WPF, MEF, Prism, and MVVM to improve testability and maintainability." },
      { text: "Created reusable controls, audit reporting components, and generic PDF export functionality." },
      { text: "Worked on Alere ACS – System Manager and Vista Pharmacy engagements." },
    ],
    tags: ["C#", ".NET", "WPF", "MEF", "Prism", "MVVM", "MVVM Light"],
  },
  {
    company: "Cybage Software Pvt. Ltd.", role: "Associate Software Developer", period: "Mar 2011 – Aug 2013",
    summary: "Web application development, reusable services, and legacy desktop modernization.",
    points: [
      { text: "Delivered web applications using C#, ASP.NET, and ASP.NET MVC, modularizing business logic into reusable web services." },
      { text: "Modernized legacy desktop applications through .NET Framework 4.0 migrations, hardware-workflow refactoring, and data-visualization development." },
      { text: "Worked on ATM-MS Multi Choice Cash Advance and Cybage Green Desktop projects." },
    ],
    tags: ["C#", "ASP.NET", "ASP.NET MVC", "WPF", ".NET Framework 4.0", "Web Services"],
  },
];

export type DiagramKind = "platform" | "grid" | "agents" | "sync" | "cache" | "recon" | "microservices" | "events" | "cqrs" | "tenant" | "cloud" | "frontend";

export type Project = { id: string; title: string; summary: string; context: string; contribution: string; highlights: string[]; tech: string[]; diagram: DiagramKind; company: string };
export const projects: Project[] = [
  { id: "edp", title: "Data Platform Modernization", company: "AgData", summary: "Master data management and entity matching across multiple sources.", context: "Retail and agriculture data arrives from many sources and formats; downstream consumers need a single, trusted view of each entity.", contribution: "Designed and implemented the data platform: multi-tenant structures, ingestion pipelines and entity matching workflows.", highlights: ["Multi-tenant data structures", "Ingestion pipelines supporting FTP, APIs, and email", "Entity matching and master data workflows", "Automated retailer export workflows"], tech: [".NET", "Azure", "Service Bus", "RavenDB"], diagram: "platform" },
  { id: "catalystgrid", title: "CatalystGrid", company: "AgData", summary: "Enterprise Angular data-grid platform that standardizes server paging, filtering, selection, editing, export and state across feature teams.", context: "Multiple teams were building similar data-heavy grid screens with inconsistent behaviour, duplicated server-state logic and different loading, filtering, export and persistence experiences.", contribution: "Designed and evolved the framework's architecture and public API so feature teams configure typed grids instead of rebuilding data-grid infrastructure. Separated component concerns into focused services for data loading, state, filtering, selection, editing, export, persistence and ellipsis handling.", highlights: ["Type-safe generic models and column configuration for Angular applications", "Reactive, centralized grid-state management for paging, sorting and filtering", "Server-side data loading with OData parameter extraction and request cancellation", "Batch and sliding-window progressive loading with TTL caching and context-aware invalidation", "Virtual scrolling, OnPush change detection and NgZone/RAF optimizations for large datasets", "Configurable in-cell editing, custom templates, validation and row-detail support", "Checkbox and row selection with clear-selection behavior across filter changes", "Chunked Excel export, filter-aware exports and configurable toolbar actions", "Automatic grid-state persistence with tenant-aware context and parent-state precedence", "Search-first display mode, configurable search, filter chips and responsive columns", "ResizeObserver-based scrollbar alignment to keep headers and data columns synchronized"], tech: ["Angular", "TypeScript", "RxJS", "Kendo UI", "OData", "localStorage"], diagram: "grid" },
  { id: "superagent", title: "SuperAgent", company: "AgData", summary: "AI orchestration platform for software development workflows.", context: "AI coding assistants are powerful but unstructured; output quality depends on process, context and verification.", contribution: "Co-developed the platform integrating VS Code and GitHub Copilot with multi-agent workflows and automated TDD validation.", highlights: ["VS Code and GitHub Copilot integration", "Multi-agent development workflows", "Automated TDD validation", "Reflective memory loops", "Engineering productivity and code quality"], tech: ["GitHub Copilot", "VS Code", "MCP", "TDD"], diagram: "agents" },
  { id: "filesync", title: "Tenant Document Sync: Azure Blob to SFTP", company: "Abjayon", summary: "A scheduled .NET console application that transfers TAP workflow documents from Azure Blob Storage to tenant SFTP destinations, using SQL Server as a per-file synchronization ledger.", context: "TAP needed tenant document copies for business continuity, plus a controlled way to run historical backfills. Successful transfers should not be rediscovered, and interrupted or failed work needed to be recoverable on later runs.", contribution: "Designed and implemented a provider-based transfer pipeline that resolves tenant destinations, pages through file descriptors, reconstructs source blob paths, and records each file's transfer state in SQL Server.", highlights: ["Differential processing: successful TenantDocumentSync records are excluded; new files are recorded as Pending, and Pending, Failed, and SourceFileNotFound work is revisited before new discovery", "Resumable status tracking records Transferred, Failed, and SourceFileNotFound outcomes, including the uploaded path and time for successful transfers", "Paged database queries, an async semaphore, and a configurable per-file size limit control batch size, transfer concurrency, and memory use", "A provider factory separates storage integrations; tenant configuration controls SFTP destination, optional GZip compression, and uploaded-versus-signed document folders", "Supports scheduled daily synchronization and tenant-specific historical runs, with process exit codes and transfer summaries for operations"], tech: [".NET", "SQL Server", "Entity Framework", "Azure Blob Storage", "SFTP", "GZip", "NLog"], diagram: "sync" },
  { id: "caching", title: "Distributed Caching & Performance", company: "AgData", summary: "Multi-layer distributed caching for microservices.", context: "Microservices were spending significant time on repeated database reads.", contribution: "Implemented a multi-layer caching solution with FusionCache and Redis.", highlights: ["FusionCache and Redis", "Multi-layer caching", "Improved RavenDB query performance", "Approximately 50% reduction in microservice database latency"], tech: ["FusionCache", "Redis", "RavenDB", ".NET"], diagram: "cache" },
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
