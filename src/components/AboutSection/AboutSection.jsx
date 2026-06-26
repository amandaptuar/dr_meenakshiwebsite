import { useModal } from '../../context/ModalContext';
import styles from './styles/AboutSection.module.css';

const AboutSection = () => {
    const { openModal } = useModal();
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                {/* Left content */}
                <div className={styles.left}>
                    <p className={styles.tag}>ABOUT</p>
                    <h2 className={styles.heading}>
                        Ansh Jain <span className={styles.leaf}>🌿</span>
                    </h2>
                    <p className={styles.intro}>
                        Ansh Jain is a leading Wellness Coach helping individuals achieve
                        sustainable weight management, reverse lifestyle diseases, and build a healthier
                        relationship with food.
                    </p>
                    <ul className={styles.creds}>
                        {[
                            'Specialist in Weight Management & Metabolic Health',
                            'Personalized, Practical & Science-backed Diet Plans',
                        ].map((c) => (
                            <li key={c}>
                                <span className={styles.tick}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span> 
                                {c}
                            </li>
                        ))}
                    </ul>
                    <a href="#about" className={styles.btn} onClick={(e) => { e.preventDefault(); const el = document.querySelector('#roadmap'); if(el){ const top = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({top, behavior:'smooth'}); } }}>Know More About Ansh Jain →</a>
                </div>

                {/* Right image */}
                <div className={styles.right}>
                    <img src="/dr_about.png" alt="Ansh Jain" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
