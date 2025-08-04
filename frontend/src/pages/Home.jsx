// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom';
import homeBG from '../assets/home.jpg';
import '../styles/Home.css'; // ✅ import your home styles

export default function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${homeBG})` }}
    >
      <div className="home-overlay">
        <h1 className="home-title">
          Welcome to <span style={{ color: 'orange' }}>SheCan Foundation</span>
        </h1>

        <p className="home-subtitle">
          Empowering women, one step at a time. Join us in making a difference.
        </p>

        <button onClick={handleLogin}>
          Login to Dashboard
        </button>
      </div>
    </div>
  );
}
