import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About</h1>
        <p>This platform highlights the profiles of top social media influencers.</p>
      </div>
      <Footer />
    </>
  );
}
