// Navbar.jsx
import '../styles/Navbar.css';
import logo from '../assets/logo.avif';

export default function Navbar({ onHamburgerClick }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="hamburger-icon" onClick={onHamburgerClick}>
          ☰
        </div>

        <img src={logo} alt="SheCan Logo" className="logo-circle" />
        <h1>SheCan</h1>
      </div>

      <div className="navbar-right">
        <span className="welcome">Welcome, Tanu</span>
      </div>
    </header>
  );
}
