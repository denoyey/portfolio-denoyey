/**
 * Skeleton Components Library
 * ===========================
 * Reusable skeleton loading components for better UX during data fetching.
 * 
 * Usage Examples:
 * - Import primitives: Skeleton, SkeletonText, SkeletonCircle
 * - Import page skeletons: HomePageSkeleton, AboutPageSkeleton, etc.
 * 
 * Organization (alphabetical by page):
 * 1. Primitives - Base building blocks
 * 2. Home Page Skeletons
 * 3. About Page Skeletons
 * 4. Achievement Page Skeletons
 * 5. Projects Page Skeletons
 * 6. Contact Page Skeletons
 * 7. Utility Skeletons
 */

// =============================================================================
// 1. SKELETON PRIMITIVES
// Base building blocks for creating custom skeleton layouts
// =============================================================================

/**
 * Base Skeleton component with animation options
 * @param {string} className - Additional Tailwind classes
 * @param {boolean} animate - Enable/disable animation (default: true)
 * @param {'pulse' | 'shimmer'} animationType - Animation type (default: 'shimmer')
 */
export const Skeleton = ({ className = '', animate = true, animationType = 'shimmer' }) => {
    const animationClass = animate
        ? animationType === 'shimmer'
            ? 'animate-shimmer'
            : 'animate-pulse bg-slate-700/50'
        : 'bg-slate-700/50';

    return (
        <div
            className={`
                rounded-lg
                ${animationClass}
                ${className}
            `}
        />
    );
};

/**
 * Text skeleton with customizable lines
 * @param {number} lines - Number of text lines to display
 * @param {string} className - Additional classes for container
 * @param {string} lineClassName - Additional classes for each line
 * @param {boolean} lastLineShort - Make last line shorter (default: true)
 */
