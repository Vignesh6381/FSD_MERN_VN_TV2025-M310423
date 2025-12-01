import "../App.css";



const LoginStatus = () => {
  const isLoggedIn = true; 

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      {isLoggedIn ? "Welcome back!" : "Please log in"}
    </div>
  );
};

export default LoginStatus;
