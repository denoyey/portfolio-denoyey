import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
        navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-6 font-sans relative overflow-hidden rounded-2xl">
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Projects</span>
            </button>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {project.techStack.map((tech, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/50 rounded-full px-3 py-1 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300 cursor-default group/tech"
                            >
                                <span className="text-lg group-hover/tech:scale-110 transition-transform duration-300 flex items-center">
                                    <i className={`${tech.icon} ${tech.color}`} />
                                </span>
                                <span className="text-xs font-medium text-slate-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-slate-900/50 group">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div className="space-y-8">
                    <div className="space-y-6">
                        <section className="space-y-3">
                            <h2 className="text-lg md:text-xl font-bold text-slate-200 flex items-center gap-2">
                                <i className="ri-file-text-line text-blue-400"></i> Description
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                {project.description}
                                <br/><br/>
                                This project demonstrates the usage of {project.techStack.map(t => t.name).join(", ")} to build responsive and interactive web applications. 
                                It focuses on user experience, clean code architecture, and performance optimization.
                            </p>
                        </section>

                        <section className="space-y-3">
                             <h2 className="text-lg md:text-xl font-bold text-slate-200 flex items-center gap-2">
                                <i className="ri-list-check text-purple-400"></i> Key Features
                            </h2>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-400 text-sm md:text-base">
                                <li>Responsive Design for all devices</li>
                                <li>Interactive UI components with animations</li>
                                <li>Optimized performance and SEO friendly</li>
                                <li>Clean and maintainable code structure</li>
                            </ul>
                        </section>
                    </div>

                    <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                            <div className="space-y-4 w-full md:w-auto">
                                <h3 className="text-base md:text-lg font-bold text-white">Project Info</h3>
                                <div className="grid grid-cols-2 md:flex md:gap-8 gap-4 text-slate-400">
                                    <div className="space-y-1">
                                        <span className="block text-slate-500 text-sm font-medium">Category</span>
                                        <span className="text-slate-200 text-base md:text-lg">Web Development</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block text-slate-500 text-sm font-medium">Date</span>
                                        <span className="text-slate-200 text-base md:text-lg">2024</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block text-slate-500 text-sm font-medium">Team</span>
                                        <span className="text-slate-200 text-base md:text-lg">Personal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-700/50">
                                {project.link && project.link !== "#" && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-medium shadow-lg shadow-blue-900/20 w-full sm:w-auto"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                )}
                                <a 
                                    href="#" 
                                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-700/50 hover:bg-slate-700 text-slate-200 rounded-lg transition-all font-medium border border-slate-600 w-full sm:w-auto"
                                >
                                    <Github size={18} />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default ProjectDetail;
