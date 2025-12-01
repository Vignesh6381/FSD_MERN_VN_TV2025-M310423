import { useEffect, useState } from "react";
import axios from "axios";

const EditUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [status, setStatus] = useState("loading"); 

  // Fetch user on mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/1")
      .then((res) => {
        setUser({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
        });
        setStatus("");
      })
      .catch(() => setStatus("error"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    setStatus("loading");

    axios
      .put("https://dummyjson.com/users/1", user)
      .then((res) => {
        console.log("Updated User:", res.data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  };

  if (status === "loading") {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>;
  }

  if (status === "error") {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "red" }}>
        Error loading user
      </h2>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Edit User</h2>

      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          onClick={handleUpdate}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Update User
        </button>

        {status === "success" && (
          <p style={{ color: "green", marginTop: "15px", fontWeight: "bold" }}>
            User Updated!
          </p>
        )}
      </div>
    </div>
  );
};

export default EditUser;
