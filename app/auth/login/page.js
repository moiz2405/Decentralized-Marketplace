"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import next/image for optimized images
import '../../../styles/globals.css';  // Import the global styles

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Clear localStorage and sessionStorage when the component mounts
  useEffect(() => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();
      
      if (response.ok) {
        router.push('/dashboard');
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred while logging in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pageContainer">
      <div className="leftContainer">
        {/* Using next/image for the optimized image */}
        <Image
          src="/images/placeholder-1.jpg" // Replace with your actual image path
          alt="Login Image"
          layout="fill"  // Makes the image responsive
          objectFit="cover" // Ensures the image covers the container without overflowing
          className="loginImage"
        />
      </div>
      <div className="rightContainer">
        <div className="loginContainer">
          <h1 className="title">Login</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin} className="form" autoComplete="off">
            <label className="label">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                placeholder="Enter your username"
                autoComplete="new-password"
              />
            </label>
            <label className="label">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Enter your password"
                autoComplete="new-password"
              />
            </label>
            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
