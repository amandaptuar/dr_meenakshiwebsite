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
                        <h1 className={styles.h1Days}>21 Days</h1>
                        <span className={styles.cursiveLine}>Weight Loss</span>
                        <span className={styles.cursiveLine}>Challenge</span>
                    </div>

                    <p className={styles.desc}>
                        A guided, science-backed program to help you lose weight, boost energy and build
                        lifelong healthy habits in just 21 days!
                    </p>

                    <div className={styles.featureGrid}>
                        {[
                            { icon: '📋', t1: 'Personalised', t2: 'Diet Plan' },
                            { icon: '✅', t1: 'Daily', t2: 'Accountability' },
                            { icon: '🏅', t1: 'Expert', t2: 'Guidance' },
                            { icon: '📊', t1: 'Visible', t2: 'Results' },
                        ].map((f) => (
                            <div key={f.t1} className={styles.featureItem}>
                                <span className={styles.fIcon}>{f.icon}</span>
                                <span className={styles.fLabel}>{f.t1}<br />{f.t2}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaRow}>
                        <a href="#book" className={styles.primaryBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Join the Challenge Now →</a>
                        <a href="#success" className={styles.watchBtn} onClick={(e) => { e.preventDefault(); const el = document.querySelector('#success'); if(el){ const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({top, behavior:'smooth'}); } }}>
                            <span className={styles.playCircle}>▶</span>
                            Watch Video
                        </a>
                    </div>
                </div>

                {/* CENTER IMAGE */}
                <div className={styles.center}>
                    <img src="/hero_woman.png" alt="21 Day Weight Loss Challenge" className={styles.heroImg} />
                    <div className={styles.daysBubble}>
                        <span className={styles.bubbleNum}>21</span>
                        <span className={styles.bubbleSub}>DAYS TO A<br />BETTER YOU!</span>
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
                                    <span className={styles.check}>✔</span> {h}
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
                        <a href="#book" className={styles.limitedSeats} onClick={(e) => { e.preventDefault(); openModal(); }}>🔥 Limited Seats Available!</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
