import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProfileDetail.css';

export default function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/profile/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Profile not found');
        }
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch((err) => setError(err.message));
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="profile-detail">
        {error ? (
          <h2>{error}</h2>
        ) : profile ? (
          <>
            <img
              src={`https://via.placeholder.com/400x250?text=${encodeURIComponent(profile.name)}`}
              alt={profile.name}
              style={{ borderRadius: '12px' }}
            />
            <h2>{profile.name}</h2>
            <p>@{profile.username}</p>
            <p>{profile.category}</p>
            <p>{profile.bio || 'No bio available.'}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}
