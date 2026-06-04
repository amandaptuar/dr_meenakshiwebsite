import { useModal } from '../../context/ModalContext';
import styles from './styles/RoadmapSection.module.css';

const weeks = [
    {
        label: 'WEEK 1', title: 'RESET YOUR BODY', days: 'Day 1 – 7',
        color: '#f0faf5', accent: '#2d6a4f',
        items: ['Detox Nutrition', 'Hydration Plan', 'Activity Tracking', 'Habit Building'],
        result: '-1 to -2 KG',
    },
    {
        label: 'WEEK 2', title: 'ACCELERATE FAT LOSS', days: 'Day 8 – 14',
        color: '#fffbf0', accent: '#e6a817',
        items: ['Customised Diet', 'Daily Accountability', 'Progress Reviews', 'Metabolism Boost'],
        result: '-2 to -4 KG',
    },
    {
        label: 'WEEK 3', title: 'TRANSFORM YOUR LIFE', days: 'Day 15 – 21',
        color: '#f0f4ff', accent: '#1a56db',
        items: ['Fat Loss Optimization', 'Lifestyle Coaching', 'Final Assessment', 'Long-Term Plan'],
        result: '-3 to -7 KG',
    },
];

const perks = [
    'Personalised Diet Plan', 'Daily Motivation', 'WhatsApp Support',
    'Weekly Review', 'Healthy Recipes', 'Workout Guidance',
    'Lifetime Habits', 'Certificate of Completion',
];

const RoadmapSection = () => {
    const { openModal } = useModal();
    return (
        <section className={styles.section} id="roadmap">
            <div className={styles.container}>
                <h2 className={styles.heading}>🗺️ 21 Days Transformation Roadmap</h2>

                <div className={styles.grid}>
                    {/* Left - Weeks 1 & 2 */}
                    <div className={styles.weeksLeft}>
                        {weeks.slice(0, 2).map((w) => (
                            <div key={w.label}
                                className={styles.weekCard}
                                style={{ background: w.color, borderTop: `4px solid ${w.accent}` }}
                            >
                                <div className={styles.wkLabel} style={{ color: w.accent }}>{w.label}</div>
                                <div className={styles.wkTitle}>{w.title}</div>
                                <div className={styles.wkDays}>{w.days}</div>
                                <ul className={styles.wkItems}>
                                    {w.items.map((it) => <li key={it}>• {it}</li>)}
                                </ul>
                                <div className={styles.wkResult} style={{ borderColor: w.accent }}>
                                    <span>Expected Result</span>
                                    <strong>{w.result}</strong>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center - 21 Days badge + transformation image */}
                    <div className={styles.center}>
                        <div className={styles.bigBox}>
                            <span className={styles.bigNum}>21</span>
                            <p className={styles.bigSub}>DAYS<br />TO A<br />NEW YOU</p>
                        </div>
                        <img
                            src="/transformation_couple.png"
                            alt="21 Days Transformation"
                            className={styles.transformImg}
                        />
                    </div>

                    {/* Right - Week 3 + Perks */}
                    <div className={styles.rightCol}>
                        {/* Week 3 */}
                        <div
                            className={styles.weekCard}
                            style={{ background: weeks[2].color, borderTop: `4px solid ${weeks[2].accent}` }}
                        >
                            <div className={styles.wkLabel} style={{ color: weeks[2].accent }}>{weeks[2].label}</div>
                            <div className={styles.wkTitle}>{weeks[2].title}</div>
                            <div className={styles.wkDays}>{weeks[2].days}</div>
                            <ul className={styles.wkItems}>
                                {weeks[2].items.map((it) => <li key={it}>• {it}</li>)}
                            </ul>
                            <div className={styles.wkResult} style={{ borderColor: weeks[2].accent }}>
                                <span>Expected Result</span>
                                <strong>{weeks[2].result}</strong>
                            </div>
                        </div>

                        {/* Perks */}
                        <div className={styles.perks}>
                            <h3 className={styles.perksTitle}>What You'll Get</h3>
                            <ul className={styles.perksList}>
                                {perks.map((p) => <li key={p}><span className={styles.perkCheck}>✅</span> {p}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.bStat}>
                        <span>📅</span>
                        <div>
                            <p>5th June 2026</p>
                            <small>Batch Starting Soon</small>
                        </div>
                    </div>
                    <div className={styles.bStat}>
                        <span>👥</span>
                        <div>
                            <p>25,000+</p>
                            <small>Lives Transformed</small>
                        </div>
                    </div>
                    <div className={styles.bStat}>
                        <span>⭐</span>
                        <div>
                            <p>4.9/5</p>
                            <small>Client Rating</small>
                        </div>
                    </div>
                    <div className={styles.bBtns}>
                        <a href="#book" className={styles.regBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Register Now →</a>
                        <a href="#book" className={styles.consultBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Book Consultation</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
