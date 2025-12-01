import { useState } from "react";

const StudentSearch = () => {
  const students = [
    "Vignesh",
    "Priya",
    "Arun",
    "Kaviya",
    "Sanjay",
    "Divya",
  ];

  const [query, setQuery] = useState("");

  const filteredStudents = students.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Search Students</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginTop: "10px",
          fontSize: "16px",
        }}
      />

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student, index) => (
          <li
            key={index}
            style={{
              fontSize: "18px",
              marginBottom: "8px",
            }}
          >
            {student}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSearch;
