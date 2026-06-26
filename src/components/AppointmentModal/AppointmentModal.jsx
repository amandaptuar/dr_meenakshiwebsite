import { useState, useRef } from 'react';
import { useModal } from '../../context/ModalContext';
import { supabase } from '../../lib/supabaseClient';
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

        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const password = data.get('password');

        try {
            const { error } = await supabase
                .from('users')
                .insert([
                    { name, email, phone, password }
                ]);

            if (!error) {
                setStatus('success');
                form.reset();
            } else {
                console.error(error);
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
                    ✕
                </button>

                <h2 className={styles.title}>Join The Challenge</h2>
                <p className={styles.subtitle}>Take the first step towards a healthier you.</p>

                {status === 'success' ? (
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✅</div>
                        <h3>Request Received!</h3>
                        <p>We'll be in touch with you shortly to confirm your registration.</p>
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
                            <label htmlFor="password">Password *</label>
                            <input type="password" id="password" name="password" required placeholder="Enter a secure password" />
                        </div>
                        {status === 'error' && (
                            <div className={styles.errorMessage}>
                                Oops! There was a problem submitting your registration. Please try again.
                            </div>
                        )}
                        <button type="submit" className={styles.primaryBtn} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Joining...' : 'Join Challenge'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AppointmentModal;
