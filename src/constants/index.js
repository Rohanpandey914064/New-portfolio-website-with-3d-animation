const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 350, suffix: "+", label: "DSA Problems Solved" },
  { value: 84, suffix: "+", label: "REST API Endpoints" },
  { value: 63, suffix: "+", label: "Automated Tests" },
  { value: 100, suffix: "K+", label: "Members Scaled (BSF)" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  // {
  //   name: "Python Developer",
  //   imgPath: "/images/logos/python.svg",
  // },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Software Development Intern (Backend & Full-Stack) at Bharat Seva Foundation — building high-throughput SOA REST APIs, Razorpay payment pipelines, and scalable MongoDB architectures.",
    imgPath: "/images/bsf.jpg",
    logoPath: "/images/logo1.png",
    title: "Software Development Intern | Bharat Seva Foundation (BSF India)",
    date: "Jun 2026 – Present",
    responsibilities: [
      "Developed service-oriented (SOA) REST Web Services with Node.js, Express.js, and MongoDB Atlas for a National Olympiad registration and admin portal, keeping query latency under 5ms via compound indexes (benchmarked for 100,000+ members).",
      "Integrated Razorpay payments with signature verification, automated digital ID card and receipt generation, and Cloudinary CDN for zero-footprint media storage.",
      "Secured REST APIs with JWT authentication, Helmet, CORS whitelisting, and rate limiting.",
      "Proposed a Redis caching and database sharding roadmap to scale the portal to 1,000,000+ members."
    ],
  },
  {
    review: "Owned CodingX end to end as a solo full-stack & DevOps engineer — shipping a production DSA & contest platform tested at 5,000–8,000 concurrent users.",
    imgPath: "/images/codingx.jpg",
    logoPath: "/images/logo2.png",
    title: "Solo Full-Stack & DevOps Engineer | CodingX (codingx007.in)",
    date: "Jun 2026 – Present",
    responsibilities: [
      "Shipped a 23-page React 18 SPA (40 reusable components, 6 custom hooks) and an N-tier Node.js/Express backend with 84 REST endpoints and a 32-model PostgreSQL schema via Prisma (7 migrations).",
      "Engineered a standalone Docker-isolated code-execution microservice (Java, C++, Python, JS) with non-root runners, dropped Linux capabilities, 5s timeouts, Piston fallback, and a bounded queue.",
      "Implemented deterministic ICPC-style contest scoring, PostgreSQL advisory locks against race conditions, and an AST-based plagiarism engine secured with JWT, Google OAuth, bcrypt, and Helmet.",
      "Validated with 63 unit/integration tests (Node.js test runner), k6 load testing, Nginx, Render IaC, and Git-push CI/CD auto-deploys."
    ],
  },
  {
    review: "Built ConvertFlow with async BullMQ/Redis job pipelines while maintaining an 8.41/10 CGPA in B.Tech CS at KIET, Ghaziabad and earning AWS Cloud Practitioner.",
    imgPath: "/images/convertflow.png",
    logoPath: "/images/logo3.png",
    title: "Full-Stack Developer | ConvertFlow & B.Tech CS (KIET)",
    date: "Aug 2024 – Present",
    responsibilities: [
      "Architected ConvertFlow (Next.js 14, Node.js, Express.js, BullMQ, Redis) with an asynchronous job pipeline and 7 dedicated conversion engines (Sharp, pdf-lib, Mammoth, SheetJS, json2csv) across PDF, DOCX, image, and spreadsheet formats.",
      "Automated temporary file purging every 30 minutes via cron jobs and hardened uploads with Helmet, Express Rate Limit, and Multer.",
      "Solved 350+ Data Structures & Algorithms problems on LeetCode in Java and earned AWS Certified Cloud Practitioner (2026)."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    url:"https://github.com/Rohanpandey914064"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/rohan-pandey-770768328"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
