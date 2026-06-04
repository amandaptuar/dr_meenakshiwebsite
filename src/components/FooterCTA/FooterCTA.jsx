import { useModal } from '../../context/ModalContext';
import styles from './styles/FooterCTA.module.css';

const FooterCTA = () => {
    const { openModal } = useModal();
    return (
        <section className={styles.footerCta} id="book">
            <div className={styles.container}>
                <div className={styles.leftImg}>
                    <img src="/salad_bowl.png" alt="Healthy Nutrition" className={styles.bowlImg} />
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
                    <div className={styles.consultIcon}>📋</div>
                    <h3 className={styles.consultTitle}>Book Your<br />Personalized Consultation</h3>
                    <a href="#book" className={styles.consultBtn} onClick={(e) => { e.preventDefault(); openModal(); }}>Book Appointment Now →</a>
                </div>
            </div>
        </section>
    );
};

export default FooterCTA;
