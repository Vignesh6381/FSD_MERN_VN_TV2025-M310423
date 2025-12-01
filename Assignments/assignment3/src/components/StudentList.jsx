import React from "react";


import "../App.css";

const StudentList = () => {
  const students = [
    { id: 1, name: "Vignesh", dept: "CSE", year: "3rd Year" },
    { id: 2, name: "Priya", dept: "ECE", year: "2nd Year" },
    { id: 3, name: "Arun", dept: "IT", year: "1st Year" },
    { id: 4, name: "Sneha", dept: "EEE", year: "4th Year" },
  ];

  return (
    <div className="app">
      <h1>Student List</h1>
      <div className="card-container">
        {students.map((student) => (
          <div className="card" key={student.id}>
            <h2>{student.name}</h2>
            <p><strong>Dept:</strong> {student.dept}</p>
            <p><strong>Year:</strong> {student.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
