import { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Menu, Terminal, GitBranch, Copyright } from 'lucide-react';
import { RiVerifiedBadgeFill } from '@remixicon/react';

const SidebarItem = ({ to, label, lineNum, isCollapsed, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative flex items-center gap-3 px-3 py-2.5 mx-2 rounded-md transition-colors duration-200 group font-mono ${
        isActive
          ? 'bg-slate-800 text-slate-100 border-l-2 border-slate-500'
          : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 border-l-2 border-transparent'
      } ${isCollapsed ? 'justify-center px-1' : ''}`
    }
  >
    {({ isActive }) => (
      <>
        <span className={`text-xs text-right select-none font-bold transition-all duration-200 group-hover:text-slate-100 group-hover:scale-x-150 group-hover:-rotate-6 ${isCollapsed ? 'text-sm text-slate-200' : 'w-4'} ${isActive ? 'text-slate-100 scale-x-150 -rotate-6' : 'text-slate-700'}`}>
          {lineNum}
        </span>
        
        {!isCollapsed && (
          <motion.span 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }} 
            className={`text-sm whitespace-nowrap overflow-hidden transition-transform duration-200 origin-left ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
          >
            <span className="text-purple-400">&lt;</span>{label}<span className="text-purple-400">/&gt;</span>
          </motion.span>
        )}

        {isCollapsed && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 bg-slate-900 text-slate-200 text-xs rounded-md border border-slate-700 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-100 whitespace-nowrap">
            <span className="text-purple-400">&lt;</span>{label}<span className="text-purple-400">/&gt;</span>
          </div>
        )}
      </>
    )}
  </NavLink>
);

