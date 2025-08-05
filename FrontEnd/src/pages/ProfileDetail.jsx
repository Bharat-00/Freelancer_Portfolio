import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mockProfiles = [
  {
    id: 1,
    name: 'Aarav Mehta',
    username: '@aarav_lifestyle',
    bio: 'Fitness and lifestyle influencer with a passion for health and travel.',
    image: 'https://via.placeholder.com/400x250',
    category: 'Fitness'
  },
  {
    id: 2,
    name: 'Riya Kapoor',
    username: '@riya_makeup',
    bio: 'Beauty content creator sharing daily makeup tutorials and tips.',
    image: 'https://via.placeholder.com/400x250',
    category: 'Beauty'
  }
];

export default function ProfileDetail() {
  const { id } = useParams();
  const profile = mockProfiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Profile not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <img src={profile.image} alt={profile.name} style={{ width: '300px', borderRadius: '12px' }} />
        <h2>{profile.name}</h2>
        <p>{profile.username}</p>
        <p>{profile.category}</p>
        <p>{profile.bio}</p>
      </div>
      <Footer />
    </>
  );
}
