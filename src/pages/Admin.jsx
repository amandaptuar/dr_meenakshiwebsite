import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from './styles/Admin.module.css';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        if (!isAuthenticated) return;
        const fetchUsers = async () => {
            try {
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) {
                    throw error;
                }
                setUsers(data || []);
            } catch (err) {
                console.error('Error fetching users:', err);
                setError('Failed to load user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const user = data.get('username');
        const pass = data.get('password');

        if (user === 'admin' && pass === 'password123') {
            setIsAuthenticated(true);
            setLoginError('');
        } else {
            setLoginError('Invalid username or password');
        }
    };

    return (
        <div className={styles.adminPage}>
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.backBtn}>← Back to Website</Link>
                    <h1 className={styles.title}>Admin Dashboard</h1>
                </div>
            </header>

            <main className={styles.main}>
                {!isAuthenticated ? (
                    <div className={styles.loginWrapper}>
                        <div className={styles.loginCard}>
                            <h2 className={styles.cardTitle} style={{textAlign: 'center'}}>Admin Login</h2>
                            <form className={styles.loginForm} onSubmit={handleLogin}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" name="username" required className={styles.input} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" required className={styles.input} />
                                </div>
                                {loginError && <p className={styles.loginError}>{loginError}</p>}
                                <button type="submit" className={styles.submitBtn}>Login to Dashboard</button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className={styles.card}>
                        <h2 className={styles.cardTitle}>Registered Users ({users.length})</h2>
                        
                        {loading ? (
                            <p className={styles.loadingText}>Loading data...</p>
                        ) : error ? (
                            <p className={styles.errorText}>{error}</p>
                        ) : (
                            <div className={styles.tableWrapper}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Date Joined</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length === 0 ? (
                                            <tr>
                                                <td colSpan="4" className={styles.emptyState}>No users registered yet.</td>
                                            </tr>
                                        ) : (
                                            users.map((user, idx) => (
                                                <tr key={user.id || idx}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone || 'N/A'}</td>
                                                    <td>{new Date(user.created_at).toLocaleDateString()} {new Date(user.created_at).toLocaleTimeString()}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Admin;
