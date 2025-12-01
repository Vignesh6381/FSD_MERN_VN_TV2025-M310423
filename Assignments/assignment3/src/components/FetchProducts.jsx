import { useEffect, useState } from "react";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(false);      

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
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
    return <h2 style={{ textAlign: "center", marginTop: "40px", color: "red" }}>
      Error loading data
    </h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Fetched Products</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "220px",
              padding: "15px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product.title}</h3>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchProducts;
