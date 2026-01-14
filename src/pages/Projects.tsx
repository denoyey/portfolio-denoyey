import { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { projectsData } from "../data/projectsData";
import { RiArrowRightUpLine } from "@remixicon/react";

const Projects = () => {
  return (
    <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100">
      <ProjectsHeader />
      <ProjectsContent />
    </div>
  );
};

const ProjectsHeader = () => {
  return (
    <section className="space-y-2 w-full">
      <h1 className="text-2xl font-semibold mb-2">Projects</h1>
      <p className="text-slate-300 text-sm">
        A showcase of both private and open-source projects I’ve built or
        contributed to.
      </p>
      <hr className="w-full border border-dashed mt-6 border-slate-700" />
    </section>
  );
};

const ProjectsContent = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const ProjectCard = ({ project }: { project: any }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    function handleTouchMove({ currentTarget, touches }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      let clientX = touches[0].clientX;
      let clientY = touches[0].clientY;

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 active:border-slate-600 focus:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/20 relative z-10 flex flex-col h-full active:scale-95 duration-300 focus:outline-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 transition duration-300 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="h-50 overflow-hidden relative z-10 shrink-0">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent group-focus-within:bg-transparent group-active:bg-transparent transition-colors z-20" />

          <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
            <span className="text-slate-100 font-semibold text-xs border border-slate-500/50 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg flex items-center gap-2 scale-90 group-hover:scale-100 group-active:scale-100 group-focus-within:scale-100 transition-transform duration-300">
              View Project{" "}
              <motion.span
                className="inline-block"
                animate={
                  hoveredId === project.id ? { x: 3, y: -3 } : { x: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "circOut", delay: 0.1 }}
              >
                <RiArrowRightUpLine size={16} />
              </motion.span>
            </span>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 flex flex-col grow relative z-10">
          <h3 className="text-md font-bold text-slate-100 mb-2 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2 grow">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-700/50 mt-auto">
            {project.techStack.map((tech: any, index: number) => (
              <div key={index} title={tech.name}>
                <tech.icon className={`${tech.color} text-xl`} />
              </div>
            ))}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
      onMouseLeave={() => setHoveredId(null)}
    >
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="relative group block h-full"
          onMouseEnter={() => setHoveredId(project.id)}
          onTouchStart={() => setHoveredId(project.id)}
          onFocusCapture={() => setHoveredId(project.id)}
        >
          <AnimatePresence>
            {hoveredId === project.id && (
              <motion.div
                layoutId="projectHover"
                className="absolute inset-0 bg-slate-700/50 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
          </AnimatePresence>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
