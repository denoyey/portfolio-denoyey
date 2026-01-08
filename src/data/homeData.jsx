export const featuredCards = [
  { 
    title: "Project Showcase", 
    icon: "ri-archive-stack-line", 
    path: "/projects", 
    color: "text-slate-400",
    grid: "md:col-span-2",
    type: "carousel",
    items: [1, 2, 3, 4],
  },
  { 
    title: "Services", 
    icon: "ri-book-2-line", 
    path: "/contact", 
    color: "text-purple-400",
    grid: "md:col-span-1",
    content: (
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex flex-col items-center justify-center gap-1">
          <i className="ri-code-s-slash-line text-cyan-400 text-lg animate-pulse"></i>
          <span className="text-[10px] text-cyan-200 font-medium">Web Dev</span>
        </div>
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center gap-1">
          <i className="ri-openai-fill text-emerald-400 text-lg animate-[spin_3s_linear_infinite]"></i>
          <span className="text-[10px] text-emerald-200 font-medium">AI Agents</span>
        </div>
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 flex flex-col items-center justify-center gap-1">
          <i className="ri-layout-masonry-line text-purple-400 text-lg animate-bounce"></i>
          <span className="text-[10px] text-purple-200 font-medium">UI/UX</span>
        </div>
        <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 flex flex-col items-center justify-center gap-1">
          <i className="ri-database-2-line text-orange-400 text-lg animate-pulse"></i>
          <span className="text-[10px] text-orange-200 font-medium">API</span>
        </div>
      </div>
    )
  },
  { 
    title: "Achievement", 
    icon: "ri-trophy-fill", 
    path: "/experience", 
    color: "text-yellow-400",
    grid: "md:col-span-1",
    content: (
      <div className="space-y-2 mt-2">
        <div className="text-xs text-slate-300 flex items-start gap-2">
          <i className="ri-medal-fill text-yellow-500/80 mt-0.5"></i>
          <span>Junior Network Administrator</span>
        </div>
      </div>
    )
  },
  { 
    title: "About Me", 
    icon: "ri-user-smile-fill", 
    path: "/about", 
    color: "text-emerald-400",
    grid: "md:col-span-2",
    content: (
      <p className="text-xs text-slate-400 leading-relaxed mt-2">
        Building intelligent, scalable web experiences with modern tech. Transforming complex ideas into elegant, high-impact digital solutions.
      </p>
    )
  }
];

export const skills = [
  { icon: "ri-html5-fill", name: "HTML5", color: "text-orange-500", bg: "bg-orange-500/20 border-orange-500/30 hover:border-orange-500/80 active:bg-orange-500/30" },
  { icon: "ri-css3-fill", name: "CSS3", color: "text-blue-500", bg: "bg-blue-500/20 border-blue-500/30 hover:border-blue-500/80 active:bg-blue-500/30" },
  { icon: "ri-javascript-fill", name: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/20 border-yellow-400/30 hover:border-yellow-400/80 active:bg-yellow-400/30" },
  { icon: "ri-reactjs-line", name: "React", color: "text-cyan-400", bg: "bg-cyan-400/20 border-cyan-400/30 hover:border-cyan-400/80 active:bg-cyan-400/30" },
  { icon: "ri-tailwind-css-fill", name: "Tailwind", color: "text-cyan-300", bg: "bg-cyan-300/20 border-cyan-300/30 hover:border-cyan-300/80 active:bg-cyan-300/30" },
  { icon: "ri-bootstrap-fill", name: "Bootstrap", color: "text-purple-500", bg: "bg-purple-500/20 border-purple-500/30 hover:border-purple-500/80 active:bg-purple-500/30" },
  { icon: "ri-flashlight-fill", name: "Framer Motion", color: "text-purple-400", bg: "bg-purple-400/20 border-purple-400/30 hover:border-purple-400/80 active:bg-purple-400/30" },
  
  { icon: "ri-nodejs-line", name: "Node.js", color: "text-green-500", bg: "bg-green-500/20 border-green-500/30 hover:border-green-500/80 active:bg-green-500/30" },
  { icon: "ri-php-fill", name: "PHP", color: "text-indigo-400", bg: "bg-indigo-400/20 border-indigo-400/30 hover:border-indigo-400/80 active:bg-indigo-400/30" },
  { icon: "ri-database-2-fill", name: "SQL", color: "text-blue-400", bg: "bg-blue-400/20 border-blue-400/30 hover:border-blue-400/80 active:bg-blue-400/30" },
  { icon: "ri-database-fill", name: "MySQL", color: "text-blue-600", bg: "bg-blue-600/20 border-blue-600/30 hover:border-blue-600/80 active:bg-blue-600/30" },
  { icon: "ri-git-branch-line", name: "Git", color: "text-orange-600", bg: "bg-orange-600/20 border-orange-600/30 hover:border-orange-600/80 active:bg-orange-600/30" },
  { icon: "ri-github-fill", name: "GitHub", color: "text-white", bg: "bg-slate-600/30 border-slate-500/30 hover:border-slate-400 active:bg-slate-600/40" },
  { icon: "ri-terminal-box-fill", name: "Terminal", color: "text-emerald-400", bg: "bg-emerald-400/20 border-emerald-400/30 hover:border-emerald-400/80 active:bg-emerald-400/30" },
  { icon: "ri-ubuntu-fill", name: "Linux", color: "text-orange-500", bg: "bg-orange-500/20 border-orange-500/30 hover:border-orange-500/80 active:bg-orange-500/30" },
  { icon: "ri-android-fill", name: "Smali", color: "text-green-400", bg: "bg-green-400/20 border-green-400/30 hover:border-green-400/80 active:bg-green-400/30" },
  { icon: "ri-code-s-slash-line", name: "VS Code", color: "text-blue-500", bg: "bg-blue-500/20 border-blue-500/30 hover:border-blue-500/80 active:bg-blue-500/30" },
  { icon: "ri-npmjs-fill", name: "NPM", color: "text-red-500", bg: "bg-red-500/20 border-red-500/30 hover:border-red-500/80 active:bg-red-500/30" },
  { icon: "ri-stack-fill", name: "Docker", color: "text-sky-500", bg: "bg-sky-500/20 border-sky-500/30 hover:border-sky-500/80 active:bg-sky-500/30" },
  { icon: "ri-openai-fill", name: "AI Integration", color: "text-emerald-400", bg: "bg-emerald-400/20 border-emerald-400/30 hover:border-emerald-400/80 active:bg-emerald-400/30" },
  { icon: "ri-code-box-fill", name: "Laravel", color: "text-red-600", bg: "bg-red-600/20 border-red-600/30 hover:border-red-600/80 active:bg-red-600/30" },
  { icon: "ri-code-s-slash-fill", name: "Golang", color: "text-cyan-500", bg: "bg-cyan-500/20 border-cyan-500/30 hover:border-cyan-500/80 active:bg-cyan-500/30" },
  { icon: "ri-flashlight-line", name: "Vite", color: "text-yellow-400", bg: "bg-yellow-400/20 border-yellow-400/30 hover:border-yellow-400/80 active:bg-yellow-400/30" },
  { icon: "ri-router-fill", name: "React Router", color: "text-red-400", bg: "bg-red-400/20 border-red-400/30 hover:border-red-400/80 active:bg-red-400/30" },
  { icon: "ri-vuejs-fill", name: "Vue.js", color: "text-emerald-500", bg: "bg-emerald-500/20 border-emerald-500/30 hover:border-emerald-500/80 active:bg-emerald-500/30" },
];