function App() {
  const location = useLocation();
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [gitStatus, setGitStatus] = useState({ branch: 'local', hash: 'v1.0.0', message: 'Development Build' });

  useEffect(() => {
    fetch('https://api.github.com/repos/denoyey/portfolio-denoyey/commits?per_page=1')
      .then(res => {
        if (!res.ok) throw new Error('Repo Private/Not Found');
        return res.json();
      })
      .then(data => {
        if (data && data[0]) {
          setGitStatus({
            branch: 'main',
            hash: data[0].sha.substring(0, 7),
            message: data[0].commit.message
          });
        }
      })
      .catch(() => {
        setGitStatus({ branch: 'local', hash: 'denoyey', message: 'Private Repo / Local' });
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
        setIsSidebarOpen(!mobile);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-5xl h-[85vh] bg-[#1e293b] rounded-xl shadow-xl overflow-hidden border border-slate-700/50 font-sans"
      >
        
        {isMobile && (
          <div className="relative w-full bg-[#0f172a] border-b border-slate-800 flex flex-col shrink-0 z-50">
            <div className="flex items-center justify-between px-6 py-4 bg-[#0f172a] relative z-50">
               <div className="flex items-center gap-3">
                  <img src="https://github.com/denoyey.png" alt="Profile" className="w-10 h-10 rounded-full border border-slate-700" />
                  <div className="flex items-center gap-1">
                     <h2 className="text-xs font-bold text-slate-200 tracking-wide">Denoyey</h2>
                     <span className="flex items-center gap-1 text-[10px] text-slate-500">
                        <RiVerifiedBadgeFill size={14} className="text-blue-400" />
                     </span>
                  </div>
               </div>
               <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                  className="p-2 rounded-md hover:bg-slate-800 text-slate-500 transition-colors"
               >
                  {isSidebarOpen ? <ChevronLeft size={20} className="rotate-90" /> : <Menu size={20} />}
               </button>
            </div>

            <AnimatePresence>
               {isSidebarOpen && (
                 <motion.nav
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-full left-0 w-full overflow-hidden border-b border-slate-800 bg-[#0f172a] shadow-2xl z-40"
                 >
                    <div className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider px-4 font-mono mb-1">Explorer</div>
                    <div className="flex flex-col gap-1 pb-4 px-2">
                      <SidebarItem to="/" label="Home" lineNum="01" isCollapsed={false} onClick={() => setIsSidebarOpen(false)}/>
                      <SidebarItem to="/about" label="About" lineNum="02" isCollapsed={false} onClick={() => setIsSidebarOpen(false)}/>
                      <SidebarItem to="/achievements" label="Achievements" lineNum="03" isCollapsed={false} onClick={() => setIsSidebarOpen(false)}/>
                      <SidebarItem to="/projects" label="Projects" lineNum="04" isCollapsed={false} onClick={() => setIsSidebarOpen(false)}/>
                      <SidebarItem to="/dashboard" label="Dashboard" lineNum="05" isCollapsed={false} onClick={() => setIsSidebarOpen(false)}/>
                      <SidebarItem to="/contact" label="Contact" lineNum="06" isCollapsed={false} onClick={() => setIsSidebarOpen(false)}/>
                    </div>
                 </motion.nav>
               )}
            </AnimatePresence>
          </div>
        )}

        {!isMobile && (
          <motion.aside 
            initial={false}
            animate={{ width: isSidebarOpen ? 256 : 80 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`bg-[#0f172a] border-r border-slate-800 flex flex-col shrink-0 relative z-50 ${isSidebarOpen ? 'overflow-hidden' : 'overflow-visible'}`}
          >
            <div className={`flex flex-col pt-6 pb-2 px-6 border-b border-slate-800 bg-[#0f172a] transition-all duration-200 ${!isSidebarOpen ? 'items-center px-2' : ''}`}>
               <div className="flex items-center justify-between w-full mb-4">
                  <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                    className="p-1 rounded-md hover:bg-slate-800 text-slate-500 transition-colors ml-auto"
                  >
                    {isSidebarOpen ? <ChevronLeft size={16} /> : <Menu size={20} />}
                  </button>
               </div>
              
              {isSidebarOpen ? (
                <div className="flex flex-col items-center gap-1">
                   <img src="https://github.com/denoyey.png" alt="Profile" className="w-20 h-20 rounded-full border border-slate-700" />
                   <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="flex items-center gap-1 overflow-hidden">
                      <h2 className="text-xs font-bold text-slate-200 tracking-wide whitespace-nowrap">Denoyey</h2>
                      <span className="flex items-center gap-1 text-[10px] text-slate-500">
                        <RiVerifiedBadgeFill size={14} className="text-blue-400" />
                     </span>
                   </motion.div>
                </div>
              ) : (
                 <img src="https://github.com/denoyey.png" alt="Profile" className="w-8 h-8 rounded-full border border-slate-700 mb-2" />
              )}

              {isSidebarOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="mt-4 flex items-center gap-2 text-[10px] text-slate-500 font-mono overflow-hidden">
                   <div className="flex items-center shrink-0">
                      <span className="text-blue-500">git:(</span><span className="text-red-400 font-bold">{gitStatus.branch}</span><span className="text-blue-500">)</span>
                   </div>
                   <span className="truncate opacity-70 border-l border-slate-700 pl-2" title={gitStatus.message}>{gitStatus.message}</span>
                </motion.div>
              )}
            </div>

            <div className={`py-2 transition-all duration-300 ${isSidebarOpen ? 'px-6' : 'px-0 text-center'}`}>
               <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                 {isSidebarOpen ? 'Explorer' : '...'}
               </span>
            </div>

            <nav className={`flex-1 px-2 space-y-0.5 pt-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${isSidebarOpen ? 'overflow-y-auto' : 'overflow-visible'}`}>
              <SidebarItem to="/" label="Home" lineNum="01" isCollapsed={!isSidebarOpen} />
              <SidebarItem to="/about" label="About" lineNum="02" isCollapsed={!isSidebarOpen} />
              <SidebarItem to="/achievements" label="Achievements" lineNum="03" isCollapsed={!isSidebarOpen} />
              <SidebarItem to="/projects" label="Projects" lineNum="04" isCollapsed={!isSidebarOpen} />
              <SidebarItem to="/dashboard" label="Dashboard" lineNum="05" isCollapsed={!isSidebarOpen} />
              <SidebarItem to="/contact" label="Contact" lineNum="06" isCollapsed={!isSidebarOpen} />
            </nav>

            <div className={`p-4 border-t border-slate-800 bg-[#0f172a] ${!isSidebarOpen ? 'flex justify-center' : ''}`}>
               {isSidebarOpen ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="flex flex-col gap-1 text-xs text-slate-500 font-mono">
                     <div className="flex items-center justify-center gap-2">
                        <Copyright size={12} />
                        <span>{new Date().getFullYear()}</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="font-bold text-slate-400">Deni Setiawan Pratama</span>
                        <span className="text-[10px] opacity-70">All rights reserved.</span>
                     </div>
                  </motion.div>
               ) : (
                  <Copyright size={16} className="text-slate-500" />
               )}
            </div>
          </motion.aside>
        )}

        <main className="flex-1 relative overflow-hidden flex flex-col bg-[#1e293b]">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
             <AnimatePresence mode="wait" onExitComplete={() => scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' })}>
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-4xl mx-auto md:text-base text-sm"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </motion.div>
    </div>
  );
}

export default App;