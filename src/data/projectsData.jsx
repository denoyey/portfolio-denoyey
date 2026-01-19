import { 
  SiLaravel, 
  SiTailwindcss,
  SiLivewire, 
  SiAlpinedotjs,
  SiFilament,
  SiReact,
  SiFramer,
  SiReactrouter,
  SiVite,
  SiLucide,
  SiRemix,
  SiBootstrap,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVercel,
} from "react-icons/si";

export const projectsData = [
  {
    id: 1,
    title: "HMTI UNIPI Official Website",
    slug: "hmti-unipi-official",
    description: "The official platform for Himpunan Mahasiswa Teknologi Informasi UNIPI. Designed to manage organizational events, member registrations, and student aspirations, serving as a central hub for the IT community.",
    image: "../assets/img/projects/hmtiunipi.webp",
    techStack: [
      { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Livewire", icon: SiLivewire, color: "text-pink-400" },
      { name: "Alpine.js", icon: SiAlpinedotjs, color: "text-teal-400" },
      { name: "Filament", icon: SiFilament, color: "text-yellow-400" },
      { name: "Remix Icon", icon: SiRemix, color: "text-blue-400" },
    ],
    link: "https://hmtiunipi.or.id"
  },
  {
    id: 2,
    title: "Tekinfo 24 Class Portal",
    slug: "tekinfo-24-unipi",
    description: "The dedicated digital hub for the Informatics Engineering Class of 2024 at UNIPI. Features student resources, schedules, and class updates to foster connection and collaboration.",
    image: "../assets/img/projects/tekinfo24.webp",
    techStack: [
      { name: "React", icon: SiReact, color: "text-blue-600" },
      { name: "React Router", icon: SiReactrouter, color: "text-red-400" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "Vite", icon: SiVite, color: "text-yellow-400" },
      { name: "Framer Motion", icon: SiFramer, color: "text-purple-400" },
      { name: "Lucide", icon: SiLucide, color: "text-pink-400" },
      { name: "Vercel", icon: SiVercel, color: "text-slate-500" },
    ],
    link: "https://tekinfo24-ip.vercel.app"
  },
  {
    id: 3,
    title: "Teknologi Informasi '24 Portal",
    slug: "tekfo-24-unipi-netlify",
    description: "The official landing page for the Informatics Engineering Class of 2024 (Tekfo 24). Serves as a digital profile and gallery showcase for the students of UNIPI.",
    image: "../assets/img/projects/tekfo24.webp",
    techStack: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JS", icon: SiJavascript, color: "text-yellow-500" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400" },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-400" }
    ],
    link: "https://tekfo24-unipi.netlify.app/"
  },
];
