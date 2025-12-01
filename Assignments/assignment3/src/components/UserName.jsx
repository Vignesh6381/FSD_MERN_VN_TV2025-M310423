import { useState } from "react";

const Username = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Enter Username</h2>

      <input
        type="text"
        placeholder="Type your username..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "250px",
          marginTop: "10px",
        }}
      />

      <h3 style={{ marginTop: "20px" }}>
        {name ? `You typed: ${name}` : "Start typing..."}
      </h3>
    </div>
  );
};

export default Username;
