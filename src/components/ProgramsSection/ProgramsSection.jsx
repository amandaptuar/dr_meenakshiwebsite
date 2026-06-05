import { useModal } from '../../context/ModalContext';
import styles from './styles/ProgramsSection.module.css';

const programs = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
            </svg>
        ),
        title: 'Weight Loss Program',
        desc: 'Science-backed 21-90 day programs customised to your body type, lifestyle and goals.',
        highlights: ['Personalised Meal Plan', 'Weekly Check-ins', 'Habit Coaching'],
        color: '#f0f4ef',
        accent: 'var(--color-primary)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 19c0 1.1.9 2 2 2h10.4c1.1 0 2-.9 2-2V9.8a2 2 0 0 0-.6-1.4l-4.6-4.6A2 2 0 0 0 12.6 3H6.8c-1.1 0-2 .9-2 2V19z" />
                <path d="M12 3v18" />
                <path d="M3 12h18" />
            </svg>
        ),
        title: 'Diabetes Reversal',
        desc: 'Medically supervised nutrition plans to control or reverse Type 2 diabetes naturally.',
        highlights: ['Blood Sugar Management', 'Anti-inflammatory Diet', 'Lifestyle Overhaul'],
        color: '#fff6f0',
        accent: 'var(--color-accent)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8c-2 0-3 1.5-3 3.5s1.5 2.5 3 4.5c1.5-2 3-2.5 3-4.5S14 8 12 8z"/>
            </svg>
        ),
        title: 'PCOD & Hormonal Health',
        desc: 'Hormone-balancing plans for PCOD, thyroid and other hormonal conditions in women.',
        highlights: ['Hormone Balance Diet', 'Cycle Syncing', 'Stress & Sleep Support'],
        color: '#f0f4ef',
        accent: 'var(--color-primary)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
        ),
        title: 'Sports Nutrition',
        desc: 'High-performance diet plans for athletes and fitness enthusiasts to maximise results.',
        highlights: ['Pre & Post Workout Diet', 'Stamina Building', 'Muscle Gain / Fat Loss'],
        color: '#fff6f0',
        accent: 'var(--color-accent)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        ),
        title: 'Family Nutrition',
        desc: 'Healthy eating made easy for the entire family, including kids and elderly members.',
        highlights: ['Child-specific Meals', 'Senior Nutrition', 'Healthy Family Recipes'],
        color: '#f0f4ef',
        accent: 'var(--color-primary)',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
        ),
        title: 'Gut Health & Detox',
        desc: 'Heal your gut, eliminate bloating and detox your body with therapeutic diet plans.',
        highlights: ['Anti-bloating Protocol', 'Probiotic Foods', '21-Day Gut Reset'],
        color: '#fff6f0',
        accent: 'var(--color-accent)',
    },
];

const ProgramsSection = () => {
    const { openModal } = useModal();
    return (
        <section className={styles.section} id="programs">
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.tag}>OUR PROGRAMS</p>
                    <h2 className={styles.heading}>Specialised Nutrition Programs<br />For Every Health Goal</h2>
                    <p className={styles.subtext}>
                        Tailored nutrition plans backed by 25+ years of clinical experience,
                        covering every major health condition.
                    </p>
                </div>

                <div className={styles.grid}>
                    {programs.map((p) => (
                        <div
                            key={p.title}
                            className={styles.card}
                            style={{ borderTop: `4px solid ${p.accent}` }}
                        >
                            <div className={styles.iconCircle} style={{ background: p.color, color: p.accent }}>
                                <span>{p.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{p.title}</h3>
                            <p className={styles.cardDesc}>{p.desc}</p>
                            <ul className={styles.highlights}>
                                {p.highlights.map((h) => (
                                    <li key={h}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: p.accent, marginRight: '6px', flexShrink: 0 }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#book" className={styles.learnMore} style={{ color: p.accent }}
                                onClick={(e) => { e.preventDefault(); openModal(); }}>
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
