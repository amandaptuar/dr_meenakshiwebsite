import { useModal } from '../../context/ModalContext';
import styles from './styles/ProgramsSection.module.css';

const programs = [
    {
        icon: '⚖️',
        title: 'Weight Loss Program',
        desc: 'Science-backed 21-90 day programs customised to your body type, lifestyle and goals.',
        highlights: ['Personalised Meal Plan', 'Weekly Check-ins', 'Habit Coaching'],
        color: '#e8f5e9',
        accent: '#2d6a4f',
    },
    {
        icon: '🩺',
        title: 'Diabetes Reversal',
        desc: 'Medically supervised nutrition plans to control or reverse Type 2 diabetes naturally.',
        highlights: ['Blood Sugar Management', 'Anti-inflammatory Diet', 'Lifestyle Overhaul'],
        color: '#fff8e1',
        accent: '#e6a817',
    },
    {
        icon: '🌸',
        title: 'PCOD & Hormonal Health',
        desc: 'Hormone-balancing plans for PCOD, thyroid and other hormonal conditions in women.',
        highlights: ['Hormone Balance Diet', 'Cycle Syncing', 'Stress & Sleep Support'],
        color: '#f3e5f5',
        accent: '#7b1fa2',
    },
    {
        icon: '🏃',
        title: 'Sports Nutrition',
        desc: 'High-performance diet plans for athletes and fitness enthusiasts to maximise results.',
        highlights: ['Pre & Post Workout Diet', 'Stamina Building', 'Muscle Gain / Fat Loss'],
        color: '#e3f2fd',
        accent: '#1565c0',
    },
    {
        icon: '👨‍👩‍👧',
        title: 'Family Nutrition',
        desc: 'Healthy eating made easy for the entire family, including kids and elderly members.',
        highlights: ['Child-specific Meals', 'Senior Nutrition', 'Healthy Family Recipes'],
        color: '#e8f5e9',
        accent: '#388e3c',
    },
    {
        icon: '💪',
        title: 'Gut Health & Detox',
        desc: 'Heal your gut, eliminate bloating and detox your body with therapeutic diet plans.',
        highlights: ['Anti-bloating Protocol', 'Probiotic Foods', '21-Day Gut Reset'],
        color: '#fce4ec',
        accent: '#c62828',
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
                                    <li key={h} style={{ color: p.accent }}>✔ <span>{h}</span></li>
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
