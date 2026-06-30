import styles from './styles/TestimonialsSection.module.css';

const people = [
    {
        name: 'Riya M.',
        tag: '-22 kg',
        beforeImg: '/before-after/img1.jpeg',
        afterImg: '/before-after/img2.jpeg',
        result: 'Reversed Pre-Diabetes',
        detail: '& reduced belly fat',
    },
    {
        name: 'Neha R.',
        tag: '-15 kg',
        beforeImg: '/before-after/img3.jpeg',
        afterImg: '/before-after/img3b.jpeg',
        result: 'Balanced hormones,',
        detail: 'regular periods & weight loss',
    },
    {
        name: 'Vandana K.',
        tag: '-20 kg',
        beforeImg: '/before-after/img4.jpeg',
        afterImg: '/before-after/img5.jpeg',
        result: 'Lowered BP & cholesterol',
        detail: 'naturally',
    },
    {
        name: 'Anita S.',
        tag: '-18 kg',
        img: '/before-after/img6.jpeg',
        result: 'Lost 18 kg in 5 months',
        detail: 'Better energy & confidence',
    },
];

const TestimonialsSection = () => {
    return (
        <section className={styles.section} id="success">
            <h2 className={styles.title}>Real People, Real Results</h2>

            <div className={styles.grid}>
                {people.map((p, idx) => (
                    <div key={idx} className={styles.card}>
                        {/* Transformation Photo */}
                        <div className={styles.photoContainer}>
                            <div className={styles.photoWrapper}>
                                {p.afterImg ? (
                                    <div className={styles.beforeAfterSplit}>
                                        <div className={styles.imgPart}>
                                            <div className={styles.label}>Before</div>
                                            <img 
                                                src={p.beforeImg} 
                                                alt={`${p.name} before`} 
                                                className={styles.photo} 
                                            />
                                        </div>
                                        <div className={styles.imgPart}>
                                            <div className={styles.label}>After</div>
                                            <img 
                                                src={p.afterImg} 
                                                alt={`${p.name} after`} 
                                                className={styles.photo} 
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <img 
                                        src={p.img || p.beforeImg} 
                                        alt={`${p.name} transformation`} 
                                        className={styles.photo} 
                                    />
                                )}
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
