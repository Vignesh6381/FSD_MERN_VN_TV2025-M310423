const AlertChild = ({ showAlert }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Alert from Child Component</h2>

      <button
        onClick={showAlert}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default AlertChild;
