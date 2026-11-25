import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  
    useGSAP(() => {
      
      const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
      
      projects.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 50,opacity: 0
          },
          {
            y:0, opacity: 1, duration: 1, delay: 0.3 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100'
            }
          }
        )
      });
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {opacity: 1 , duration: 1.5}
      )
    }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center"
    >
      <div className="w-full">
        <div className="flex xl:flex-row flex-col gap-10 justify-between">
          
          {/* LEFT - MAIN PROJECT: CODINGX */}
          <div className="h-full flex flex-col justify-between xl:w-[60%]" ref={project1Ref}>
            
            {/* Image */}
            <div className="xl:h-[75vh] md:h-[50vh] h-96 relative rounded-xl overflow-hidden border border-white/10">
              <img
                src="/images/codingx.jpg"
                alt="CodingX - DSA Learning & Contest Platform"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top rounded-xl absolute inset-0"
              />
            </div>

            {/* Text */}
            <div className="space-y-5 mt-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                CodingX — Production DSA Learning & Contest Platform
              </h2>
              <p className="text-white/50 md:text-xl">
                Engineered end-to-end as a solo full-stack developer across React 18 (23-page SPA), Node.js & Express.js (84 REST endpoints, 32-model PostgreSQL schema with Prisma), and a standalone Docker-isolated code-execution microservice for Java, C++, Python, and JavaScript. Features deterministic ICPC-style contest scoring, PostgreSQL advisory locks, an AST-based plagiarism engine, Redis, Nginx, Render IaC, 63 automated tests, and k6 load testing for 5,000–8,000 concurrent users at codingx007.in.
              </p>
            </div>

          </div>
          <div className="flex flex-col gap-5 xl:w-[40%] xl:h-[70vh]">
            {/* RIGHT PROJECT 1: BHARAT SEVA FOUNDATION */}
            <div className="flex flex-col gap-3" ref={project2Ref}>
              <div className="w-full rounded-xl overflow-hidden border border-white/10 h-[250px]">
                <img src="/images/bsf.jpg" alt="Bharat Seva Foundation - National Olympiad Portal" loading="lazy" decoding="async" className="w-full h-full object-cover object-top"/>
              </div>
              <h2 className="text-xl font-semibold">
                Bharat Seva Foundation — Scalable National Olympiad Portal with Razorpay & SOA Backend
              </h2>
            </div>
          

            {/* RIGHT PROJECT 2: CONVERTFLOW */}
            <div className="flex flex-col gap-3" ref={project3Ref}>
              <div className="w-full rounded-xl overflow-hidden border border-white/10 h-[250px]">
                <img src="/images/convertflow.png" alt="ConvertFlow - Universal File Converter" loading="lazy" decoding="async" className="w-full h-full object-cover object-top"/>
              </div>
              <h2 className="text-xl font-semibold">
                ConvertFlow — Async Universal File Converter Powered by Next.js, BullMQ & Redis
              </h2>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;