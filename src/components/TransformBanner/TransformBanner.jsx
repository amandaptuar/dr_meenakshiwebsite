import { useModal } from '../../context/ModalContext';
import styles from './styles/TransformBanner.module.css';

const features = [
    { 
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12h6M9 16h6M9 8h6" />
            </svg>
        ), 
        label: 'Daily\nDiet Plans' 
    },
    { 
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ), 
        label: 'WhatsApp\nSupport' 
    },
    { 
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 7l-7 5 7 5V7z" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
            </svg>
        ), 
        label: 'Live\nSessions' 
    },
    { 
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
        ), 
        label: 'Progress\nTracking' 
    },
    { 
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ), 
        label: 'Accountability\nGroup' 
    },
    { 
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ), 
        label: 'Sustainable\nWeight Loss' 
    },
];

const TransformBanner = () => {
    const { openModal } = useModal();
    return (
        <section className={styles.banner} id="services">
            <div className={styles.inner}>
                {/* Salad image top-left */}
                <div className={styles.imgWrapper}>
                    <img src="/salad_bowl.png" alt="Healthy food" className={styles.saladImg} />
                </div>

                {/* Text + features */}
                <div className={styles.textBlock}>
                    <h2 className={styles.heading}>Ready to Transform in Just 21 Days?</h2>
                    <p className={styles.sub}>
                        Join Dr. Meenakshi Jain's 21 Days Weight Loss Challenge and take the first step
                        towards a healthier, happier you.
                    </p>
                    <div className={styles.features}>
                        {features.map((f, idx) => (
                            <div key={idx} className={styles.feat}>
                                <span className={styles.featIcon}>{f.icon}</span>
                                <span className={styles.featLabel}>{f.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA box */}
                <div className={styles.ctaBox}>
                    <div className={styles.challengeDate}>
                        <span className={styles.calIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </span>
                        <div>
                            <p className={styles.dateLabel}>Challenge Starts</p>
                            <p className={styles.dateVal}>5th June 2026</p>
                        </div>
                    </div>
                    <div className={styles.seatsRow}>
                        <span className={styles.seatIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                            </svg>
                        </span>
                        <div>
                            <p className={styles.seatsLabel}>Seats Left</p>
                            <p className={styles.seatsVal}>Only 50 Seats</p>
                        </div>
                    </div>
                    <div className={styles.btnCol}>
                        <a href="#book" className={styles.regBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Register Now →</a>
                        <a href="tel:+919876543210" className={styles.callBtn}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformBanner;
