import React, { useEffect, useState, useRef } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { SiGithub } from "react-icons/si";
import { RiFireFill, RiGitCommitFill, RiFlashlightFill } from "@remixicon/react";
import { 
  // eslint-disable-next-line no-unused-vars
  motion, 
  useMotionTemplate, 
  useMotionValue,
  useTransform,
  animate
} from "framer-motion";

const SpotlightCard = ({ children, className = "", onMouseMove }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    let { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    if (onMouseMove) onMouseMove(e);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-colors hover:border-slate-700/50 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"
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
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

export default function GithubStats() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({ total: 0, max: 0, current: 0 });
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const username = "denoyey";

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(response => response.json())
      .then(json => {
        setData(json.contributions);
        const total = json.contributions.reduce((sum, day) => sum + day.count, 0);
        const max = Math.max(...json.contributions.map(day => day.count));
        const current = json.contributions[json.contributions.length - 1]?.count || 0;
        setStats({ total, max, current });
      })
      .catch(error => console.log(error));
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full text-slate-100 font-sans selection:bg-cyan-500/30">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <div className="">
              <SiGithub size={22} className="text-slate-200" />
            </div>
            <div className='flex gap-2 items-center'>
              <h2 className="text-base font-mono text-white leading-tight">GitHub Activity</h2>
              <p className="text-xs text-slate-500 font-mono">[{username}]</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <SpotlightCard className="p-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">Total Commits</p>
              <p className="text-xl font-mono text-cyan-400 font-bold leading-none">
                <AnimatedNumber value={stats.total} />
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">Peak Day</p>
              <p className="text-xl font-mono text-orange-400 font-bold leading-none">
                <AnimatedNumber value={stats.max} />
              </p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-4 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">Today</p>
              <p className="text-xl font-mono text-emerald-400 font-bold leading-none">
                <AnimatedNumber value={stats.current} />
              </p>
            </div>
          </SpotlightCard>
        </div>

        <div className="space-y-2">
          <style>
            {`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}
          </style>
          
          <SpotlightCard 
            onMouseMove={handleMouseMove}
            className="cursor-default"
          >
            <div 
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              className={`relative z-10 hide-scrollbar overflow-x-auto p-5 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
              <div className="min-w-max">
                {data.length > 0 ? (
                  <ActivityCalendar
                    data={data}
                    blockSize={11}
                    blockMargin={3}
                    fontSize={11}
                    theme={{
                      light: ['#1e293b', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    }}
                    showWeekdayLabels
                    labels={{
                      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    }}
                  />
                ) : (
                  <div className="h-28 flex items-center justify-center text-slate-600 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                    Synchronizing GitHub History...
                  </div>
                )}
              </div>
            </div>
          </SpotlightCard>

          <div className="flex justify-end px-1">
             <span className="text-[9px] text-slate-500 font-medium italic opacity-70">Hint: Click & Drag to explore history &rarr;</span>
          </div>
        </div>

      </div>
    </div>
  );
}