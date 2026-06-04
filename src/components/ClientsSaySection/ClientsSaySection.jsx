import styles from './styles/ClientsSaySection.module.css';

const reviews = [
    {
        name: 'Priya Sharma',
        text: '"Dr. Meenakshi Jain\'s plan changed my life. No crash diets, just real food and real results!"',
        stars: 5,
    },
    {
        name: 'Amit Verma',
        text: '"I have more energy, better sleep and my sugar levels are now under control."',
        stars: 5,
    },
    {
        name: 'Sneha Kapoor',
        text: '"The most practical and personalised nutrition guidance I have ever received."',
        stars: 5,
    },
    {
        name: 'Karan Mehta',
        text: '"Highly recommend for anyone serious about long-term health transformation."',
        stars: 5,
    },
];

const ClientsSaySection = () => {
    return (
        <section className={styles.section} id="reviews">
            <h2 className={styles.sectionTitle}>— WHAT MY CLIENTS SAY —</h2>
            <div className={styles.reviewsGrid}>
                {reviews.map((r, i) => (
                    <div key={i} className={styles.reviewCard}>
                        <div className={styles.stars}>{'⭐'.repeat(r.stars)}</div>
                        <p className={styles.reviewText}>{r.text}</p>
                        <div className={styles.reviewer}>
                            <div className={styles.avatar}>{r.name.charAt(0)}</div>
                            <span className={styles.reviewerName}>{r.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientsSaySection;
