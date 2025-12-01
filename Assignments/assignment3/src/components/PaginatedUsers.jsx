import { useEffect, useState } from "react";

const PaginatedUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const USERS_PER_PAGE = 5;

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>;
  }

  if (error) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "red" }}>
        Error loading data
      </h2>
    );
  }

  const startIndex = currentPage * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  const handleNext = () => {
    if (startIndex + USERS_PER_PAGE < users.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Users (Page {currentPage + 1})</h2>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {currentUsers.map((user) => (
          <li
            key={user.id}
            style={{
              marginBottom: "10px",
              fontSize: "18px",
            }}
          >
            {user.firstName} {user.lastName} — {user.email}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          style={{ padding: "8px 16px", marginRight: "10px" }}
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          disabled={startIndex + USERS_PER_PAGE >= users.length}
          style={{ padding: "8px 16px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedUsers;
