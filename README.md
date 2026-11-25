# Rohan Pandey — 3D Developer Portfolio

An interactive 3D developer portfolio built with **React 19**, **Three.js / React Three Fiber**, **GSAP**, and **Tailwind CSS v4**, showcasing production backend, full-stack, and DevOps projects.

## Featured Projects

1. **CodingX — DSA Learning & Contest Platform** (`codingx007.in`)
   - Solo full-stack & DevOps build featuring a 23-page React 18 SPA, 84 REST API endpoints, and a 32-model PostgreSQL schema with Prisma.
   - Standalone Docker-isolated code-execution microservice (Java, C++, Python, JavaScript) with non-root runners, 5-second timeouts, Piston fallback, and a bounded queue.
   - Deterministic ICPC-style contest scoring, PostgreSQL advisory locks, AST-based plagiarism detection, 63 unit/integration tests, and k6 load testing for 5,000–8,000 concurrent users.

2. **Bharat Seva Foundation (BSF India) — National Olympiad & Member Portal**
   - Service-oriented (SOA) Node.js/Express.js REST APIs and MongoDB Atlas schemas with compound indexes keeping query latency under 5ms (benchmarked for 100,000+ members).
   - Razorpay payment integration with signature verification, automated digital ID card & receipt generation, Cloudinary CDN, and JWT/Helmet/CORS/rate-limiting hardening.

3. **ConvertFlow — Universal File Converter**
   - Asynchronous file transformation pipeline powered by Next.js 14, Node.js, Express.js, BullMQ, and Redis across PDF, DOCX, image, and spreadsheet formats.
   - Automated 30-minute temporary file purging via cron jobs and hardened uploads with Helmet, Express Rate Limit, and Multer.

## Tech Stack

- **Frontend:** React 19, Tailwind CSS v4, GSAP (`@gsap/react`, `ScrollTrigger`), `react-countup`, `react-responsive`
- **3D & Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`
- **Build & Tooling:** Vite 7, ESLint 9, EmailJS (`@emailjs/browser`), Vercel Analytics

## Performance Optimizations

- **Code Splitting:** Route/section-level `React.lazy` + `Suspense` for below-the-fold sections and 3D canvases, plus Vite `manualChunks` separating `three-vendor` and `gsap-vendor`.
- **Smart WebGL Loop:** `HeroExperience` pauses continuous rendering (`frameloop="demand"`) when scrolled out of view via `IntersectionObserver`; `ContactExperience` uses `frameloop="demand"` and only re-renders on user interaction.
- **GPU & Animation Hygiene:** Memoized Three.js materials in `Room.jsx`, memoized particle buffers with `delta`-based animation in `Particles.jsx`, `scrub: true` on the experience timeline, and `requestAnimationFrame`-throttled `GlowCard` pointer tracking.
- **Lazy Assets:** `loading="lazy"` and `decoding="async"` on below-the-fold images.

## Local Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables (Optional — Contact Form)

To enable the EmailJS contact form in `src/sections/Contact.jsx`, create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Links

- **GitHub:** [Rohanpandey914064](https://github.com/Rohanpandey914064)
- **LinkedIn:** [Rohan Pandey](https://www.linkedin.com/in/rohan-pandey-770768328)
