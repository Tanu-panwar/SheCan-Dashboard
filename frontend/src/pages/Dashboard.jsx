// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import DonationChart from '../components/DonationChart';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [intern, setIntern] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then(res => res.json())
      .then(data => setIntern(data));

    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="section-title" id="overview">Overview</h2>
      <div className="card-grid">
        <div className="dashboard-card">Intern Name: {intern.name || 'Loading...'}</div>
        <div className="dashboard-card">Email: {intern.email || 'tanu@example.com'}</div>
        <div className="dashboard-card">City: {intern.city || 'Delhi'}</div>
        <div className="dashboard-card">Referral Code: {intern.referralCode || '...'}</div>
        <div className="dashboard-card">Total Donations: ₹{intern.donationsRaised || 0}</div>
        <div className="dashboard-card">Joined: July 2025</div>
      </div>

      <h3 className="section-title" id="rewards">Unlockable Rewards</h3>
      <div className="reward-grid">
        {intern.rewards?.length > 0 ? (
          intern.rewards.map((reward, index) => (
            <div className="reward-card" key={index}>
              <h4>🎁 Reward #{index + 1}</h4>
              <p>{reward}</p>
            </div>
          ))
        ) : (
          <>
            <div className="reward-card">
              <h4>🥉 Bronze Supporter</h4>
              <p>Raise ₹1,000 or more</p>
            </div>
            <div className="reward-card">
              <h4>🥈 Silver Supporter</h4>
              <p>Raise ₹5,000 or more</p>
            </div>
            <div className="reward-card">
              <h4>🥇 Gold Champion</h4>
              <p>Raise ₹10,000 or more</p>
            </div>
          </>
        )}
      </div>

      <h3 className="section-title" id="leaderboard">Top Interns Leaderboard</h3>
      <div className="table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Donations</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.length > 0 ? (
              leaderboard.map((user, index) => (
                <tr key={index}>
                  <td>{user.rank}</td>
                  <td>{user.name}</td>
                  <td>₹{user.donations}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="3">Loading leaderboard...</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <div id="reports"><DonationChart /></div>
    </div>
  );
}
