import { useState, useRef, useEffect, useMemo } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Search, ChevronDown, Check, X, ArrowUpRight } from 'lucide-react';
import {
    achievementsData,
    achievementTypes,
    achievementCategories,
    typeColors,
    categoryColors
} from '../data/achievementData';

const Achievement = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const filteredAchievements = useMemo(() => {
        return achievementsData.filter(achievement => {
            const matchesSearch = searchQuery === '' ||
                achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                achievement.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                achievement.organization.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesType = typeFilter === 'all' || achievement.type === typeFilter;
            const matchesCategory = categoryFilter === 'all' || achievement.category === categoryFilter;

            return matchesSearch && matchesType && matchesCategory;
        });
    }, [searchQuery, typeFilter, categoryFilter]);

    return (
        <>
            <AchievementHeader />
            <AchievementFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                totalCount={filteredAchievements.length}
            />
            <AchievementContent
                achievements={filteredAchievements}
                onSelectAchievement={setSelectedAchievement}
            />

            {selectedAchievement && (
                <AchievementModal
                    achievement={selectedAchievement}
                    onClose={() => setSelectedAchievement(null)}
                />
            )}
        </>
    )
}

const AchievementHeader = () => {
    return (
        <section className="space-y-2 w-full">
            <h1 className="text-2xl font-semibold mb-2">Achievements</h1>
            <p className="text-slate-300 text-sm">
                A curated collection of certificates and badges I've earned throughout my professional and academic journey.
            </p>
            <hr className="w-full border border-dashed mt-6 mb-6 border-slate-700" />
        </section>
    );
};

const SearchableSelect = ({ options, value, onChange, placeholder, width = 'w-40' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const selectedOption = options.find(opt => opt.value === value);
    const selectedLabel = selectedOption?.label || placeholder;

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClear = (e) => {
        e.stopPropagation();
        onChange('all');
        setSearchTerm('');
    };

    return (
        <div className={`relative ${width}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-2 px-3 py-2 text-sm bg-slate-800/50 border-2 border-slate-600 rounded-lg text-white hover:border-slate-500 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400/50 transition-all duration-200"
            >
                <span className={value === 'all' ? 'text-slate-400' : 'text-white'}>
                    {selectedLabel}
                </span>
                <div className="flex items-center gap-1">
                    {value !== 'all' && (
                        <X
                            className="w-3.5 h-3.5 text-slate-400 hover:text-white transition-colors"
                            onClick={handleClear}
                        />
                    )}
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-md overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="p-2 border-b border-slate-700">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-700/50 border border-slate-600/50 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-slate-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div
                        className="max-h-48 overflow-y-auto py-1 [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors ${value === option.value
                                        ? 'bg-indigo-600/30 text-indigo-300'
                                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                        }`}
                                >
                                    <span>{option.label}</span>
                                    {value === option.value && (
                                        <Check className="w-4 h-4 text-indigo-400" />
                                    )}
                                </button>
                            ))
                        ) : (
                            <div className="px-3 py-4 text-xs text-slate-500 text-center">
                                No results found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const AchievementFilters = ({
    searchQuery,
    setSearchQuery,
    typeFilter,
    setTypeFilter,
    categoryFilter,
    setCategoryFilter,
    totalCount,
}) => {
    return (
        <section className="w-full mb-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="relative w-full sm:w-56">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-sm bg-slate-800/50 border-2 border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400/50 transition-all duration-200"
                    />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <SearchableSelect
                        options={achievementTypes}
                        value={typeFilter}
                        onChange={setTypeFilter}
                        placeholder="Filter by Type"
                        width="flex-1 sm:flex-none sm:w-36"
                    />

                    <SearchableSelect
                        options={achievementCategories}
                        value={categoryFilter}
                        onChange={setCategoryFilter}
                        placeholder="Filter by Category"
                        width="flex-1 sm:flex-none sm:w-44"
                    />
                </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
                <span className="text-slate-400 text-sm">Total:</span>
                <span className="text-white text-sm font-medium">{totalCount}</span>
            </div>
        </section>
    );
};

const AchievementContent = ({ achievements, onSelectAchievement }) => {
    if (achievements.length === 0) {
        return (
            <section className="space-y-4 w-full">
                <div className="min-h-[30vh] flex flex-col items-center justify-center">
                    <div className="text-slate-500 text-center">
                        <p className="text-lg mb-2">No achievements found</p>
                        <p className="text-sm">Try adjusting your search or filters</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="space-y-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                    <AchievementCard
                        key={achievement.id}
                        achievement={achievement}
                        onSelect={onSelectAchievement}
                    />
                ))}
            </div>
        </section>
    );
};

