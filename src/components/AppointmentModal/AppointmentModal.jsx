import { useState, useRef } from 'react';
import { useModal } from '../../context/ModalContext';
import styles from './styles/AppointmentModal.module.css';

const AppointmentModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
    const formRef = useRef();

    if (!isModalOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const form = formRef.current;
        const data = new FormData(form);

        try {
            // Formspree endpoint forwarding to matrikaventures2020@gmail.com
            const response = await fetch('https://formspree.io/f/mwvjkrvo', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
                    ✕
                </button>

                <h2 className={styles.title}>Book Your Appointment</h2>
                <p className={styles.subtitle}>Take the first step towards a healthier you.</p>

                {status === 'success' ? (
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✅</div>
                        <h3>Request Received!</h3>
                        <p>We'll be in touch with you shortly to confirm your appointment.</p>
                        <button className={styles.primaryBtn} onClick={closeModal}>Close</button>
                    </div>
                ) : (
                    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name *</label>
                            <input type="text" id="name" name="name" required placeholder="John Doe" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address *</label>
                            <input type="email" id="email" name="email" required placeholder="john@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required placeholder="+91 98765 43210" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Any other details?</label>
                            <textarea id="message" name="message" placeholder="Tell us a bit about your goals..." rows="3"></textarea>
                        </div>
                        {status === 'error' && (
                            <div className={styles.errorMessage}>
                                Oops! There was a problem submitting your form. Please check your EmailJS configuration.
                            </div>
                        )}
                        <button type="submit" className={styles.primaryBtn} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending...' : 'Request Appointment'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AppointmentModal;
