import { Link } from 'react-router-dom';
import { useState } from 'react';
import { skills, featuredCards } from '../data/homeData';

const Home = () => {
  return (
    <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100">
      <MiniAbout />
      <hr className="w-full border-slate-700" />
      <MiniSkills />
      <hr className="w-full border-slate-700" />
      <FeaturedSection />
    </div>
  );
};

const MiniAbout = () => {
  return (
    <div className="space-y-2 w-full">
      <h1 className="md:text-2xl text-xl font-semibold text-white">Hi, I'm Deni Setiawan Pratama <span className="animate-wave">👋</span></h1>
      <h6 className="text-sm text-slate-300 font-medium flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Based in Tangerang, Indonesia
      </h6>
      <p className="leading-loose text-sm text-slate-300 pt-3 text-justify">
        I'm a Full Stack Web Developer with a passion for creating engaging and user-friendly websites. 
        With a strong foundation in both frontend and backend development, I'm dedicated to delivering 
        high-quality solutions that meet the needs of my clients and users.
      </p>
    </div>
  );
};

const MiniSkills = () => {
  return (
    <div className="pt-0 pb-2 space-y-6 w-full">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <i className="ri-code-s-slash-fill text-2xl text-slate-400"></i>
          <h1 className="text-2xl font-bold text-white"><code>Skills</code></h1>
        </div>
        <p className="text-slate-500 text-sm">Technologies I work with:</p>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {skills.map((skill, index) => (
          <div 
            key={index}
            tabIndex="0"
            className={`
              group relative flex items-center justify-center
              w-14 h-14 md:w-16 md:h-16
              rounded-3xl border backdrop-blur-sm
              transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
              hover:scale-110 hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)] hover:z-50
              focus:-translate-y-2 focus:shadow-[0px_10px_20px_-10px_rgba(0,0,0,0.5)] focus:z-50
              active:scale-95 active:shadow-none active:translate-y-0
              ${skill.bg} cursor-pointer select-none tap-highlight-transparent outline-none
            `}
          >
            <i className={`${skill.icon} text-2xl md:text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-110 group-focus:scale-110 group-active:scale-95`}></i>
            
            <span className="absolute top-full mt-2 px-2 py-1 bg-slate-900/90 text-slate-200 text-xs font-medium rounded-md border border-slate-700 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-200 translate-y-[-10px] group-hover:translate-y-0 group-focus:translate-y-0 pointer-events-none z-20 whitespace-nowrap shadow-md">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturedSection = () => {
  const ProjectGridPagination = ({ items }) => {
    const [page, setPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    const currentItems = items.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const nextPage = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (page < totalPages - 1) setPage(p => p + 1);
    };

    const prevPage = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (page > 0) setPage(p => p - 1);
    };

    return (
      <div className="flex flex-col mt-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 min-h-[120px]">
          {currentItems.map((i) => (
            <Link 
              key={i} 
              to="/projects"
              className="aspect-video bg-slate-800 rounded-md border border-slate-700/50 overflow-hidden relative group/img hover:border-slate-500 transition-colors cursor-pointer block"
            >
              <img 
                src={`https://placehold.co/600x400/1e293b/475569?text=Project+${i}`} 
                alt={`Project ${i}`}
                className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full p-1.5 bg-linear-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity">
                 <span className="text-[10px] text-slate-300 font-medium truncate block">Project {i}</span>
              </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 pt-4">
            <button 
              onClick={prevPage}
              disabled={page === 0}
              className={`p-1.5 rounded-full border border-slate-700 transition-all duration-200 
                ${page === 0 ? 'text-slate-600 opacity-50 cursor-not-allowed' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
            >
              <i className="ri-arrow-left-s-line text-lg"></i>
            </button>
            
            <span className="text-xs text-slate-500 font-mono">
              {page + 1} / {totalPages}
            </span>

            <button 
              onClick={nextPage}
              disabled={page === totalPages - 1}
              className={`p-1.5 rounded-full border border-slate-700 transition-all duration-200 
                ${page === totalPages - 1 ? 'text-slate-600 opacity-50 cursor-not-allowed' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
            >
              <i className="ri-arrow-right-s-line text-lg"></i>
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="pt-0 space-y-6 w-full">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <i className="ri-stack-line text-2xl text-slate-400"></i>
          <h1 className="text-2xl font-bold text-white"><code>Featured</code></h1>
        </div>
        <p className="text-slate-500 text-sm">A sneak peek into my work and achievements.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-auto">
        {featuredCards.map((card, index) => (
          <div 
            key={index} 
            className={`
              ${card.grid || ''}
              group flex flex-col gap-3 p-5 rounded-xl border border-slate-700 bg-slate-800/30
              transition-all duration-300 ease-out
              ${card.border} ${card.bg}
            `}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/50 group-hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:bg-transparent transition-all`}>
                  <i className={`${card.icon} text-xl ${card.color}`}></i>
                </div>
                <span className={`text-base font-bold text-slate-200 group-hover:text-white transition-colors`}>{card.title}</span>
              </div>
              <Link to={card.path}>
                <i className="ri-arrow-right-line text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all"></i>
              </Link>
            </div>

            <div className="relative h-full flex flex-col">
              {card.type === 'carousel' ? (
                <ProjectGridPagination items={card.items} />
              ) : (
                card.content
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;