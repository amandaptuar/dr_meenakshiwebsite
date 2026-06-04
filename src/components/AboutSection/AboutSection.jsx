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
                        Dr. Meenakshi Jain <span className={styles.leaf}>🌿</span>
                    </h2>
                    <p className={styles.intro}>
                        Dr. Meenakshi Jain is a leading Nutrition Expert helping individuals achieve
                        sustainable weight management, reverse lifestyle diseases, and build a healthier
                        relationship with food.
                    </p>
                    <ul className={styles.creds}>
                        {[
                            'Ph.D. in Nutrition & Dietetics',
                            '25+ Years of Clinical & Lifestyle Nutrition Experience',
                            'Specialist in Weight Management & Metabolic Health',
                            'Personalised, Practical & Science-backed Diet Plans',
                            'Trusted by 12,000+ Clients Worldwide',
                        ].map((c) => (
                            <li key={c}>
                                <span className={styles.tick}>✅</span> {c}
                            </li>
                        ))}
                    </ul>
                    <a href="#book" className={styles.btn} onClick={(e) => { e.preventDefault(); openModal(); }}>Book a Consultation →</a>
                </div>

                {/* Right image */}
                <div className={styles.right}>
                    <img src="/dr_about.png" alt="Dr. Meenakshi Jain" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
