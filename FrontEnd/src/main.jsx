import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error('Error fetching profile:', err));
  }, []);

  return (
    <div>
      <h1>Influencers Portfolio</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>Followers: {profile.followers}</p>
          <p>Category: {profile.category}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
