import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import './Home.css';
import Footer from '../components/Footer';

const Home = () => {
  const profiles = [
    {
      name: 'Aarav Mehta',
      username: '@aarav_lifestyle',
      bio: 'Fitness and lifestyle influencer with a passion for health and travel.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Riya Kapoor',
      username: '@riya_makeup',
      bio: 'Beauty content creator sharing daily makeup tutorials and tips.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
  <>
    <Navbar />
    <div className="profile-container">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
    <Footer />
  </>
);
};

export default Home;

