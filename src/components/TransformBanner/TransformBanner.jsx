import { useModal } from '../../context/ModalContext';
import styles from './styles/TransformBanner.module.css';

const features = [
    { icon: '📋', label: 'Daily\nDiet Plans' },
    { icon: '💬', label: 'WhatsApp\nSupport' },
    { icon: '🎥', label: 'Live\nSessions' },
    { icon: '📊', label: 'Progress\nTracking' },
    { icon: '👥', label: 'Accountability\nGroup' },
    { icon: '⚖️', label: 'Sustainable\nWeight Loss' },
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
                    <h2 className={styles.heading}>🥗 Ready to Transform in Just 21 Days?</h2>
                    <p className={styles.sub}>
                        Join Dr. Meenakshi Jain's 21 Days Weight Loss Challenge and take the first step
                        towards a healthier, happier you.
                    </p>
                    <div className={styles.features}>
                        {features.map((f) => (
                            <div key={f.label} className={styles.feat}>
                                <span className={styles.featIcon}>{f.icon}</span>
                                <span className={styles.featLabel}>{f.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA box */}
                <div className={styles.ctaBox}>
                    <div className={styles.challengeDate}>
                        <span className={styles.calIcon}>📅</span>
                        <div>
                            <p className={styles.dateLabel}>Challenge Starts</p>
                            <p className={styles.dateVal}>5th June 2026</p>
                        </div>
                    </div>
                    <div className={styles.seatsRow}>
                        <span className={styles.seatIcon}>🪑</span>
                        <div>
                            <p className={styles.seatsLabel}>Seats Left</p>
                            <p className={styles.seatsVal}>Only 50 Seats</p>
                        </div>
                    </div>
                    <div className={styles.btnCol}>
                        <a href="#book" className={styles.regBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Register Now →</a>
                        <a href="tel:+919876543210" className={styles.callBtn}>📞 Call Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformBanner;
