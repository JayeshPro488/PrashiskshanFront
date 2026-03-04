import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import bgImg from '../assets/bg.png';

export default function Login() {
    const [focusedField, setFocusedField] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.id]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials as requested
        const validEmail = "admin@gmail.com";
        const validPassword = "password123";

        if (credentials.email === validEmail && credentials.password === validPassword) {
            // Optional: Save current user session
            localStorage.setItem('currentUser', JSON.stringify({ name: 'Admin User', email: validEmail }));
            navigate('/config');
        } else {
            alert('Invalid credentials! Use admin@gmail.com / password123');
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 font-sans text-gray-800">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImg}
                    alt="Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
                <div
                    className={`relative w-full max-w-[400px] md:max-w-[450px] overflow-hidden rounded-3xl border bg-white/30 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 ${isHovering
                        ? 'border-blue-400/70 scale-[1.02] shadow-[0_30px_80px_rgba(0,51,102,0.35)]'
                        : 'border-white/50'
                        }`}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Glow Border */}
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-500 via-[#003366] to-blue-500 opacity-20 blur-2xl" />

                    {/* Header */}
                    <div className="mb-8 flex flex-col items-center text-center">
                        <div className="group relative mb-6">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-[#003366] opacity-30 blur-xl transition-all duration-300 group-hover:opacity-60 group-hover:blur-2xl" />

                            <div className="relative rounded-2xl bg-white/20 p-4 backdrop-blur-md transition-all duration-300">
                                <img
                                    src={logoImg}
                                    alt="Logo"
                                    className="h-auto w-48 object-contain transition-transform duration-300"
                                />
                            </div>
                        </div>

                        <p className="text-slate-600 text-lg">
                            Login to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleLogin}>
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className={`mb-1 block text-sm font-semibold text-left transition-all duration-300 ${focusedField === 'email'
                                    ? 'text-[#003366]'
                                    : 'text-[#003366]'
                                    }`}
                            >
                                Email
                            </label>

                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full rounded-xl py-3 px-5 shadow-lg ring-2 transition-all duration-300 placeholder:text-gray-400 ${focusedField === 'email'
                                        ? 'bg-white ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.35)] scale-[1.02]'
                                        : 'bg-white/70 ring-transparent hover:bg-white hover:shadow-xl'
                                        }`}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className={`mb-1 block text-sm font-semibold text-left transition-all duration-300 ${focusedField === 'password'
                                    ? 'text-[#003366]'
                                    : 'text-[#003366]'
                                    }`}
                            >
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="Enter password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full rounded-xl py-3 px-5 shadow-lg ring-2 transition-all duration-300 placeholder:text-gray-400 ${focusedField === 'password'
                                        ? 'bg-white ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.35)] scale-[1.02]'
                                        : 'bg-white/70 ring-transparent hover:bg-white hover:shadow-xl'
                                        }`}
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#003366] via-blue-700 to-[#003366] px-4 py-3 text-base font-bold text-white shadow-[0_15px_50px_rgba(0,51,102,0.5)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,51,102,0.65)] active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Login
                            </span>

                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        </button>
                    </form>

                    {/* Signup Link */}
                    <p className="mt-12 text-center text-sm font-medium text-slate-800">
                        Don't have an account?{' '}
                        <Link
                            to="/signup"
                            className="font-bold text-[#003366] underline decoration-2 underline-offset-4 transition hover:text-blue-700"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
            `}</style>
        </div>
    );
}
