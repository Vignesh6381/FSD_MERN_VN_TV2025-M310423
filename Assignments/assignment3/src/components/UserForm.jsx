import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedData({ name, email });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />

        <br />

        <button
          type="submit"
          style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "30px", fontSize: "18px" }}>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