export const SkeletonText = ({
    lines = 1,
    className = '',
    lineClassName = '',
    lastLineShort = true
}) => {
    return (
        <div className={`space-y-2 ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
                <Skeleton
                    key={index}
                    className={`
                        h-3
                        ${lastLineShort && index === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'}
                        ${lineClassName}
                    `}
                />
            ))}
        </div>
    );
};

/**
 * Circle skeleton for avatars/icons
 * @param {string} size - Size class (e.g., 'w-10 h-10')
 */
export const SkeletonCircle = ({ size = 'w-10 h-10', className = '' }) => {
    return (
        <Skeleton className={`rounded-full ${size} ${className}`} />
    );
};

/**
 * Badge/Tag skeleton
 * @param {string} width - Width class
 */
export const SkeletonBadge = ({ width = 'w-16', className = '' }) => {
    return (
        <Skeleton className={`h-5 rounded-full ${width} ${className}`} />
    );
};

/**
 * Section header skeleton with icon and title
 */
export const SectionHeaderSkeleton = ({ titleWidth = 'w-32' }) => {
    return (
        <div className="space-y-1">
            <div className="flex items-center gap-3">
                <Skeleton className="w-6 h-6 rounded-md" />
                <Skeleton className={`h-7 ${titleWidth}`} />
            </div>
            <Skeleton className="h-4 w-48" />
        </div>
    );
};

/**
 * Page title skeleton with description
 */
export const PageHeaderSkeleton = ({ titleWidth = 'w-32', descWidth = 'w-64' }) => {
    return (
        <section className="space-y-2 w-full">
            <Skeleton className={`h-8 ${titleWidth} mb-2`} />
            <Skeleton className={`h-4 ${descWidth}`} />
            <div className="w-full border border-dashed mt-6 mb-6 border-slate-700" />
        </section>
    );
};

// =============================================================================
// 2. HOME PAGE SKELETONS
// =============================================================================

/**
 * Skeleton for MiniAbout section
 */
export const MiniAboutSkeleton = () => {
    return (
        <div className="space-y-4 w-full">
            {/* Title with emoji */}
            <div className="flex flex-col gap-2">
                <Skeleton className="h-8 w-4/5 max-w-md" />
                <div className="flex items-center gap-2">
                    <SkeletonCircle size="w-2 h-2" />
                    <Skeleton className="h-4 w-48" />
                </div>
            </div>
            {/* Description paragraph */}
            <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/5" />
            </div>
        </div>
    );
};

/**
 * Skeleton for MiniSkills section
 * @param {number} skillCount - Number of skill icons to show
 */
export const MiniSkillsSkeleton = ({ skillCount = 6 }) => {
    return (
        <div className="pt-0 pb-2 space-y-6 w-full">
            <SectionHeaderSkeleton titleWidth="w-20" />

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {Array.from({ length: skillCount }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl"
                    />
                ))}
            </div>
        </div>
    );
};

/**
 * Skeleton for Featured card item
 */
export const FeaturedCardSkeleton = ({ type = 'carousel' }) => {
    return (
        <div className="flex flex-col gap-3 p-5 rounded-xl border border-slate-700 bg-slate-800/30">
            {/* Card header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-lg" />
                    <Skeleton className="h-5 w-28" />
                </div>
                <Skeleton className="w-5 h-5 rounded" />
            </div>

            {/* Card content */}
            <div className="relative h-full flex flex-col mt-2">
                {type === 'carousel' ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 min-h-[120px]">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Skeleton
                                key={index}
                                className="aspect-video rounded-md"
                            />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>
                )}
            </div>
        </div>
    );
};

/**
 * Skeleton for Featured section
 */
export const FeaturedSectionSkeleton = () => {
    return (
        <div className="pt-0 space-y-6 w-full">
            <SectionHeaderSkeleton titleWidth="w-28" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-auto">
                <FeaturedCardSkeleton type="carousel" />
                <FeaturedCardSkeleton type="text" />
            </div>
        </div>
    );
};

/**
 * Complete Home Page Skeleton
 */
export const HomePageSkeleton = () => {
    return (
        <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100 w-full">
            <MiniAboutSkeleton />
            <div className="w-full h-px bg-slate-700/50" />
            <MiniSkillsSkeleton skillCount={6} />
            <div className="w-full h-px bg-slate-700/50" />
            <FeaturedSectionSkeleton />
        </div>
    );
};

// =============================================================================
// 3. ABOUT PAGE SKELETONS
// =============================================================================

/**
 * Skeleton for About content section
 */
export const AboutContentSkeleton = () => {
    return (
        <section className="space-y-2 w-full">
            <Skeleton className="h-8 w-20 mb-2" />
            <Skeleton className="h-4 w-48" />
            <div className="w-full border border-dashed mt-6 mb-6 border-slate-700" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="w-full border mt-6 border-slate-700" />
        </section>
    );
};

/**
 * Skeleton for Career card
 */
export const CareerCardSkeleton = () => {
    return (
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 w-full">
            <div className="flex gap-3">
                {/* Company logo */}
                <Skeleton className="w-16 h-16 md:w-20 md:h-20 rounded-lg shrink-0" />

                <div className="flex-1 min-w-0 space-y-2">
                    {/* Title */}
                    <Skeleton className="h-5 w-40" />
                    {/* Company & Location */}
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-3 w-24" />
                        <Skeleton className="h-3 w-20" />
                    </div>
                    {/* Tags */}
                    <div className="flex gap-2 pt-2">
                        <Skeleton className="h-6 w-28 rounded" />
                        <Skeleton className="h-6 w-16 rounded" />
                        <Skeleton className="h-6 w-16 rounded" />
                    </div>
                </div>
            </div>
            {/* Button */}
            <Skeleton className="h-10 w-full mt-4 rounded-lg" />
        </div>
    );
};

/**
 * Skeleton for Career section
 * @param {number} count - Number of career cards
 */
export const CareerSectionSkeleton = ({ count = 2 }) => {
    return (
        <section className="w-full space-y-4">
            <div className="flex items-center gap-2 mb-2">
                <SkeletonCircle size="w-5 h-5" />
                <Skeleton className="h-6 w-28" />
            </div>
            <Skeleton className="h-4 w-48 mb-6" />

            <div className="flex flex-col gap-4">
                {Array.from({ length: count }).map((_, index) => (
                    <CareerCardSkeleton key={index} />
                ))}
            </div>
            <div className="w-full border mt-8 border-slate-700" />
        </section>
    );
};

/**
 * Skeleton for Education card
 */
export const EducationCardSkeleton = () => {
    return (
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-4 w-full flex gap-3">
            {/* University logo */}
            <SkeletonCircle size="w-16 h-16 md:w-20 md:h-20" className="shrink-0" />

            <div className="flex-1 min-w-0 space-y-2">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-3 w-52" />
            </div>
        </div>
    );
};

/**
 * Skeleton for Education section
 * @param {number} count - Number of education cards
 */
export const EducationSectionSkeleton = ({ count = 1 }) => {
    return (
        <section className="w-full space-y-4">
            <div className="flex items-center gap-2 mb-2">
                <SkeletonCircle size="w-5 h-5" />
                <Skeleton className="h-6 w-28" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <Skeleton className="h-4 w-48" />
                <div className="flex gap-2">
                    <Skeleton className="h-8 w-36 rounded-md" />
                    <Skeleton className="h-8 w-36 rounded-md" />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {Array.from({ length: count }).map((_, index) => (
                    <EducationCardSkeleton key={index} />
                ))}
            </div>
        </section>
    );
};

/**
 * Complete About Page Skeleton
 */
export const AboutPageSkeleton = () => {
    return (
        <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100 w-full">
            <AboutContentSkeleton />
            <CareerSectionSkeleton count={2} />
            <EducationSectionSkeleton count={1} />
        </div>
    );
};

// =============================================================================
// 4. DASHBOARD PAGE SKELETONS
// =============================================================================

/**
 * Skeleton for Dashboard header
 */
export const DashboardHeaderSkeleton = () => {
    return (
        <PageHeaderSkeleton titleWidth="w-32" descWidth="w-full max-w-2xl" />
    );
};

/**
 * Skeleton for GitHub stats cards (3 columns)
 */
export const GithubStatsCardsSkeleton = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
                <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
                >
                    <div className="space-y-1">
                        <Skeleton className="h-2 w-16" />
                        <Skeleton className="h-6 w-12" />
                    </div>
                </div>
            ))}
        </div>
    );
};

/**
 * Skeleton for GitHub activity calendar
 */
export const GithubActivityCalendarSkeleton = () => {
    return (
        <div className="space-y-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                {/* Calendar header row */}
                <div className="flex gap-1 mb-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <Skeleton key={i} className="h-3 w-8" />
                    ))}
                </div>

                {/* Calendar grid placeholder */}
                <div className="space-y-1">
                    {Array.from({ length: 7 }).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex gap-1">
                            {Array.from({ length: 52 }).map((_, colIndex) => (
                                <Skeleton
                                    key={colIndex}
                                    className="w-3 h-3 rounded-sm"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Hint text */}
            <div className="flex justify-end px-1">
                <Skeleton className="h-3 w-48" />
            </div>
        </div>
    );
};

/**
 * Skeleton for complete GithubStats component
 */
export const GithubStatsSkeleton = () => {
    return (
        <div className="w-full text-slate-100">
            <div className="max-w-4xl mx-auto space-y-2">
                {/* Header */}
                <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-2">
                        <Skeleton className="w-6 h-6 rounded" />
                        <div className="flex gap-2 items-center">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>
                </div>

                {/* Stats cards */}
                <GithubStatsCardsSkeleton />

                {/* Activity calendar */}
                <GithubActivityCalendarSkeleton />
            </div>
        </div>
    );
};

/**
 * Complete Dashboard Page Skeleton
 */
export const DashboardPageSkeleton = () => {
    return (
        <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100 w-full">
            <DashboardHeaderSkeleton />
            <GithubStatsSkeleton />
        </div>
    );
};

// =============================================================================
// 5. ACHIEVEMENT PAGE SKELETONS
// =============================================================================

/**
 * Skeleton for AchievementHeader component
 */
export const AchievementHeaderSkeleton = () => {
    return (
        <PageHeaderSkeleton titleWidth="w-36" descWidth="w-full max-w-xl" />
    );
};

/**
 * Skeleton for AchievementFilters component
 */
export const AchievementFiltersSkeleton = () => {
    return (
        <section className="w-full mb-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <Skeleton className="w-full sm:w-56 h-10 rounded-lg" />
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Skeleton className="flex-1 sm:flex-none sm:w-36 h-10 rounded-lg" />
                    <Skeleton className="flex-1 sm:flex-none sm:w-44 h-10 rounded-lg" />
                </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-6" />
            </div>
        </section>
    );
};

/**
 * Skeleton for individual AchievementCard
 */
export const AchievementCardSkeleton = () => {
    return (
        <div className="relative overflow-hidden bg-slate-800/30 border border-slate-700/50 rounded-xl">
            <div className="relative aspect-4/3 overflow-hidden bg-slate-800">
                <Skeleton className="w-full h-full rounded-none" />
            </div>
            <div className="p-4">
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-3/4 mb-1" />
                <Skeleton className="h-3 w-1/2 mb-3" />
                <div className="flex flex-wrap gap-2">
                    <SkeletonBadge width="w-20" />
                    <SkeletonBadge width="w-24" />
                </div>
            </div>
        </div>
    );
};

/**
 * Skeleton grid for AchievementContent
 * @param {number} count - Number of card skeletons to display
 */
export const AchievementGridSkeleton = ({ count = 6 }) => {
    return (
        <section className="space-y-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: count }).map((_, index) => (
                    <AchievementCardSkeleton key={index} />
                ))}
            </div>
        </section>
    );
};

/**
 * Complete Achievement Page Skeleton
 * @param {number} cardCount - Number of card skeletons to show
 */
export const AchievementPageSkeleton = ({ cardCount = 6 }) => {
    return (
        <>
            <AchievementHeaderSkeleton />
            <AchievementFiltersSkeleton />
            <AchievementGridSkeleton count={cardCount} />
        </>
    );
};

// =============================================================================
// 6. PROJECTS PAGE SKELETONS
// =============================================================================

/**
 * Skeleton for Projects header
 */
export const ProjectsHeaderSkeleton = () => {
    return (
        <PageHeaderSkeleton titleWidth="w-28" descWidth="w-80" />
    );
};

/**
 * Skeleton for individual Project card
 */
export const ProjectCardSkeleton = () => {
    return (
        <div className="bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700/50 flex flex-col h-full">
            {/* Image area */}
            <div className="h-50 shrink-0">
                <Skeleton className="w-full h-[200px] rounded-none" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col grow space-y-3">
                <Skeleton className="h-5 w-3/5" />
                <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                </div>

                {/* Tech stack icons */}
                <div className="pt-4 mt-auto flex gap-3 border-t border-slate-700/50">
                    <SkeletonCircle size="w-6 h-6" />
                    <SkeletonCircle size="w-6 h-6" />
                    <SkeletonCircle size="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

/**
 * Skeleton grid for Projects content
 * @param {number} count - Number of project cards
 */
export const ProjectsGridSkeleton = ({ count = 4 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {Array.from({ length: count }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
            ))}
        </div>
    );
};

/**
 * Complete Projects Page Skeleton
 * @param {number} cardCount - Number of project cards
 */
export const ProjectsPageSkeleton = ({ cardCount = 4 }) => {
    return (
        <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100 w-full">
            <ProjectsHeaderSkeleton />
            <ProjectsGridSkeleton count={cardCount} />
        </div>
    );
};

// =============================================================================
// 7. CONTACT PAGE SKELETONS
// =============================================================================

/**
 * Skeleton for Contact header
 */
export const ContactHeaderSkeleton = () => {
    return (
        <PageHeaderSkeleton titleWidth="w-24" descWidth="w-72" />
    );
};

/**
 * Skeleton for Contact card - matches ContactCard layout
 */
export const ContactCardSkeleton = () => {
    return (
        <div className="flex flex-col justify-between p-5 rounded-xl border border-slate-800 bg-slate-900/20">
            {/* Header: Icon + Arrow */}
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-700/30">
                    <Skeleton className="w-6 h-6" />
                </div>
                <Skeleton className="w-5 h-5 rounded" />
            </div>

            {/* Title */}
            <Skeleton className="h-5 w-24 mb-1" />

            {/* Username */}
            <Skeleton className="h-3 w-20 mb-3" />

            {/* Description */}
            <div className="space-y-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
            </div>
        </div>
    );
};

/**
 * Skeleton for Contact cards grid
 * @param {number} count - Number of contact cards
 */
export const ContactCardsGridSkeleton = ({ count = 4 }) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full auto-rows-fr pb-2">
                {Array.from({ length: count }).map((_, index) => (
                    <ContactCardSkeleton key={index} />
                ))}
            </div>
            <div className="w-full border mt-6 border-slate-700" />
        </div>
    );
};

/**
 * Skeleton for Contact form
 */
export const ContactFormSkeleton = () => {
    return (
        <section className="w-full rounded-xl border border-slate-800 bg-slate-900/20 p-2 md:p-4 space-y-6">
            <Skeleton className="h-5 w-36" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name field */}
                <div className="space-y-1.5">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-11 w-full rounded-lg" />
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-11 w-full rounded-lg" />
                </div>

                {/* Message field */}
                <div className="md:col-span-2 space-y-1.5">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-28 w-full rounded-lg" />
                </div>

                {/* Submit button */}
                <div className="md:col-span-2">
                    <Skeleton className="h-11 w-full rounded-lg" />
                </div>
            </div>
        </section>
    );
};

/**
 * Complete Contact Page Skeleton
 */
export const ContactPageSkeleton = () => {
    return (
        <div className="flex flex-col items-start gap-8 min-h-screen p-2 text-slate-100 w-full">
            <ContactHeaderSkeleton />
            <ContactCardsGridSkeleton count={4} />
            <ContactFormSkeleton />
        </div>
    );
};

// =============================================================================
// 7. UTILITY SKELETON COMPONENTS
// Generic skeletons for common UI patterns
// =============================================================================

/**
 * Card skeleton with image and content
 * @param {string} aspectRatio - Image aspect ratio class
 * @param {boolean} showTags - Show tag skeletons
 */
export const CardSkeleton = ({
    aspectRatio = 'aspect-video',
    showTags = true,
    className = ''
}) => {
    return (
        <div className={`overflow-hidden bg-slate-800/30 border border-slate-700/50 rounded-xl ${className}`}>
            <div className={`${aspectRatio} bg-slate-800`}>
                <Skeleton className="w-full h-full rounded-none" />
            </div>
            <div className="p-4 space-y-3">
                <SkeletonText lines={2} />
                {showTags && (
                    <div className="flex gap-2">
                        <SkeletonBadge width="w-16" />
                        <SkeletonBadge width="w-20" />
                    </div>
                )}
            </div>
        </div>
    );
};

/**
 * List item skeleton
 */
export const ListItemSkeleton = ({ hasAvatar = false, className = '' }) => {
    return (
        <div className={`flex items-center gap-3 p-3 ${className}`}>
            {hasAvatar && <SkeletonCircle size="w-10 h-10" />}
            <div className="flex-1">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-1/2" />
            </div>
        </div>
    );
};

/**
 * Table skeleton
 * @param {number} rows - Number of rows
 * @param {number} columns - Number of columns
 */
export const TableSkeleton = ({ rows = 5, columns = 4 }) => {
    return (
        <div className="space-y-2">
            <div className="flex gap-4 pb-2 border-b border-slate-700">
                {Array.from({ length: columns }).map((_, i) => (
                    <Skeleton key={i} className="h-4 flex-1" />
                ))}
            </div>
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-4 py-2">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <Skeleton key={colIndex} className="h-4 flex-1" />
                    ))}
                </div>
            ))}
        </div>
    );
};

// =============================================================================
// DEFAULT EXPORT
// =============================================================================

export default {
    // Primitives
    Skeleton,
    SkeletonText,
    SkeletonCircle,
    SkeletonBadge,
    SectionHeaderSkeleton,
    PageHeaderSkeleton,

    // Home Page
    MiniAboutSkeleton,
    MiniSkillsSkeleton,
    FeaturedCardSkeleton,
    FeaturedSectionSkeleton,
    HomePageSkeleton,

    // About Page
    AboutContentSkeleton,
    CareerCardSkeleton,
    CareerSectionSkeleton,
    EducationCardSkeleton,
    EducationSectionSkeleton,
    AboutPageSkeleton,

    // Dashboard Page
    DashboardHeaderSkeleton,
    GithubStatsCardsSkeleton,
    GithubActivityCalendarSkeleton,
    GithubStatsSkeleton,
    DashboardPageSkeleton,

    // Achievement Page
    AchievementHeaderSkeleton,
    AchievementFiltersSkeleton,
    AchievementCardSkeleton,
    AchievementGridSkeleton,
    AchievementPageSkeleton,

    // Projects Page
    ProjectsHeaderSkeleton,
    ProjectCardSkeleton,
    ProjectsGridSkeleton,
    ProjectsPageSkeleton,

    // Contact Page
    ContactHeaderSkeleton,
    ContactCardSkeleton,
    ContactCardsGridSkeleton,
    ContactFormSkeleton,
    ContactPageSkeleton,

    // Utility
    CardSkeleton,
    ListItemSkeleton,
    TableSkeleton,
};
