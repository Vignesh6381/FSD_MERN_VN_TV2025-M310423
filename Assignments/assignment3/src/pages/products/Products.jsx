import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Products Page</h2>

      <div style={{ marginTop: "20px" }}>
        <Link to="electronics" style={{ marginRight: "20px" }}>
          Electronics
        </Link>
        <Link to="fashion">Fashion</Link>
      </div>

      {/* Nested routes will load here */}
      <div style={{ marginTop: "30px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
