import launchforgeImg from "@/assets/launchforge-screenshot.png"
import secondBrainImg from "@/assets/secondbrain-screenshot.png"
import drishtiLogo from "@/assets/1778194803804_1784759145362.png"
import morphixImg from "@/assets/1f898faa-8306-483a-b9f3-30069a4ec5fb_1785830102906.jpg"
import skillDnaImg from "@/assets/3b0d95de-01cd-44e2-8acf-4e759eb8c9c5_1785830078312.jpg"
import drishtiAppImg from "@/assets/64b3fc87-5789-4e8b-a74b-c8602b0405a0_1785830130285.jpg"
import drishtiUiImg from "@/assets/2e60bca4-ee12-4976-9e20-02da623b34b5_1785830136097.jpg"

export const PROJECTS_DATA = [
  {
    slug: "launchforge-ai",
    title: "LaunchForge AI",
    subtitle: "AI-Powered Startup Blueprint Generator",
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    duration: "4 weeks",
    url: "https://launchforgeai.bolt.host",
    image: launchforgeImg,
    overview: "LaunchForge AI transforms startup ideas into complete blueprints instantly. Describe your idea in plain English and the platform generates branding, database schema, pitch deck, and business plan in seconds.",
    problem: "First-time founders waste weeks trying to structure their startup idea before they can even validate it. There's no unified tool that goes from raw idea to investor-ready blueprint in minutes.",
    objective: "Build an AI-powered SaaS platform with a clean, trust-building landing page that converts curious visitors into active users.",
    designProcess: "Research → Wireframing → Visual Design → Prototype → Development",
    research: [
      "Analyzed competitor tools like Mixo, Durable, and Namelix.",
      "Identified user pain points through founder communities.",
      "Key insight: users wanted speed and completeness over customization."
    ],
    features: [
      "AI startup blueprint generation",
      "Branding suite",
      "Database schema generator",
      "Pitch deck creator",
      "No credit card required"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "AI APIs", "Bolt.new"],
    challenges: [
      "Making AI output feel trustworthy and structured",
      "Designing for zero-state and loaded states",
      "Pricing psychology"
    ],
    solutions: [
      "Progressive disclosure UI",
      "Animated generation states",
      "Trust signals (no credit card, 10-second generation), clean feature grid"
    ],
    learnings: [
      "Trust signals are as important as features for AI products.",
      "Animation of the generation process dramatically increases user engagement."
    ]
  },
  {
    slug: "second-brain-ai",
    title: "Second Brain AI",
    subtitle: "AI-Powered Personal Knowledge Management",
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    duration: "6 weeks",
    url: "https://secondbrainai-dwqy230.public.builtwithrocket.new",
    image: secondBrainImg,
    overview: "Second Brain AI is an intelligent knowledge management platform that helps users capture, connect, and chat with their knowledge. Features interactive mind maps, AI summaries, flashcards, and a personal library.",
    problem: "Knowledge workers collect information from dozens of sources but can never find or connect insights when they need them. Traditional note apps don't show relationships between ideas.",
    objective: "Design an intuitive knowledge graph interface that makes information feel discoverable and alive — not buried in folders.",
    designProcess: "Research → Information Architecture → Visual Design → Prototype → Development",
    research: [
      "Studied Roam Research, Obsidian, and Notion.",
      "Found that visual graph representations increase knowledge retention and retrieval speed by making connections visible."
    ],
    features: [
      "Interactive mind map with 14+ nodes",
      "AI-powered summaries",
      "Chat with notes",
      "Flashcard generation",
      "PDF support",
      "Knowledge graph visualization",
      "Tags & clustering"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "AI APIs", "Rocket.new"],
    challenges: [
      "Rendering a smooth interactive graph with 14+ nodes",
      "Designing the AI summary panel without cluttering the knowledge graph",
      "Information density vs clarity"
    ],
    solutions: [
      "Color-coded node clusters",
      "Collapsible side panels, persistent layout memory",
      "Smooth re-layout animations",
      "AI summary that contextualizes selected nodes"
    ],
    learnings: [
      "Graph-based UIs need careful color coding and clustering.",
      "The tension between information density and whitespace is the central design challenge for knowledge tools."
    ]
  },
  {
    slug: "drishti",
    title: "DRISHTI",
    subtitle: "Smart AI Accident Detection & Emergency Response System",
    year: "2024",
    role: "Brand Designer & UI/UX Designer",
    duration: "In Development",
    url: "https://ai-alert-system-1.preview.emergentagent.com/",
    image: drishtiAppImg,
    logoImage: drishtiLogo,
    uiScreens: [drishtiAppImg, drishtiUiImg],
    overview: "DRISHTI is an AI-powered safety system that detects road accidents in real-time and triggers emergency response protocols automatically. Named after the Sanskrit word for 'vision'.",
    problem: "Delayed emergency response leads to preventable fatalities in road accidents.",
    objective: "Create a modern, trustworthy brand identity and UI for a life-saving AI platform.",
    designProcess: "Brand Strategy → Logo Design → UI System → App Prototyping",
    research: [
      "Analyzed existing emergency response systems.",
      "Studied color psychology for safety and urgency.",
      "Explored Sanskrit typography and iconography."
    ],
    features: [
      "Real-time accident detection",
      "Automated emergency alerts",
      "Live location tracking",
      "First responder dashboard",
      "SOS emergency button",
      "Live GPS tracking",
      "Emergency contacts",
      "Safe routes",
      "Incident reporting",
      "Multi-language support",
      "Accident detection AI"
    ],
    techStack: ["Figma", "Adobe Illustrator", "React Native", "Python", "AI/ML", "Firebase"],
    challenges: [
      "Designing a brand that feels both high-tech and human-centric",
      "Balancing urgency with clarity in the UI"
    ],
    solutions: [
      "Developed a vibrant but professional color palette (pink-purple-blue gradient)",
      "Created the eye/shield motif representing constant vigilance"
    ],
    learnings: [
      "Brand design for safety critical systems requires rigorous attention to contrast and clarity."
    ]
  },
  {
    slug: "morphix",
    title: "Morphix",
    subtitle: "AI-Powered Interactive Motion Design Platform",
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    duration: "In Active Development",
    url: "https://bolt.new/p/69162054",
    status: "development",
    image: morphixImg,
    overview: "Morphix is the playground for motion engineers. Prototype, generate, and ship interface motion without leaving the browser. Combines a visual playground, AI-assisted motion generation, real-time previews, and physics-based interactions into one unified platform.",
    problem: "Animation workflows are fragmented across tools - developers write code blind, designers prototype in isolation, and there's no single place to experiment with production-ready motion.",
    objective: "Build the world's first all-in-one motion design playground where animation, creativity, AI, and development come together in a single seamless experience.",
    designProcess: "Concept → Design System → Landing Experience → Motion Playground → AI Integration",
    research: [
      "Analyzed Framer, LottieFiles, and Motion One workflows.",
      "Identified that motion engineers waste 60% of time context-switching between tools.",
      "Key insight: a browser-based visual playground removes all setup friction."
    ],
    features: [
      "Interactive Motion Playground with real-time animation editing",
      "AI Motion Studio for prompt-to-animation generation",
      "Component Universe with animated UI components",
      "Cursor Lab with custom interactive cursor effects",
      "Physics Lab  spring, gravity, elasticity simulations",
      "Multi-framework export (React, Next.js, Vue, Svelte)"
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "GSAP", "Three.js", "Supabase"],
    challenges: [
      "Designing a real-time animation editor that stays performant in-browser",
      "Building an AI that understands motion intent from natural language",
      "Keeping the UI intuitive for both designers and developers"
    ],
    solutions: [
      "Layered architecture separating animation runtime from editor UI",
      "Prompt-to-animation pipeline using OpenRouter AI",
      "Dual-mode interface: visual drag for designers, code export for developers"
    ],
    learnings: [
      "Motion products need to FEEL the product - the UI itself IS the demo.",
      "AI-assisted tools work best when they enhance creative intent, not replace it."
    ]
  },
  {
    slug: "skilldna",
    title: "SkillDNA",
    subtitle: "AI-Powered Professional Identity & Skill Verification Platform",
    year: "2025",
    role: "UI/UX Designer & Product Designer",
    duration: "In Active Development",
    url: null,
    status: "development",
    image: skillDnaImg,
    overview: "SkillDNA helps professionals prove their skills with real work, not just words. The platform automatically analyzes portfolios, GitHub repos, design work, and certifications to generate an interactive SkillDNA Profile with AI-powered insights, verified skill graphs, and personalized growth recommendations.",
    problem: "Traditional resumes are self-reported and unverified. Recruiters can't tell who's genuinely skilled vs who wrote a good CV. Talented people from non-traditional backgrounds are overlooked.",
    objective: "Build a trusted digital professional identity platform that makes hiring more fair, evidence-based, and opportunity-driven.",
    designProcess: "Research → Information Architecture → Design System → Profile Engine → Recruiter Dashboard",
    research: [
      "Analyzed LinkedIn, GitHub, and traditional hiring pipelines.",
      "Found that 73% of recruiters wish they could see verified evidence of skills.",
      "Insight: people trust proof over promises — real work speaks louder than bullet points."
    ],
    features: [
      "AI Skill Analysis & Verification",
      "Interactive Skill Graphs with real evidence",
      "GitHub & Portfolio Analysis",
      "Resume & Profile Builder",
      "Career Readiness Score",
      "AI Career Coach",
      "Interview Preparation",
      "Recruiter Dashboard"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Appwrite", "AI APIs", "React Flow", "Recharts"],
    challenges: [
      "Making AI skill verification feel trustworthy and transparent",
      "Designing skill graph visualization that's both beautiful and meaningful",
      "Balancing complexity for job seekers vs simplicity for recruiters"
    ],
    solutions: [
      "Evidence-first design — every skill badge links to proof",
      "React Flow for interactive, zoomable skill graph",
      "Dual dashboards: candidate profile vs recruiter analytics view"
    ],
    learnings: [
      "Trust is the core product in identity platforms — every design decision must reinforce it.",
      "Data visualization is most powerful when it tells a human story."
    ]
  },
  {
    slug: "novaai",
    title: "Nova AI",
    subtitle: "Next-Generation AI Assistant Platform",
    year: "2025",
    role: "UI/UX Designer & Frontend Developer",
    duration: "Live",
    url: "https://novaai-gamma.vercel.app",
    status: "live",
    image: null,
    overview: "Nova AI is a modern AI assistant platform with a premium conversational interface. Built with cutting-edge design and smooth interactions for a delightful user experience.",
    problem: "Most AI chat interfaces feel clinical and uninspiring. Users deserve a premium, emotionally engaging experience with their AI assistant.",
    objective: "To build an AI-powered career and productivity platform that helps users improve their resumes, prepare for interviews, manage tasks, and grow professtionally - all in one place.",
    designProcess: "Concept → Wireframe → Visual Design → Development",
    research: ["Analyzed ChatGPT, Claude, and Perplexity UX patterns.", "Focused on reducing cognitive friction in long conversations."],
    features: ["Premium conversational UI", "Real-time streaming responses", "Beautiful message animations", "Dark/light mode"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    challenges: ["Designing for long conversation threads without overwhelming the user"],
    solutions: ["Progressive message loading", "Smart context indicators", "Minimal but elegant UI chrome"],
    learnings: ["In AI products, the interface IS the product experience - every millisecond of perceived delay matters."]
  }
];
