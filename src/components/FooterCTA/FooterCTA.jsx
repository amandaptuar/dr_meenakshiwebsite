import { useModal } from '../../context/ModalContext';
import styles from './styles/FooterCTA.module.css';

const FooterCTA = () => {
    const { openModal } = useModal();
    return (
        <section className={styles.footerCta} id="book">
            <div className={styles.container}>
                <div className={styles.leftImg}>
                    <div className={styles.croppedDocWrapper}>
                        <img src="/dr_about.png" alt="Dr. Meenakshi Jain" className={styles.croppedDocImg} />
                    </div>
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.heading}>
                        Your Health Transformation<br />Starts With The Right Nutrition
                    </h2>
                    <p className={styles.sub}>
                        Book your personalised consultation today and take charge of your health.
                    </p>
                    <a href="#book" className={styles.ctaBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Book Appointment Now →</a>
                </div>
                <div className={styles.consultBox}>
                    <div className={styles.consultIcon}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: '#ffffff', margin: '0 auto'}}>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                    </div>
                    <h3 className={styles.consultTitle}>Book Your<br />Personalized Consultation</h3>
                    <a href="#book" className={styles.consultBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Book Appointment Now →</a>
                </div>
            </div>
        </section>
    );
};

export default FooterCTA;
