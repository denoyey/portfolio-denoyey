import { contactData } from '../data/contactData';
import { 
  RiArrowRightUpLine, 
  RiUserLine, 
  RiMailLine, 
  RiChat1Line, 
  RiSendPlaneFill,
  RiLoader2Line,
  RiCheckLine
} from '@remixicon/react';
// eslint-disable-next-line
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from 'react';

const SkeletonContact = () => {
    return (
        <div className="flex flex-col items-start gap-8 w-full">
            <div className="w-full space-y-2">
                <Skeleton width={100} height={32} baseColor="#1e293b" highlightColor="#334155" />
                <Skeleton width={300} height={20} baseColor="#1e293b" highlightColor="#334155" />
                <div className="pt-6">
                    <Skeleton height={2} baseColor="#1e293b" highlightColor="#334155" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-5 rounded-xl border border-slate-800 bg-slate-900/20 h-[180px] flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <Skeleton width={50} height={50} borderRadius={10} baseColor="#1e293b" highlightColor="#334155" />
                            <Skeleton width={20} height={20} baseColor="#1e293b" highlightColor="#334155" />
                        </div>
                        <div className="space-y-1">
                            <Skeleton width={100} height={24} baseColor="#1e293b" highlightColor="#334155" />
                            <Skeleton width={80} height={16} baseColor="#1e293b" highlightColor="#334155" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full rounded-xl border border-slate-800 bg-slate-900/20 p-2 md:p-4 space-y-6">
                <Skeleton width={140} height={20} baseColor="#1e293b" highlightColor="#334155" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Skeleton width={50} height={16} baseColor="#1e293b" highlightColor="#334155" />
                        <Skeleton height={42} borderRadius={8} baseColor="#1e293b" highlightColor="#334155" />
                    </div>
                    <div className="space-y-1.5">
                        <Skeleton width={50} height={16} baseColor="#1e293b" highlightColor="#334155" />
                        <Skeleton height={42} borderRadius={8} baseColor="#1e293b" highlightColor="#334155" />
                    </div>
                    <div className="md:col-span-2 space-y-1.5">
                        <Skeleton width={70} height={16} baseColor="#1e293b" highlightColor="#334155" />
                        <Skeleton height={120} borderRadius={8} baseColor="#1e293b" highlightColor="#334155" />
                    </div>
                    <div className="md:col-span-2">
                        <Skeleton height={42} borderRadius={8} baseColor="#1e293b" highlightColor="#334155" />
                    </div>
                </div>
            </div>
        </div>
    );
};


const Contact = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100">
                <SkeletonContact />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100">
            <ContactHeader />
            <ContactContent />
            <ContactForm />
        </div>
    );
};

const ContactHeader = () => {
    return (
        <section className="space-y-2 w-full">
            <h1 className="text-2xl font-semibold mb-2">Contact</h1>
            <p className="text-slate-300 text-sm">
            Let's connect and let's create something amazing together.
            </p>
            <hr className="w-full border border-dashed mt-6 border-slate-700" />
        </section>
    );
};

const ContactContent = () => {
    const ContactCard = ({ item }) => {
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        function handleMouseMove({ currentTarget, clientX, clientY }) {
            let { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        function handleTouchMove({ currentTarget, touches }) {
            let { left, top } = currentTarget.getBoundingClientRect();
            let clientX = touches[0].clientX;
            let clientY = touches[0].clientY;
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        return (
            <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    ${item.grid || ''}
                    group flex flex-col justify-between p-5 rounded-xl border
                    ${item.bg} ${item.border} ${item.shadow}
                    transition-all duration-300 relative overflow-hidden
                    tap-highlight-transparent focus:outline-none select-none
                `}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchMove}
            >
                 <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 transition duration-300 z-0"
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
                
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-lg bg-slate-900/40 backdrop-blur-sm border border-slate-700/30 ${item.color}`}>
                            <item.icon size={24} />
                        </div>
                        <RiArrowRightUpLine 
                            className={`text-slate-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`} 
                            size={20} 
                        />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-100 mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-400 font-medium mb-3">{item.username}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>

                <div className={`absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rotate-12 scale-150`}>
                    <item.icon size={120} />
                </div>
            </a>
        );
    };

    return (
        <div className='w-full'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-fr pb-2">
                {contactData.map((item, index) => (
                    <ContactCard key={index} item={item} />
                ))}
            </div>
            <hr className="w-full border mt-6 border-slate-700" />
        </div>
    );
};

const ContactForm = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    function handleTouchMove({ currentTarget, touches }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        let clientX = touches[0].clientX;
        let clientY = touches[0].clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section 
            className="w-full relative group rounded-xl border border-slate-800 bg-slate-900/20 overflow-hidden"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchMove}
        >
             <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-within:opacity-100 transition duration-300 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 p-2 md:p-4 space-y-6">
                <div className="space-y-1">
                    <h2 className="text-sm font-bold text-white">Or Send a Message</h2>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} autoComplete="off">
                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300 ml-1">Name</label>
                        <div className="relative group/input">
                            <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                                placeholder="Your Name" 
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-2.5 pl-2 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300 ml-1">Email</label>
                        <div className="relative group/input">
                            <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                                placeholder="your@email.com" 
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-2.5 pl-2 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                        <label className="text-xs font-medium text-slate-300 ml-1">Message</label>
                        <div className="relative group/input">
                            <RiChat1Line className="absolute left-2 top-3 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                            <textarea 
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                                placeholder="Tell me about your project..." 
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-2.5 pl-2 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 resize-none backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            ></textarea>
                        </div>
                    </div>

                    <div className="md:col-span-2 w-full">
                        <button 
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                                ${status === 'success' ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white hover:shadow-cyan-500/20'}
                            `}
                        >
                            {status === 'sending' ? (
                                <>
                                    <RiLoader2Line className="animate-spin" size={16} />
                                    <span>Sending...</span>
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <RiCheckLine size={16} />
                                    <span>Message Sent!</span>
                                </>
                            ) : (
                                <>
                                    <RiSendPlaneFill size={16} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;