const AchievementCard = ({ achievement, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    function handleTouchMove({ currentTarget, touches }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        const clientX = touches[0].clientX;
        const clientY = touches[0].clientY;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative overflow-hidden bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
            onClick={() => onSelect(achievement)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={(e) => {
                handleTouchMove(e);
                setIsHovered(true);
            }}
            onTouchEnd={() => setIsHovered(false)}
        >
            {/* Cursor light effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative aspect-4/3 overflow-hidden bg-slate-800 z-10">
                <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                />
                <div
                    className="absolute inset-0 z-1"
                    onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent z-2" />

                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-slate-100 font-semibold text-[10px] border border-slate-500/50 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg flex items-center gap-2 scale-90 group-hover:scale-100 group-active:scale-100 transition-transform duration-300">
                        View Detail
                        <motion.span
                            className="inline-block"
                            animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                        >
                            <ArrowUpRight className="w-3 h-3" />
                        </motion.span>
                    </span>
                </div>
            </div>

            <div className="p-4 relative z-10">
                <h3 className="text-white font-medium text-sm mb-1 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                    {achievement.title}
                </h3>
                <p className="text-slate-400 text-xs mb-3 line-clamp-1">
                    {achievement.organization}
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className={`px-2 py-0.5 text-xs rounded-full border ${typeColors[achievement.type]}`}>
                        {achievement.type}
                    </span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${categoryColors[achievement.category]}`}>
                        {achievement.category}
                    </span>
                </div>
            </div>
        </div>
    );
};

const AchievementModal = ({ achievement, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const typeColor = typeColors[achievement.type] || 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    const categoryColor = categoryColors[achievement.category] || 'bg-slate-500/20 text-slate-400';

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/80" />

            <div
                className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="flex flex-col md:flex-row">
                    <div
                        className="w-full md:w-[600px] h-64 md:h-[450px] shrink-0 bg-slate-800 flex items-center justify-center p-4 relative"
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        <img
                            src={achievement.image}
                            alt={achievement.title || 'Certificate'}
                            className="max-w-full max-h-full object-contain select-none pointer-events-none"
                            draggable="false"
                            onContextMenu={(e) => e.preventDefault()}
                            onDragStart={(e) => e.preventDefault()}
                        />
                        <div
                            className="absolute inset-0 z-1"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>

                    <div
                        className="flex-1 p-4 overflow-y-auto max-h-[350px] md:max-h-[450px] md:max-w-[320px]"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <h2 className="text-base font-semibold text-white mb-1">
                            {achievement.title || 'Untitled'}
                        </h2>
                        <p className="text-slate-400 text-xs mb-3">
                            {achievement.organization || '-'}
                        </p>

                        {(achievement.type || achievement.category) && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {achievement.type && (
                                    <span className={`px-2 py-0.5 text-xs rounded border ${typeColor}`}>
                                        {achievement.type}
                                    </span>
                                )}
                                {achievement.category && (
                                    <span className={`px-2 py-0.5 text-xs rounded ${categoryColor}`}>
                                        {achievement.category}
                                    </span>
                                )}
                            </div>
                        )}

                        <div className="space-y-6 text-sm">
                            {achievement.credentialId && (
                                <div>
                                    <p className="text-slate-500 text-xs">Credential ID</p>
                                    <p className="text-white font-mono text-xs">{achievement.credentialId}</p>
                                </div>
                            )}
                            {achievement.issuer && (
                                <div>
                                    <p className="text-slate-500 text-xs">Issuer</p>
                                    <p className="text-white text-sm">{achievement.issuer}</p>
                                </div>
                            )}
                            {achievement.issueDate && (
                                <div>
                                    <p className="text-slate-500 text-xs">Issue Date</p>
                                    <p className="text-white text-sm">{achievement.issueDate}</p>
                                </div>
                            )}
                            {achievement.description && (
                                <div>
                                    <p className="text-slate-500 text-xs">Description</p>
                                    <p className="text-slate-300 text-xs leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement