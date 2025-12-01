import { useState } from "react";

const ProductFilter = () => {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Headphones", category: "Electronics" },
    { name: "T-Shirt", category: "Clothes" },
    { name: "Jeans", category: "Clothes" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Product Filter</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("All")} style={{ marginRight: "10px" }}>
          All
        </button>
        <button
          onClick={() => setFilter("Electronics")}
          style={{ marginRight: "10px" }}
        >
          Electronics
        </button>
        <button onClick={() => setFilter("Clothes")}>Clothes</button>
      </div>

      {/* Display Products */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProducts.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              fontSize: "18px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "5px",
              width: "200px",
              margin: "auto",
            }}
          >
            {item.name} — <strong>{item.category}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
