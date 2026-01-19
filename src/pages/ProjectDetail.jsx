import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Tag } from 'lucide-react';
import { RiFileTextLine, RiListCheck } from '@remixicon/react';
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
                    <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200 to-slate-600">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((tech, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-1.5 bg-slate-800/40 border border-slate-700/50 rounded-full px-2.5 py-0.5 md:px-3 md:py-1 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300 cursor-default group/tech"
                            >
                                <span className="text-sm group-hover/tech:scale-110 transition-transform duration-300 flex items-center">
                                    <tech.icon className={`${tech.color} w-3.5 h-3.5 md:w-4 md:h-4`} />
                                </span>
                                <span className="text-[12px] md:text-xs font-medium text-slate-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-slate-900/50 group">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        draggable="false"
                        referrerPolicy="no-referrer"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        className="w-full h-full object-cover select-none pointer-events-none"
                    />
                </div>

                <div className="space-y-8">
                    <div className="space-y-6">
                        <section className="space-y-3">
                            <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                                <RiFileTextLine className="text-blue-400" /> Description
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {project.description}
                                <br/><br/>
                                This project demonstrates the usage of {project.techStack.map(t => t.name).join(", ")} to build responsive and interactive web applications. 
                                It focuses on user experience, clean code architecture, and performance optimization.
                            </p>
                        </section>

                        <section className="space-y-3">
                             <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                                <RiListCheck className="text-purple-400" /> Key Features
                            </h2>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-400 text-sm">
                                <li>Responsive Design for all devices</li>
                                <li>Interactive UI components with animations</li>
                                <li>Optimized performance and SEO friendly</li>
                                <li>Clean and maintainable code structure</li>
                            </ul>
                        </section>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors group flex items-center justify-start gap-3">
                                <div className="p-2 rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <Tag size={18} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-slate-500 text-xs font-medium">Category</span>
                                    <span className="text-slate-200 text-sm font-semibold">Web Development</span>
                                </div>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors group flex items-center justify-start gap-3">
                                <div className="p-2 rounded-md bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                    <Calendar size={18} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-slate-500 text-xs font-medium">Date</span>
                                    <span className="text-slate-200 text-sm font-semibold">2025</span>
                                </div>
                            </div>

                            <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors group flex items-center justify-start gap-3">
                                <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                                    <Users size={18} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-slate-500 text-xs font-medium">Team</span>
                                    <span className="text-slate-200 text-sm font-semibold">Personal</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.link && project.link !== "#" && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-all font-semibold shadow-md shadow-amber-500/25 group text-sm ${!project.repo ? "col-span-1 sm:col-span-2 w-full" : ""}`}
                                >
                                    <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                                    Live Demo
                                </a>
                            )}
                            
                            {project.repo && (
                                <a 
                                    href={project.repo} 
                                    target={project.repo !== "#" ? "_blank" : undefined}
                                    rel={project.repo !== "#" ? "noopener noreferrer" : undefined}
                                    className={`flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all font-semibold border border-slate-700 hover:border-slate-600 group text-sm ${(!project.link || project.link === "#") ? "col-span-1 sm:col-span-2 w-full" : ""}`}
                                >
                                    <Github size={16} className="group-hover:scale-110 transition-transform duration-300" />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default ProjectDetail;
