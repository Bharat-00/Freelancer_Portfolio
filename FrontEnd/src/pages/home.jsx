import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import './Home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch profiles');
        return res.json();
      })
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...new Set(profiles.map(p => p.category))];

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(search.toLowerCase()) ||
                          profile.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || profile.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        <div className="filters">
          <input
            type="text"
            placeholder="Search by name or category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <p>Loading profiles...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="profile-container">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map(profile => (
                <ProfileCard key={profile.id} {...profile} />
              ))
            ) : (
              <p>No profiles match your filters.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
