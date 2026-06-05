import { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import styles from './styles/HeroSection.module.css';

const HeroSection = () => {
    const [time, setTime] = useState({ days: 12, hrs: 8, min: 45, sec: 20 });
    const { openModal } = useModal();

    useEffect(() => {
        const target = new Date('2026-06-05T00:00:00');
        const tick = setInterval(() => {
            const now = new Date();
            const diff = target - now;
            if (diff <= 0) { clearInterval(tick); return; }
            const days = Math.floor(diff / 86400000);
            const hrs = Math.floor((diff % 86400000) / 3600000);
            const min = Math.floor((diff % 3600000) / 60000);
            const sec = Math.floor((diff % 60000) / 1000);
            setTime({ days, hrs, min, sec });
        }, 1000);
        return () => clearInterval(tick);
    }, []);

    return (
        <section className={styles.hero} id="home">
            <div className={styles.wrapper}>
                {/* LEFT COLUMN */}
                <div className={styles.left}>
                    <div className={styles.dateBadge}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        STARTS FROM 5TH JUNE 2026
                    </div>

                    <div className={styles.headingBlock}>
                        <h1 className="hero-heading">21 Days<br />Weight Loss Challenge</h1>
                    </div>

                    <p className="text-large text-secondary" style={{maxWidth: '480px', marginBottom: 'var(--space-2)'}}>
                        A guided, science-backed program to help you lose weight, boost energy and build
                        lifelong healthy habits in just 21 days!
                    </p>

                    <div className={styles.ctaRow}>
                        <a href="#book" className={styles.primaryBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Join the Challenge Now →</a>
                        <a href="#success" className={styles.watchBtn} onClick={(e) => { e.preventDefault(); const el = document.querySelector('#success'); if(el){ const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({top, behavior:'smooth'}); } }}>
                            <span className={styles.playCircle}>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{marginLeft: '2px'}}>
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                            </span>
                            Watch Video
                        </a>
                    </div>

                    <div className={styles.featureGrid}>
                        {[
                            { 
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                        <line x1="9" y1="12" x2="15" y2="12"></line>
                                        <line x1="9" y1="16" x2="15" y2="16"></line>
                                    </svg>
                                ), 
                                t1: 'Personalised', 
                                t2: 'Diet Plan' 
                            },
                            { 
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                        <path d="m9 16 2 2 4-4"></path>
                                    </svg>
                                ), 
                                t1: 'Daily', 
                                t2: 'Accountability' 
                            },
                            { 
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                ), 
                                t1: 'Expert', 
                                t2: 'Guidance' 
                            },
                            { 
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 3v18h18"></path>
                                        <path d="m19 9-5 5-4-4-3 3"></path>
                                    </svg>
                                ), 
                                t1: 'Visible', 
                                t2: 'Results' 
                            },
                        ].map((f, idx) => (
                            <div key={idx} className={styles.featureItem}>
                                <span className={styles.fIcon}>{f.icon}</span>
                                <span className={styles.fLabel}>{f.t1}<br />{f.t2}</span>
                            </div>
                        ))}
                    </div>
                </div>



                {/* RIGHT COLUMN */}
                <div className={styles.right}>
                    <div className={styles.highlightsCard}>
                        <p className={styles.hlTitle}>CHALLENGE HIGHLIGHTS</p>
                        <ul className={styles.hlList}>
                            {[
                                'No Crash Diets',
                                'Balanced Nutrition',
                                'Expert Guidance',
                                'Daily Motivation',
                                'Sustainable Weight Loss',
                                'Lifetime Habit Building',
                            ].map((h) => (
                                <li key={h}>
                                    <span className={styles.check}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span> 
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.timerCard}>
                        <p className={styles.timerHeading}>CHALLENGE STARTS IN</p>
                        <div className={styles.timerRow}>
                            {[
                                { val: String(time.days).padStart(2, '0'), label: 'days' },
                                { val: String(time.hrs).padStart(2, '0'), label: 'hrs' },
                                { val: String(time.min).padStart(2, '0'), label: 'min' },
                                { val: String(time.sec).padStart(2, '0'), label: 'sec' },
                            ].map((t) => (
                                <div key={t.label} className={styles.timeBox}>
                                    <span className={styles.timeNum}>{t.val}</span>
                                    <span className={styles.timeLabel}>{t.label}</span>
                                </div>
                            ))}
                        </div>
                        <a href="#book" className={styles.limitedSeats} onClick={(e) => { e.preventDefault(); openModal(); }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Limited Seats Available!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
