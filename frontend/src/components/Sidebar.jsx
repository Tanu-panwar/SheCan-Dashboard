import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

export default function Sidebar({ isOpen, onLinkClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    if (onLinkClick) onLinkClick(); // Close sidebar on mobile
  };

  const handleNavClick = () => {
    if (onLinkClick) onLinkClick(); // Call parent's closeSidebar
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <nav>
        <a href="#overview" onClick={handleNavClick}>Dashboard</a>
        <a href="#reports" onClick={handleNavClick}>Reports</a>
        <a href="#leaderboard" onClick={handleNavClick}>LeaderBoard</a>
        <a href="#settings" onClick={handleNavClick}>Settings</a>
        <a onClick={handleLogout} className="log">Logout</a>
      </nav>

      <div className="sidebar-footer">
        <hr />
        <p>Made with ❤️ in India</p>
      </div>
    </aside>
  );
}
