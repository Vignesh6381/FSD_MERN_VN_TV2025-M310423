import ProfileCard from "./ProfileCard";
import "../App.css";

const ProfilePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Team Members</h1>

      <div className="profile-container">
        <ProfileCard
          name="Vignesh"
          role="Frontend Developer"
          image="https://i.pravatar.cc/150?img=11"
        />

        <ProfileCard
          name="Priya"
          role="UI/UX Designer"
          image="https://i.pravatar.cc/150?img=32"
        />

        <ProfileCard
          name="Arun"
          role="Backend Developer"
          image="https://i.pravatar.cc/150?img=18"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
