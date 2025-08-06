import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import './Home.css';

const profiles = [
  {
    id: 1,
    name: 'Aarav Mehta',
    username: '@aarav_lifestyle',
    category: 'Fitness',
    image: 'https://via.placeholder.com/280x200?text=Aarav+Mehta'
  },
  {
    id: 2,
    name: 'Riya Kapoor',
    username: '@riya_makeup',
    category: 'Beauty',
    image: 'https://via.placeholder.com/280x200?text=Riya+Kapoor'
  },
  {
    id: 3,
    name: 'Nikhil Singh',
    username: '@nik_travel',
    category: 'Travel',
    image: 'https://via.placeholder.com/280x200?text=Nikhil+Singh'
  }
];

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(search.toLowerCase()) ||
    profile.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        <input
          type="text"
          placeholder="Search by name or category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="profile-container">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map(profile => (
              <ProfileCard key={profile.id} {...profile} />
            ))
          ) : (
            <p>No profiles match your search.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
