
import './App.css'
import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';        

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors: {[key: string]: string} = {};
        
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 chars';

        if (!isLogin) {
            if (!formData.username) newErrors.username = 'Username is required';
            if (!formData.phone) newErrors.phone = 'Phone is required';
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                setLoading(false);
                console.log('Form Submitted:', formData);
                alert('Success!');
            }, 1000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user types
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    return (
    <>
    <PrimeReactProvider>
      <div className="card form-container">
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>{isLogin ? 'Login' : 'Sign Up'}</h1>
            
            <div className={`form-content ${isLogin ? 'login-mode' : 'signup-mode'}`}>
                
                {!isLogin && (
                    <div className="field-wrapper fade-in">
                        <span className="p-float-label p-input-icon-left w-full">
                            <i className="pi pi-user" />
                            <InputText 
                                id="username" 
                                value={formData.username} 
                                onChange={handleChange} 
                                className={`w-full ${errors.username ? 'p-invalid' : ''}`} 
                            />
                            <label htmlFor="username">Username</label>
                        </span>
                        {errors.username && <small className="error-text">{errors.username}</small>}
                    </div>
                )}

                <div className="field-wrapper">
                    <span className="p-float-label p-input-icon-left w-full">
                        <i className="pi pi-envelope" />
                        <InputText 
                            id="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={`w-full ${errors.email ? 'p-invalid' : ''}`} 
                        />
                        <label htmlFor="email">Email</label>
                    </span>
                    {errors.email && <small className="error-text">{errors.email}</small>}
                </div>

                {!isLogin && (
                    <div className="field-wrapper fade-in">
                        <span className="p-float-label p-input-icon-left w-full">
                            <i className="pi pi-phone" />
                            <InputText 
                                id="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                className={`w-full ${errors.phone ? 'p-invalid' : ''}`} 
                            />
                            <label htmlFor="phone">Phone</label>
                        </span>
                        {errors.phone && <small className="error-text">{errors.phone}</small>}
                    </div>
                )}

                <div className="field-wrapper">
                    <span className="p-float-label p-input-icon-left w-full">
                        <i className="pi pi-lock" />
                        <InputText 
                            id="password" 
                            type="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            className={`w-full ${errors.password ? 'p-invalid' : ''}`} 
                        />
                        <label htmlFor="password">Password</label>
                    </span>
                    {errors.password && <small className="error-text">{errors.password}</small>}
                </div>

                {!isLogin && (
                    <div className="field-wrapper fade-in">
                        <span className="p-float-label p-input-icon-left w-full">
                            <i className="pi pi-lock" />
                            <InputText 
                                id="confirmPassword" 
                                type="password" 
                                value={formData.confirmPassword} 
                                onChange={handleChange} 
                                className={`w-full ${errors.confirmPassword ? 'p-invalid' : ''}`} 
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </span>
                        {errors.confirmPassword && <small className="error-text">{errors.confirmPassword}</small>}
                    </div>
                )}
            </div>

            <Button 
                label={loading ? "Processing..." : (isLogin ? "Login" : "Sign Up")} 
                icon={loading ? "pi pi-spin pi-spinner" : "pi pi-check"} 
                onClick={handleSubmit} 
                className="mt-4"
            />

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                </span>
                <a 
                    href="#" 
                    onClick={(e) => { 
                        e.preventDefault(); 
                        setIsLogin(!isLogin); 
                        setErrors({});
                        setFormData({ username: '', email: '', phone: '', password: '', confirmPassword: '' });
                    }}
                    style={{ color: '#00ffa3', textDecoration: 'none', fontWeight: 'bold' }}
                >
                    {isLogin ? "Sign Up" : "Login"}
                </a>
            </div>
        </div>
    </PrimeReactProvider>
    
    <div className="footer-bottom">
      <p>&copy; 2025 | تم التطوير بحب ❤️ بواسطة مصطفى عبد النعيم.</p>
    </div>
    </>
  )
}

export default App
