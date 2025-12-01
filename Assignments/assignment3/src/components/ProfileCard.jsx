import "../App.css";

const ProfileCard = ({ name, role, image }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
};

export default ProfileCard;
