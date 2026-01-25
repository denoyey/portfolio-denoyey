export const achievementsData = [
    {
        id: 1,
        title: 'Pentest',
        organization: 'Universitas Insan Pembangunan Indonesia',
        credentialId: '-',
        type: 'certificate',
        category: 'security',
        issueDate: 'January 2026',
        image: '../assets/img/achievement/sertifikat-pentest-unipem.webp',
        description: 'Pentest certification from Universitas Insan Pembangunan Indonesia.'
    },
];

// Filter options for dropdowns
export const achievementTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'certificate', label: 'Certificate' },
    { value: 'badge', label: 'Badge' },
    { value: 'award', label: 'Award' },
    { value: 'profesional', label: 'Profesional' },
];

export const achievementCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'programming', label: 'Programming' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'design', label: 'Design' },
    { value: 'cloud', label: 'Cloud' },
    { value: 'academic', label: 'Academic' },
    { value: 'security', label: 'Security' },
];

export const typeColors = {
    certificate: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    award: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    profesional: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
};

export const categoryColors = {
    programming: 'bg-purple-500/20 text-purple-400',
    frontend: 'bg-sky-500/20 text-sky-400',
    backend: 'bg-green-500/20 text-green-400',
    design: 'bg-pink-500/20 text-pink-400',
    cloud: 'bg-cyan-500/20 text-cyan-400',
    academic: 'bg-orange-500/20 text-orange-400',
    security: 'bg-red-500/20 text-red-400',
};
