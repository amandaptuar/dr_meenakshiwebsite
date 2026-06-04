import styles from './styles/Footer.module.css';

const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
};

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Dr. Meenakshi', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Programs', href: '#programs' },
    { label: 'Success Stories', href: '#success' },
    { label: 'Reviews', href: '#reviews' },
];

const programLinks = [
    { label: 'Weight Loss Programs', href: '#programs' },
    { label: 'Diabetes Reversal', href: '#programs' },
    { label: 'PCOD & Hormonal Health', href: '#programs' },
    { label: 'Sports Nutrition', href: '#programs' },
    { label: 'Child Nutrition', href: '#programs' },
];

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.upper}>
                {/* Brand */}
                <div>
                    <div className={styles.logoRow}>
                        <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="20" fill="#40916c" />
                            <path d="M20 8 C14 12 12 18 12 22 C12 28 16 32 20 32 C24 32 28 28 28 22 C28 18 26 12 20 8Z"
                                fill="none" stroke="#fff" strokeWidth="1.5" />
                            <path d="M16 22l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <div>
                            <p className={styles.brandName}>Dr. Meenakshi Jain</p>
                            <p className={styles.brandSub}>Nutrition Expert</p>
                        </div>
                    </div>
                    <p className={styles.brandDesc}>
                        Empowering you with the right nutrition to transform health and change your life.
                    </p>
                    <div className={styles.socials}>
                        {['f', 'in', 'yt', 'ig'].map((s) => (
                            <a key={s} href="#" className={styles.sBtn}>{s}</a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className={styles.colTitle}>Quick Links</h4>
                    <ul className={styles.colLinks}>
                        {quickLinks.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h4 className={styles.colTitle}>Our Programs</h4>
                    <ul className={styles.colLinks}>
                        {programLinks.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>{l.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className={styles.colTitle}>Contact Us</h4>
                    <ul className={styles.contactList}>
                        <li>📞 +91 98765 43210</li>
                        <li>✉️ hello@drmeenakshijain.com</li>
                        <li>📍 New Delhi, India</li>
                    </ul>
                </div>
            </div>

            <div className={styles.lower}>
                <div className={styles.lowerInner}>
                    <p>© 2026 Dr. Meenakshi Jain. All rights reserved.</p>
                    <div className={styles.lowerLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
