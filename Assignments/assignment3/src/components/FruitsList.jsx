import { useState } from "react";

const FruitsList = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
  const [newFruit, setNewFruit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = newFruit.trim();
    if (!trimmed) return;

    setFruits([...fruits, trimmed]);
    setNewFruit("");
  };

  
  const handleDelete = (index) => {
    const updated = fruits.filter((_, i) => i !== index);
    setFruits(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Fruits List</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a fruit..."
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          style={{ padding: "8px", width: "220px", marginRight: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Add Fruit
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {fruit}
            <button
              onClick={() => handleDelete(index)}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                background: "white",
                color: "black",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
