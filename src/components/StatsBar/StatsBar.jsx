import styles from './styles/StatsBar.module.css';

const stats = [
    { 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ), 
        value: '135M+', 
        label: 'Indians are overweight or obese', 
        sub: '(ICMR-NCD Risk Factor Study)' 
    },
    { 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ), 
        value: '30%', 
        label: 'Rise in Obesity\nin last 10 years' 
    },
    { 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        ), 
        value: '75%', 
        label: 'Lifestyle diseases\nlinked to obesity' 
    },
    { 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 21a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <path d="M12 2v2" />
            </svg>
        ), 
        value: '1 in 3', 
        label: 'Urban adults\nare overweight' 
    },
    { 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ), 
        value: '40%', 
        label: 'Children may be overweight\nby 2030' 
    },
];

const StatsBar = () => {
    return (
        <section className={styles.statsBar}>
            <div className={styles.inner}>
                {stats.map((s, i) => (
                    <div key={i} className={styles.card}>
                        <span className={styles.icon}>{s.icon}</span>
                        <span className={styles.value}>{s.value}</span>
                        <span className={styles.label}>{s.label}</span>
                        {s.sub && <span className={styles.sub}>{s.sub}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsBar;
