import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 768) setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // open on desktop
      } else {
        setIsSidebarOpen(false); // collapsed on mobile
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // trigger once on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar onHamburgerClick={toggleSidebar} />
              <Sidebar isOpen={isSidebarOpen} onLinkClick={closeSidebar} />
              {isSidebarOpen && window.innerWidth <= 768 && (
                <div className="overlay" onClick={closeSidebar}></div>
              )}
              <Dashboard />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
