export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  overview: string[];
  problem?: string;
  features: ProjectFeature[];
  architecture?: string;
  highlights: string[];
  metrics?: ProjectMetric[];
  techStack: TechCategory[];
  tags: string[];
  year: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "blockblaster-ai",
    title: "BlockBlaster AI",
    description: "C++ puzzle solver that uses computer vision to extract board state and find optimal piece placements in real time.",
    longDescription:
      "Engineered a C++17 solver compiled to WebAssembly via Emscripten, running entirely in the browser with no backend. Leveraged OpenCV.js to extract an 8×8 board state using adaptive brightness-variance classification across multiple color themes. Implemented heuristic-guided backtracking with branch-and-bound pruning, achieving a 99.4% reduction in evaluated states versus brute force (1.57M → ~10K). Applied memoization for a 7× throughput increase, keeping typical solve time under 150 ms.",
    overview: [
      "Block Blast is a popular mobile puzzle game where players place groups of tiles on an 8×8 grid, clearing rows and columns when they fill up. Finding the optimal sequence of three simultaneous piece placements is a computationally hard search problem, since brute force evaluation blows up to over 1.57 million states per turn. BlockBlaster AI solves this in under 150 milliseconds, entirely in the browser, with no server involved.",
      "The solver is written in C++17 and compiled to WebAssembly via Emscripten, producing a 157 KB binary that executes in any modern browser. A heuristic-guided backtracking engine with branch-and-bound pruning reduces the search space by 99.4%, and a 64-bit XOR board-hash memoization layer adds a further 7× speedup by caching repeated position evaluations.",
      "Board state is extracted from uploaded screenshots using OpenCV.js running entirely client-side. The vision pipeline applies Canny edge detection and morphological dilation to localize the board, then classifies each of the 64 cells using bevel-contrast scoring, an approach that works across all Block Blast color themes without any retraining or recalibration.",
    ],
    problem:
      "Finding the optimal 3-piece placement sequence in Block Blast requires evaluating up to 1.57 million board states per turn. Brute force is far too slow for interactive use. The challenge was building a solver fast enough to run at interactive speeds with zero server infrastructure. Everything had to execute in the browser.",
    features: [
      {
        title: "Screenshot Board Detection",
        description:
          "Upload any Block Blast screenshot and the vision pipeline automatically localizes the 8×8 grid and classifies all 64 cells using OpenCV.js running entirely client-side, with no server call required.",
      },
      {
        title: "Heuristic Branch-and-Bound Solver",
        description:
          "Backtracking with branch-and-bound pruning explores only ~10K states per solve instead of 1.57M, achieving a 99.4% reduction in evaluated states while guaranteeing optimal piece placement.",
      },
      {
        title: "Memoized Position Lookups",
        description:
          "Results of simulateBlast() are cached using a 64-bit XOR board hash, delivering a 7× throughput increase for repeated position evaluations without any extra memory overhead.",
      },
      {
        title: "Interactive Board Editor",
        description:
          "Manually configure any 8×8 board layout using an interactive grid editor with 38 predefined Block Blast piece shapes, useful for puzzles where screenshot detection isn't perfect.",
      },
      {
        title: "Step-by-Step Animated Playback",
        description:
          "The solution viewer highlights each piece placement in sequence with autoplay and manual scrubbing, making optimal move sequences easy to follow and replicate in-game.",
      },
      {
        title: "Theme-Independent Vision",
        description:
          "Brightness-variance scoring with bevel-contrast thresholding accurately classifies cells across all Block Blast color themes, with no hardcoded pixel values and no retraining needed.",
      },
    ],
    architecture:
      "Two independently compiled components work together. The C++ solver (solver.cpp + solver_wasm.cpp + pieceLibrary.cpp) is compiled via Emscripten to a 157 KB WASM binary. Vercel serves the app with Cross-Origin-Opener-Policy: same-origin and Cross-Origin-Embedder-Policy: require-corp headers to unlock SharedArrayBuffer for multi-threaded WASM execution. The React frontend (Vite 5 + TypeScript 5) loads the WASM module and manages memory allocation via a heap bridge (malloc/free) exposed through Emscripten bindings. Board detection runs in a separate useBoardDetection hook using OpenCV.js 4.12: Canny edge detection → morphological dilation → contour extraction (scored by area and aspect ratio) → 8×8 cell grid → 16 brightness samples per cell → bevel-contrast classification.",
    highlights: [
      "Compiled C++17 to WebAssembly via Emscripten with SharedArrayBuffer for multi-threaded in-browser execution",
      "99.4% search-space reduction: 1.57M → ~10K evaluated states via heuristic-guided branch-and-bound pruning",
      "7× memoization speedup using 64-bit XOR board hash for simulateBlast() result caching",
      "Theme-independent cell classification via bevel-contrast scoring (mean + brightness range) across all Block Blast themes",
      "Vercel COOP/COEP headers (same-origin / require-corp) enable SharedArrayBuffer in cross-origin browser contexts",
      "Board localization via Canny edge detection → morphological dilation → contour scoring by area and aspect ratio",
    ],
    metrics: [
      { value: "99.4%", label: "state reduction" },
      { value: "7×", label: "memoization speedup" },
      { value: "<150ms", label: "solve time" },
      { value: "157 KB", label: "WASM binary" },
    ],
    techStack: [
      { name: "Solver", items: ["C++17", "Emscripten", "WebAssembly"] },
      { name: "Vision", items: ["OpenCV.js 4.12"] },
      { name: "Frontend", items: ["React 18", "TypeScript 5", "Vite 5"] },
      { name: "Styling", items: ["Tailwind CSS 3", "Framer Motion 11"] },
      { name: "Deployment", items: ["Vercel"] },
    ],
    tags: ["C++", "WebAssembly", "React", "TypeScript"],
    year: "2025",
    image: "/projects/blockblaster.png",
    githubUrl: "https://github.com/Joey239716/BlockBlast-Solver-CPP",
    liveUrl: "https://blockblasterai.vercel.app",
  },
  {
    slug: "fleetcomm",
    title: "FleetComm",
    description: "Distributed traffic simulation with V2V communication, dynamic rerouting, and a real-time browser interface.",
    longDescription:
      "Built a distributed traffic simulation with vehicle-to-vehicle communication and dynamic rerouting to improve fleet throughput. Designed a bidirectional Go gateway streaming simulation data over ZeroMQ PUB/SUB with browser command routing. Integrated Protocol Buffer deserialization to process and transform high-frequency C++ simulation frames for real-time downstream consumption.",
    overview: [
      "FleetComm is a distributed traffic simulation that lets you watch two driving paradigms compete side-by-side on a San Francisco road network. In Human Mode, 72 vehicles navigate using sight cones with reaction-time delays mimicking human drivers. Switch to V2V Mode and those same vehicles instantly begin broadcasting position and hazard status to neighbors, enabling collective fleet-wide response to incidents, with no human reaction time and no blind spots.",
      "The system uses a three-tier distributed architecture. A C++ simulation engine runs physics calculations, Dijkstra pathfinding, and collision/breakdown logic at high frequency, publishing compressed WorldState frames as Protocol Buffer messages over ZeroMQ PUB/SUB. A Go gateway subscribes, deserializes, transforms to JSON, and fans the updates out to all connected browser clients over WebSocket. A React/Leaflet frontend renders vehicle positions in real time and routes mode-switch commands back upstream to the simulation.",
      "The Protocol Buffer serialization pipeline was central to handling high-frequency simulation frames efficiently. The Go gateway performs selective state transformation before broadcasting, filtering out noise and shaping data for the frontend's consumption. The bidirectional command channel means the browser can toggle V2V mode mid-simulation without a restart or a reconnect.",
    ],
    problem:
      "Quantifying the real-world throughput benefits of V2V communication requires a realistic, visually compelling simulation. The technical challenge was building a data pipeline that could carry high-frequency C++ simulation frames to a live browser interface without data loss, while keeping a bidirectional command channel open for interactive mode switching.",
    features: [
      {
        title: "Dual Driving Modes",
        description:
          "Toggle between Human Mode (sight cones, reaction delays) and V2V Mode (broadcast-based collective response) mid-simulation without any restart or reconnection.",
      },
      {
        title: "72-Vehicle Fleet Simulation",
        description:
          "Diverse vehicle types (Tesla Model 3, Ford Transit, Toyota Prius, BMW i3, Honda Civic) each with independent pathfinding, collision detection, and breakdown simulation running at full speed.",
      },
      {
        title: "Real-Time Leaflet Map",
        description:
          "Vehicle positions render on an interactive San Francisco map via Leaflet.js, updating smoothly frame-by-frame as WebSocket messages arrive from the Go gateway.",
      },
      {
        title: "ZeroMQ PUB/SUB Pipeline",
        description:
          "C++ simulation publishes WorldState frames to a ZMQ PUB socket. The Go gateway subscribes, deserializes Protocol Buffers, and fans the transformed state out to all connected browser clients simultaneously.",
      },
      {
        title: "Dijkstra Pathfinding",
        description:
          "Each of the 72 vehicles independently computes shortest-path routes on the road graph, with dynamic rerouting kicking in automatically around breakdowns and collision events.",
      },
      {
        title: "Bidirectional Gateway",
        description:
          "The Go gateway simultaneously streams state downstream to browsers and routes interactive commands (mode switches) upstream to the C++ engine over a separate ZMQ PUSH/PULL channel.",
      },
    ],
    architecture:
      "Three-tier distributed system: C++ Simulation Engine → Go WebSocket Gateway (port 8080) → React/Leaflet Frontend (port 5173). The C++ engine maintains a physics loop, runs Dijkstra pathfinding per vehicle, handles collisions and breakdowns, and publishes WorldState protobuf messages to a ZMQ PUB socket. The Go gateway subscribes via ZMQ SUB, deserializes the protobuf frames using generated Go bindings, converts state to JSON, and broadcasts to all connected browser WebSocket clients. Browser mode-switch commands travel the reverse path: frontend WebSocket → Go gateway handler → ZMQ PUSH socket → C++ engine PULL socket. CMake 3.20+ manages the C++ build with Visual Studio Build Tools on Windows.",
    highlights: [
      "Bidirectional ZeroMQ PUB/SUB + PUSH/PULL channels for fully decoupled C++↔browser communication",
      "Protocol Buffer deserialization in Go for high-frequency WorldState frames published by the C++ simulation engine",
      "Dijkstra shortest-path routing per vehicle with dynamic rerouting around real-time breakdowns and collisions",
      "ZMQ fan-out architecture: a single simulation publisher serves arbitrary numbers of connected browser clients",
      "CMake 3.20+ cross-platform build system with Visual Studio Build Tools for Windows C++ compilation",
      "Simultaneous downstream state streaming and upstream command routing through the same Go gateway process",
    ],
    techStack: [
      { name: "Simulation", items: ["C++", "ZeroMQ", "CMake 3.20+"] },
      { name: "Gateway", items: ["Go 1.21+"] },
      { name: "Serialization", items: ["Protocol Buffers"] },
      { name: "Frontend", items: ["React", "TypeScript", "Leaflet.js"] },
    ],
    tags: ["C++", "Go", "React", "ZeroMQ", "Protobuf", "CMake", "Leaflet"],
    year: "2025",
    githubUrl: "https://github.com/Joey239716/fleetcomm",
  },
  {
    slug: "theipostreet",
    title: "TheIpoStreet",
    description: "Web platform ingesting and displaying SEC filings with AI-powered summaries and a Redis-backed caching layer.",
    longDescription:
      "Developed TheIpoStreet.com, a web platform that ingests and displays SEC filings using the OpenAI GPT API. Minimized redundant database API calls by implementing a Redis cache-aside pattern to avoid reprocessing filings. Decreased asset load times by migrating binary files out of the database and into S3-compatible object storage. Cut infrastructure costs by offloading API handling to Cloudflare serverless functions for scalable deployment.",
    overview: [
      "TheIpoStreet.com is a live web platform that monitors SEC EDGAR daily filings to surface IPO candidates, specifically S-1 and S-1/A forms, before they appear in mainstream financial media. A Python worker polls the SEC's daily filing index every business day, intelligently skipping weekends and holidays, and triggers AI-powered GPT summaries for each new filing it discovers.",
      "The infrastructure was engineered to minimize costs at every layer. Binary filing documents that were previously stored directly in PostgreSQL were migrated to S3-compatible object storage, dramatically cutting asset load times and database egress costs. A Redis cache-aside layer in front of the Flask API ensures repeated lookups for the same filing hit cache instead of triggering redundant database queries and paid GPT API calls.",
      "API handling is offloaded to Cloudflare serverless functions at the edge, allowing the backend to scale down while maintaining globally low latency. The frontend is a Next.js application with TypeScript, rendering structured filing data fast and linking directly to the official SEC.gov source documents.",
    ],
    problem:
      "IPO filings are publicly available on SEC EDGAR but difficult to monitor continuously. Most retail investors only hear about upcoming IPOs after media coverage, by which point the opportunity window has narrowed significantly. TheIpoStreet automates detection at the source, surfacing filings the moment they appear in the SEC's daily index.",
    features: [
      {
        title: "Real-Time SEC EDGAR Monitoring",
        description:
          "Python worker polls the SEC EDGAR daily index every business day, detecting new S-1 and S-1/A filings with intelligent calendar logic that skips weekends and federal holidays automatically.",
      },
      {
        title: "AI-Powered Filing Summaries",
        description:
          "Each new filing is automatically summarized using the OpenAI GPT API at ingestion time, translating dense SEC legal documents into plain-language summaries accessible at a glance.",
      },
      {
        title: "Redis Cache-Aside Layer",
        description:
          "A cache-aside pattern in front of the Flask API prevents redundant GPT API calls and database queries. Previously processed filings are served directly from Redis, keeping repeat lookups effectively free.",
      },
      {
        title: "S3 Asset Migration",
        description:
          "Binary filing documents were migrated out of PostgreSQL into S3-compatible object storage, eliminating large binary blobs from the database and reducing asset load times significantly.",
      },
      {
        title: "Cloudflare Edge API",
        description:
          "Cloudflare serverless functions proxy API traffic at the edge, handling rate limiting and reducing cold-start latency globally without requiring a dedicated always-on backend server.",
      },
      {
        title: "Next.js Frontend",
        description:
          "Server-rendered Next.js application with TypeScript displays structured filing data quickly, with direct hyperlinks to the official SEC.gov source documents for full transparency.",
      },
    ],
    architecture:
      "Python worker polls the SEC EDGAR daily index on business days → parses S-1 and S-1/A filings → triggers OpenAI GPT API for AI summary → stores structured data in PostgreSQL via Supabase. The Flask REST API sits in front of the database with a Redis cache-aside layer: on every filing request, it checks Redis first; on cache miss, it queries PostgreSQL and populates cache. Binary filing assets (PDFs, exhibits) live in S3-compatible object storage and are served directly to the frontend with presigned URLs. Cloudflare Workers proxy all API traffic at the edge. The Next.js frontend is deployed on Vercel, fetching data from Cloudflare Worker endpoints.",
    highlights: [
      "Redis cache-aside eliminates redundant GPT API calls for repeated filing lookups, keeping marginal cost near zero for cached filings",
      "PostgreSQL binary column migration to S3-compatible object storage removed large blobs from the database, improving query performance and reducing egress costs",
      "Cloudflare serverless functions handle edge API routing, reducing origin load and eliminating the need for an always-on backend server",
      "Python SEC worker with intelligent calendar logic (weekend + federal holiday detection) for reliable daily ingestion without false-positives",
      "Supabase provides managed PostgreSQL with built-in auth, row-level security, and real-time subscriptions out of the box",
      "GPT summaries generated at ingestion time (not at read time) keep API latency off the critical read path",
    ],
    metrics: [
      { value: "Live", label: "theipostreet.com" },
      { value: "Daily", label: "filing check" },
      { value: "S-1 / S-1A", label: "detected forms" },
      { value: "0", label: "backend servers needed" },
    ],
    techStack: [
      { name: "Frontend", items: ["Next.js", "TypeScript"] },
      { name: "Backend", items: ["Python", "Flask"] },
      { name: "Database", items: ["PostgreSQL", "Supabase"] },
      { name: "Cache", items: ["Redis"] },
      { name: "Edge & Storage", items: ["Cloudflare Workers", "S3-compatible storage"] },
      { name: "AI", items: ["OpenAI GPT API"] },
    ],
    tags: ["Python", "Next.js", "TypeScript", "PostgreSQL", "Flask", "Redis", "Supabase", "Cloudflare"],
    year: "2025",
    liveUrl: "https://theipostreet.com",
    githubUrl: "https://github.com/Joey239716/IPOTRACKER",
  },
  {
    slug: "codey-village",
    title: "Codey Village",
    description: "Multiplayer browser game that converts real coding activity (LeetCode solves, GitHub commits, and job applications) into in-game currency to build and decorate islands.",
    longDescription:
      "Built a gamified productivity platform where a Chrome extension passively monitors LeetCode submissions, GitHub commits, and Workday job applications, awarding coins redeemable in a Phaser 3 island-building game. Architected a FastAPI backend backed by MongoDB Atlas for player profiles, island state, and transaction history. Implemented real-time multiplayer rooms supporting up to 5 concurrent players over WebSockets. Integrated GitHub OAuth and webhook reception via a Node.js middleware server, and used the Google Gemini API for dynamic NPC dialogue. Deployed the backend on Google Cloud Run with Docker and the frontend on Vercel.",
    overview: [
      "Codey Village turns developer work into a game. A Chrome extension passively monitors LeetCode, GitHub, and Workday in the background. When you solve a LeetCode problem, push a commit, or submit a job application, you earn coins automatically, with no manual input required. Those coins fund an island-building game built in Phaser 3, where you purchase buildings and decorations to grow your village.",
      "The multiplayer system supports up to 5 concurrent players per room over WebSockets, with a Python FastAPI backend maintaining in-memory room state on Google Cloud Run. A single-instance constraint (maxScale: 1, containerConcurrency: 50) ensures shared room state stays consistent without requiring a distributed cache layer, a deliberate architectural trade-off that keeps the system simple at the cost of horizontal scalability. Google Gemini powers dynamic NPC dialogue, making the game world feel alive.",
      "The event pipeline spans four coordinated services: the Chrome extension detects coding events client-side → POSTs to FastAPI → Firebase token is validated → MongoDB Atlas is updated → a WebSocket broadcast goes to all active room players → the Zustand store updates → the Phaser scene re-renders. GitHub commit tracking flows through a separate Node.js OAuth/webhook server that relays events into the same pipeline.",
    ],
    problem:
      "Developer productivity tools feel like chores. LeetCode grind, GitHub streaks, and job hunting are all isolated, individual, and thankless. Codey Village reframes them as a shared social game with visible, immediate rewards: every real coding action becomes an in-game event that other players can see.",
    features: [
      {
        title: "Passive Activity Tracking",
        description:
          "Chrome Manifest v3 extension with content scripts monitors LeetCode submission results, GitHub commits, and Workday applications in the background, with no manual input and no buttons to click.",
      },
      {
        title: "Phaser 3 Island Builder",
        description:
          "Full island customization game with a shop system, building placement, and decoration management powered by the Phaser 3.90 game engine embedded inside a Next.js application.",
      },
      {
        title: "Real-Time Multiplayer Rooms",
        description:
          "WebSocket rooms support up to 5 concurrent players with live presence, shared interactions, and synchronized coin balance updates broadcast to all room members instantly.",
      },
      {
        title: "Full End-to-End Event Pipeline",
        description:
          "From Chrome extension detection to FastAPI validation to MongoDB write to WebSocket broadcast, the complete coin-award pipeline executes in under a second across four services.",
      },
      {
        title: "GitHub OAuth + Webhook Tracking",
        description:
          "Node.js Express middleware server handles the GitHub OAuth handshake and receives incoming commit webhook events, relaying them into the main coin-award pipeline for automatic credit.",
      },
      {
        title: "Gemini-Powered NPC Dialogue",
        description:
          "Google Gemini API generates context-aware NPC dialogue dynamically, making village characters respond to in-game events and player actions with non-repetitive, contextual responses.",
      },
    ],
    architecture:
      "Four coordinated services: (1) Next.js 16 / Phaser 3.90 frontend on Vercel with Zustand for state management. (2) Python FastAPI backend on Google Cloud Run, with enforced single-instance (maxScale: 1, containerConcurrency: 50) with a 3600-second timeout and session affinity to maintain long-lived WebSocket connections and shared in-memory room state. (3) Node.js Express OAuth server handling the GitHub OAuth handshake and incoming commit webhook reception. (4) Chrome Manifest v3 extension with per-platform content scripts targeting leetcode.com, github.com, and Workday. MongoDB Atlas stores player profiles, island state, and full transaction history. Firebase Authentication validates every FastAPI request.",
    highlights: [
      "End-to-end event pipeline: Chrome extension → FastAPI Firebase token validation → MongoDB write → WebSocket broadcast → Phaser scene re-render",
      "Single-instance Cloud Run deployment (maxScale: 1) with session affinity to preserve shared in-memory WebSocket room state without a Redis pub/sub layer",
      "Manifest v3 Chrome extension with per-platform content scripts for passive, zero-click activity detection across LeetCode, GitHub, and Workday",
      "GitHub OAuth + webhook reception via Node.js Express middleware, decoupled from the main FastAPI service",
      "Google Gemini API integration for contextual, non-repetitive NPC dialogue generation triggered by in-game events",
      "Cloud Run config: 3600-second timeout + session affinity enable stable persistent WebSocket connections at scale",
    ],
    metrics: [
      { value: "5", label: "players per room" },
      { value: "~50", label: "concurrent WebSocket connections" },
      { value: "4", label: "coordinated services" },
      { value: "3", label: "tracked platforms" },
    ],
    techStack: [
      { name: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Phaser 3.90", "Tailwind CSS 4", "Zustand"] },
      { name: "Backend", items: ["Python 3.11", "FastAPI", "Uvicorn"] },
      { name: "Database & Auth", items: ["MongoDB Atlas", "Firebase Authentication"] },
      { name: "OAuth & Webhooks", items: ["Node.js", "Express 4"] },
      { name: "Extension", items: ["Chrome Manifest v3"] },
      { name: "AI", items: ["Google Gemini API"] },
      { name: "Deployment", items: ["Google Cloud Run", "Vercel", "Docker"] },
    ],
    tags: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "MongoDB", "Phaser", "Firebase", "WebSockets", "Docker", "Google Cloud"],
    year: "2025",
    githubUrl: "https://github.com/SahilGupta721/CodeyVillage",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
