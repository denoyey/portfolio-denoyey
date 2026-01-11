import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, MapPin, Briefcase, Clock, Building2, GraduationCap, Download, FileDown } from 'lucide-react';
import { careerData, educationData, downloadLinks } from '../data/aboutData';

const About = () => {
  return (
    <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100">
      <AboutContent />
      <CareerSection />
      <EducationSection />
    </div>
  );
};

const AboutContent = () => {
  return (
    <section className="space-y-2 w-full">
      <h1 className="text-2xl font-semibold mb-2">About</h1>
      <p className="text-slate-300 text-sm">A brief introduction about me.</p>
      <hr className="w-full border border-dashed mt-6 mb-6 border-slate-700" />
      <p className="text-slate-300 text-xs md:text-sm leading-relaxed text-start">
        Hello! I am <b>Deni Setiawan Pratama</b>, an undergraduate student majoring in <b>Information Technology</b>. I have a genuine passion for technology, especially where creativity meets logic. My journey started with simple curiosity, and now I love building web applications that are both robust and easy to use.<br/><br/>
        
        My focus is on <b>Full Stack Web Development</b>. I enjoy bridging the gap between backend systems and frontend interfaces. I believe that great software should not only work well but also provide a seamless experience for the user. I care deeply about the quality of my work, down to the last detail.<br/><br/>

        I am always learning and exploring new technologies to improve my skills. I look forward to connecting with like-minded people and contributing to meaningful projects. If you are looking for a dedicated developer to collaborate with, let's create something amazing together.
      </p>
      <hr className="w-full border mt-6 border-slate-700" />
    </section>
  );
};

const CareerCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 transition-colors w-full group/card relative z-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover/card:opacity-100 transition duration-300"
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
      
      <div className="relative z-20">
          <div className="flex items-start gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white rounded-lg overflow-hidden border border-slate-600 flex items-center justify-center">
                <img src={data.image} alt={data.company} className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-sm md:text-base font-bold text-slate-100">{data.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                        <a href="#" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                            <span>{data.company}</span>
                        </a>
                        <span className="w-0.5 h-0.5 rounded-full bg-slate-600" />
                        <span className="flex items-center gap-1">
                            <MapPin size={10} className="text-slate-500" />
                            {data.location}
                            <span className="bg-slate-800 text-slate-400 text-[10px] px-1 py-0.5 rounded border border-slate-700 font-mono font-bold">{data.countryCode}</span>
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 bg-slate-900/60 px-2 py-1 rounded border border-slate-700/50">
                      <Calendar size={10} className="text-emerald-400" />
                      <span className="text-slate-300">{data.startDate} - {data.endDate}</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-emerald-400 font-bold">{data.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-slate-900/60 px-2 py-1 rounded border border-slate-700/50">
                      <Clock size={10} className="text-purple-400" />
                      <span className="text-slate-300">{data.mode}</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-900/60 px-2 py-1 rounded border border-slate-700/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span className="text-slate-300">{data.type}</span>
                  </div>
                </div>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`mt-4 w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg transition-all border ${
                isOpen 
                ? 'bg-slate-700/50 border-slate-600 text-slate-200' 
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            <span>{isOpen ? 'Hide Responsibilities' : 'Show Responsibilities'}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 border-t border-dashed border-slate-700/50 mt-1">
                      <ul className="space-y-1.5">
                        {data.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed group/item">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 group-hover/item:bg-emerald-400 transition-colors shrink-0" />
                              <span>{item}</span>
                            </li>
                        ))}
                      </ul>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
      </div>
    </div>
  );
}

const CareerSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
      <section className="w-full">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="text-slate-300" size={18} />
            <h2 className="text-lg font-bold text-slate-300">Experience</h2>
          </div>
          <p className="text-slate-300 text-sm mb-6">My Profesional Experience.</p>
          
          <div className="flex flex-col gap-4" onMouseLeave={() => setHoveredId(null)}>
            {careerData.length > 0 ? (
                careerData.map((career) => (
                  <div 
                    key={career.id} 
                    className="relative"
                    onMouseEnter={() => setHoveredId(career.id)}
                  >
                     <AnimatePresence>
                        {hoveredId === career.id && (
                          <motion.div
                            layoutId="careerHover"
                            className="absolute inset-0 bg-slate-700/50 rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                     </AnimatePresence>
                     <CareerCard data={career} />
                  </div>
                ))
            ) : (
                <div className="text-center py-8 bg-slate-800/20 border border-dashed border-slate-700/50 rounded-xl">
                    <p className="text-slate-400 text-xs">No professional experience available.</p>
                </div>
            )}
          </div>
          <hr className="w-full border mt-8 border-slate-700" />
      </section>
  );
};

const EducationSection = () => {
  const EducationCard = ({ data }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <div 
        className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 transition-colors w-full group/card relative z-10 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover/card:opacity-100 transition duration-300"
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
        
        <div className="flex gap-3 items-start w-full relative z-20">
            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full flex items-center justify-center overflow-hidden p-1">
                  <img src={data.image} alt={data.university} className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col items-start gap-1.5">
                <a href={data.universityLink} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-bold text-slate-100 leading-snug md:leading-tight w-fit">{data.university}</a>
                <p className="text-xs md:text-sm text-slate-400 font-medium leading-normal">{data.title}</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mt-0.5 font-mono">
                    <span className="shrink-0">Years {data.startDate} - {data.endDate}</span>
                    <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-600"></span>
                    <span className="flex items-center gap-1.5 shrink-0">
                        {data.location}
                        <span className="bg-slate-800 text-slate-400 text-[10px] px-1 py-0.5 rounded border border-slate-700 font-mono font-bold shrink-0">{data.countryCode}</span>
                    </span>
                </div>
            </div>
        </div>
      </div>
    );
  };

  const [hoveredId, setHoveredId] = useState(null);
  return (
      <section className="w-full">
          <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="text-slate-300" size={18} />
              <h2 className="text-lg font-bold text-slate-300">Education</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <p className="text-slate-300 text-sm">My Educational Background.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={downloadLinks.portfolio} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md border border-slate-700 transition-all text-xs font-medium group">
                <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Portfolio</span>
              </a>
              <a href={downloadLinks.resume} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-400 rounded-md border border-emerald-800/50 transition-all text-xs font-medium group">
                  <FileDown size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Resume</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4" onMouseLeave={() => setHoveredId(null)}>
            {educationData.length > 0 ? (
              educationData.map((education) => (
                <div 
                  key={education.id} 
                  className="relative"
                  onMouseEnter={() => setHoveredId(education.id)}
                >
                    <AnimatePresence>
                      {hoveredId === education.id && (
                        <motion.div
                          layoutId="educationHover"
                          className="absolute inset-0 bg-slate-700/50 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    <EducationCard data={education} />
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-slate-800/20 border border-dashed border-slate-700/50 rounded-xl">
                  <p className="text-slate-400 text-xs">No educational background available.</p>
              </div>
            )}
          </div>
      </section>
  );
};

export default About;