import styles from './styles/TestimonialsSection.module.css';

const people = [
    {
        name: 'Rohit M.',
        tag: '-22 kg',
        img: '/testimonials/WhatsApp Image 2026-06-05 at 7.51.13 PM.jpeg',
        result: 'Reversed Pre-Diabetes',
        detail: '& reduced belly fat',
    },
    {
        name: 'Neha R.',
        tag: '-15 kg',
        img: '/testimonials/WhatsApp Image 2026-06-05 at 7.52.39 PM.jpeg',
        result: 'Balanced hormones,',
        detail: 'regular periods & weight loss',
    },
    {
        name: 'Vikram K.',
        tag: '-20 kg',
        img: '/testimonials/WhatsApp Image 2026-06-05 at 7.52.56 PM.jpeg',
        result: 'Lowered BP & cholesterol',
        detail: 'naturally',
    },
    {
        name: 'Anita S.',
        tag: '-18 kg',
        img: '/testimonials/WhatsApp Image 2026-06-05 at 7.53.06 PM.jpeg',
        result: 'Lost 18 kg in 5 months',
        detail: 'Better energy & confidence',
    },
];

const TestimonialsSection = () => {
    return (
        <section className={styles.section} id="success">
            <h2 className={styles.title}>Real People, Real Results</h2>

            <div className={styles.grid}>
                {people.map((p) => (
                    <div key={p.name} className={styles.card}>
                        {/* Transformation Photo */}
                        <div className={styles.photoContainer}>
                            <div className={styles.photoWrapper}>
                                <img 
                                    src={p.img} 
                                    alt={`${p.name} transformation`} 
                                    className={styles.photo} 
                                />
                            </div>
                            <div className={styles.tagBadge}>{p.tag}</div>
                        </div>
                        {/* Info */}
                        <div className={styles.info}>
                            <p className={styles.name}>{p.name}</p>
                            <p className={styles.result}>{p.result}</p>
                            <p className={styles.detail}>{p.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
