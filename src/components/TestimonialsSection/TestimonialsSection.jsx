import styles from './styles/TestimonialsSection.module.css';

const people = [
    {
        name: 'Anita S.',
        tag: '-18 kg',
        beforeImg: '/transform_anita.png',
        afterImg: '/transform_anita.png',
        result: 'Lost 18 kg in 5 months',
        detail: 'Better energy & confidence',
    },
    {
        name: 'Rohit M.',
        tag: '-12 kg',
        beforeImg: '/transform_rohit.png',
        afterImg: '/transform_rohit.png',
        result: 'Reversed Pre-Diabetes',
        detail: '& reduced belly fat',
    },
    {
        name: 'Neha R.',
        tag: '-11 kg',
        beforeImg: '/transform_neha.png',
        afterImg: '/transform_neha.png',
        result: 'Balanced hormones,',
        detail: 'regular periods & weight loss',
    },
    {
        name: 'Vikram K.',
        tag: '-20 kg',
        beforeImg: '/transform_vikram.png',
        afterImg: '/transform_vikram.png',
        result: 'Lowered BP & cholesterol',
        detail: 'naturally',
    },
];

const TestimonialsSection = () => {
    return (
        <section className={styles.section} id="success">
            <h2 className={styles.title}>— REAL PEOPLE, REAL RESULTS —</h2>

            <div className={styles.grid}>
                {people.map((p) => (
                    <div key={p.name} className={styles.card}>
                        {/* Transformation Photo */}
                        <div className={styles.photoContainer}>
                            <img src={p.beforeImg} alt={`${p.name} transformation`} className={styles.photo} />
                            <div className={styles.tagBadge}>{p.tag}</div>
                        </div>
                        {/* Arrows */}
                        <div className={styles.arrows}>
                            <span>◀</span>
                            <span>▶</span>
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
