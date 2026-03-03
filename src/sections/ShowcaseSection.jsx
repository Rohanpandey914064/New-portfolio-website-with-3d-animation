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
          
          {/* LEFT */}
          <div className="h-full flex flex-col justify-between xl:w-[60%]" ref={project1Ref}>
            
            {/* Image */}
            <div className="xl:h-[70vh] md:h-[50vh] h-96 relative">
              <img
                src="/images/project1.png"
                alt="Ryde"
                className="w-full h-full object-cover rounded-xl absolute inset-0"
              />
            </div>

            {/* Text */}
            <div className="space-y-5 mt-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                On-Demand Ridex Made Simple with a Powerful, User-Friendly App called Ryde
              </h2>
              <p className="text-white/50 md:text-xl">
                Ryde is a cutting-edge on-demand ride-hailing app that revolutionizes urban transportation.
              </p>
            </div>

          </div>
          <div className="flex flex-col gap-5 xl:w-[40%] xl:h-[70vh]">
            {/* RIGHT PROJECT 1 */}
            <div className="flex flex-col gap-3" ref={project2Ref}>
              <div className="w-full rounded-xl overflow-hidden bg-[#ffefdb] p-2 h-[250px]">
                <img src="/images/project2.png" alt="Library Management Platform" className="w-full h-full object-contain"/>
              </div>
              <h2 className="text-xl font-semibold">
                Library Management Platform
              </h2>
            </div>
          

          {/* RIGHT PROJECT 2 */}
            <div className="flex flex-col gap-3" ref={project3Ref}>
              <div className="w-full rounded-xl overflow-hidden bg-[#ffe7eb] p-2 h-[250px]">
                <img src="/images/project3.png" alt="Yc" className="w-full h-full object-contain"/>
              </div>
              <h2 className="text-xl font-semibold">
                Yc Directory - A Startup Showcase App
              </h2>
            </div>
        </div>
          
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;