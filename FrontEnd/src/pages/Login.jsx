import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Login.css';

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
          <p className="note">* This is a UI-only form for now.</p>
        </form>
      </div>
      <Footer />
    </>
  );
}
