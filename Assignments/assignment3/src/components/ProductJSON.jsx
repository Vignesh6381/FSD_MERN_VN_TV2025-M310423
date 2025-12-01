import products from "../data.json"; 

const ProductJSON = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Products from JSON</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              width: "200px",
              padding: "15px",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductJSON;
