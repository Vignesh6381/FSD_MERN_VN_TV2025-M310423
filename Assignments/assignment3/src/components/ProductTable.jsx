const ProductTable = () => {
  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Mouse", price: 800 }
  ];

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Product List</h2>

      <table
        style={{
          width: "60%",
          margin: "20px auto",
          borderCollapse: "collapse",
          fontSize: "18px",
        }}
      >
        <thead>
          <tr style={{ background: "#ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                {item.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                {item.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                ₹{item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
