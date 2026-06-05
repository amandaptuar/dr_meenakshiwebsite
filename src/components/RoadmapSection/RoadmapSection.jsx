import { useModal } from '../../context/ModalContext';
import styles from './styles/RoadmapSection.module.css';

const weeks = [
    {
        label: 'WEEK 1', title: 'RESET YOUR BODY', days: 'Day 1 – 7',
        items: ['Detox Nutrition', 'Hydration Plan', 'Activity Tracking', 'Habit Building'],
        result: '-1 to -2 KG',
    },
    {
        label: 'WEEK 2', title: 'ACCELERATE FAT LOSS', days: 'Day 8 – 14',
        items: ['Customised Diet', 'Daily Accountability', 'Progress Reviews', 'Metabolism Boost'],
        result: '-2 to -4 KG',
    },
    {
        label: 'WEEK 3', title: 'TRANSFORM YOUR LIFE', days: 'Day 15 – 21',
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
                <h2 className={styles.heading}>
                    <span className={styles.leaf}>🌿</span> 21 Days Transformation Roadmap <span className={styles.leaf}>🌿</span>
                </h2>

                <div className={styles.grid}>
                    {/* Week 1 */}
                    <div className={styles.weekCard}>
                        <div className={styles.wkLabelBadge}>{weeks[0].label}</div>
                        <div className={styles.wkTitle}>{weeks[0].title}</div>
                        <div className={styles.wkDays}>{weeks[0].days}</div>
                        <ul className={styles.wkItems}>
                            {weeks[0].items.map((it) => (
                                <li key={it}>
                                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    {it}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.wkResultPill}>
                            <span className={styles.wkResultLabel}>Expected Result</span>
                            <strong className={styles.wkResultValue}>{weeks[0].result}</strong>
                        </div>
                    </div>

                    {/* Week 2 */}
                    <div className={styles.weekCard}>
                        <div className={styles.wkLabelBadge}>{weeks[1].label}</div>
                        <div className={styles.wkTitle}>{weeks[1].title}</div>
                        <div className={styles.wkDays}>{weeks[1].days}</div>
                        <ul className={styles.wkItems}>
                            {weeks[1].items.map((it) => (
                                <li key={it}>
                                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    {it}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.wkResultPill}>
                            <span className={styles.wkResultLabel}>Expected Result</span>
                            <strong className={styles.wkResultValue}>{weeks[1].result}</strong>
                        </div>
                    </div>

                    {/* Center Graphic */}
                    <div className={styles.centerGraphic}>
                        <img
                            src="/testimonials/WhatsApp Image 2026-06-05 at 7.49.05 PM.jpeg"
                            alt="21 Days Transformation"
                            className={styles.fullGraphicImg}
                        />
                    </div>

                    {/* Week 3 */}
                    <div className={styles.weekCard}>
                        <div className={styles.wkLabelBadge}>{weeks[2].label}</div>
                        <div className={styles.wkTitle}>{weeks[2].title}</div>
                        <div className={styles.wkDays}>{weeks[2].days}</div>
                        <ul className={styles.wkItems}>
                            {weeks[2].items.map((it) => (
                                <li key={it}>
                                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    {it}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.wkResultPill}>
                            <span className={styles.wkResultLabel}>Expected Result</span>
                            <strong className={styles.wkResultValue}>{weeks[2].result}</strong>
                        </div>
                    </div>

                    {/* Perks */}
                    <div className={styles.perksCard}>
                        <h3 className={styles.perksTitle}>What You'll Get</h3>
                        <ul className={styles.perksList}>
                            {perks.map((p) => (
                                <li key={p}>
                                    <svg className={styles.checkIconSolid} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    {p}
                                </li>
                            ))}
                        </ul>
                        <svg className={styles.yogaIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                            <path d="M12 7v6l3 3" />
                            <path d="M12 13l-3 3" />
                            <path d="M10 22l-2-6 2-4" />
                            <path d="M14 22l2-6-2-4" />
                            <path d="M6 10l2 2" />
                            <path d="M18 10l-2 2" />
                        </svg>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.bStat}>
                        <span className={styles.bIconGold}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </span>
                        <div>
                            <p>5th June 2026</p>
                            <small>Batch Starting Soon</small>
                        </div>
                    </div>
                    <div className={styles.bStat}>
                        <span className={styles.bIconGold}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </span>
                        <div>
                            <p>25,000+</p>
                            <small>Lives Transformed</small>
                        </div>
                    </div>
                    <div className={styles.bStat}>
                        <span className={styles.bIconGold}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        </span>
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
