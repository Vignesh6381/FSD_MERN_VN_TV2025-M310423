import { useState } from "react";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value, // update only the changed field
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Edit Profile</h2>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={profile.name}
          onChange={handleChange}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={profile.email}
          onChange={handleChange}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
        <br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={profile.phone}
          onChange={handleChange}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />
      </div>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </div>
    </div>
  );
};

export default EditProfile;
