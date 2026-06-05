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
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: '#ffffff'}}>
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
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
                        <li>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', flexShrink: 0}}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            +91 98765 43210
                        </li>
                        <li>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', flexShrink: 0}}>
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            hello@drmeenakshijain.com
                        </li>
                        <li>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', flexShrink: 0}}>
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            New Delhi, India
                        </li>
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
