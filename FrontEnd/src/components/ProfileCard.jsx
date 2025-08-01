import './ProfileCard.css';

export default function ProfileCard({ name, username, category, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>@{username}</p>
      <p>{category}</p>
    </div>
  );
}