import {
  RiMailFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTiktokFill,
  RiGithubFill
} from "@remixicon/react";

export const contactData = [
  {
    name: "Email",
    username: "ddeblong42@gmail.com",
    link: "mailto:ddeblong42@gmail.com",
    icon: RiMailFill,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20 hover:border-red-500/50",
    shadow: "hover:shadow-red-500/10",
    description: "Send me an email for collaborations.",
    grid: "md:col-span-2 lg:col-span-4 bg-linear-to-br from-red-500/5 to-red-500/20"
  },
  {
    name: "LinkedIn",
    username: "Deni Setiawan Pratama",
    link: "https://linkedin.com/in/denoyey",
    icon: RiLinkedinFill,
    color: "text-blue-400",
    bg: "bg-blue-600/10",
    border: "border-blue-600/20 hover:border-blue-600/50",
    shadow: "hover:shadow-blue-600/10",
    description: "Let's connect professionally.",
    grid: "md:col-span-1 lg:col-span-2"
  },
  {
    name: "GitHub",
    username: "denoyey",
    link: "https://github.com/denoyey",
    icon: RiGithubFill,
    color: "text-slate-100",
    bg: "bg-slate-700/30",
    border: "border-slate-600/30 hover:border-slate-500/50",
    shadow: "hover:shadow-slate-500/10",
    description: "View my open source projects.",
    grid: "md:col-span-1 lg:col-span-2"
  },
  {
    name: "Instagram",
    username: "@dnisepr",
    link: "https://instagram.com/dnisepr",
    icon: RiInstagramFill,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20 hover:border-pink-500/50",
    shadow: "hover:shadow-pink-500/10",
    description: "Follow my daily updates & stories.",
    grid: "md:col-span-1 lg:col-span-2"
  },
  {
    name: "TikTok",
    username: "@denoyey",
    link: "https://tiktok.com/@denoyey",
    icon: RiTiktokFill,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    shadow: "hover:shadow-cyan-500/10",
    description: "Check out my coding content.",
    grid: "md:col-span-1 lg:col-span-2"
  }
];
