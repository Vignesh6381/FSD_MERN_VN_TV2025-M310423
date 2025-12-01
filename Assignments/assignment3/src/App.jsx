import { Link, Route, Routes } from "react-router-dom";
import StudentList from "../src/components/StudentList";
import LoginStatus from "../src/components/Login";
import ProfilePage from "../src/components/ProfilePage";
import UserName from "../src/components/UserName";
import UserForm from "../src/components/UserForm";
import ProductTable from "../src/components/ProductTable";
import AlertChild from "../src/components/AlertChild";
import ProductFilter from "../src/components/ProductFilter";
import StudentSearch from "../src/components/StudentSearch";
import ProductJSON from "../src/components/ProductJSON";
import FetchProducts from "../src/components/FetchProducts";
import FruitsList from "../src/components/FruitsList";
import EditProfile from "../src/components/EditProfile";
import AddPost from "../src/components/AddPost";
import EditUser from "../src/components/EditUser";
import PaginatedUsers from "../src/components/PaginatedUsers";


import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";


import Productss from "./pages/products/Products";
import Electronics from "./pages/products/Electronics";
import Fashion from "./pages/products/Fashion";



function App() {

  const showAlert = () => {
    alert("Button clicked from child!");
  };
  return (
    <div>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/students" style={{ marginRight: "20px" }}>Students</Link>
        <Link to="/login-status" style={{ marginRight: "20px" }}>Login Status</Link>
        <Link to="/profiles" style={{ marginRight: "20px" }}>Profiles</Link>
        <Link to="/username" style={{ marginRight: "20px" }}>Username</Link>
        <Link to="/userform" style={{ marginRight: "20px" }}>User Form</Link>
        <Link to="/products" style={{ marginRight: "20px" }}>Products</Link>
        <Link to="/alert" style={{ marginRight: "20px" }}>Alert Demo</Link>
        <Link to="/filter" style={{ marginRight: "20px" }}>Filter Products</Link>
        <Link to="/search" style={{ marginRight: "20px" }}>Search Students</Link>
        <Link to="/json" style={{ marginRight: "20px" }}>JSON Products</Link>
        <Link to="/fetch" style={{ marginRight: "20px" }}>Fetch Products</Link>
        <Link to="/fruits" style={{ marginRight: "20px" }}>Fruits</Link>
        <Link to="/edit-profile" style={{ marginRight: "20px" }}>Edit Profile</Link>
        <Link to="/add-post" style={{ marginRight: "20px" }}>Add Post</Link>
        <Link to="/edit-user" style={{ marginRight: "20px" }}>Edit User</Link>
        <Link to="/users-page" style={{ marginRight: "20px" }}>Users Pagination</Link>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "20px" }}>About</Link>
        <Link to="/products" style={{ marginRight: "20px" }}>Products</Link>

        <Link to="/products" style={{ marginRight: "20px" }}>Productss</Link>







      </nav>

      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: "center" }}>Welcome Home</h2>} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/login-status" element={<LoginStatus />} />
        <Route path="/profiles" element={<ProfilePage />} />
        <Route path="/username" element={<UserName />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/products" element={<ProductTable />} />
        <Route path="/alert" element={<AlertChild showAlert={showAlert} />} />
        <Route path="/filter" element={<ProductFilter />} />
        <Route path="/search" element={<StudentSearch />} />
        <Route path="/json" element={<ProductJSON />} />
        <Route path="/fetch" element={<FetchProducts />} />
        <Route path="/fruits" element={<FruitsList />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/users-page" element={<PaginatedUsers />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />


<Route path="/products" element={<Productss />}>
  <Route path="electronics" element={<Electronics />} />
  <Route path="fashion" element={<Fashion />} />
</Route>









      </Routes>
    </div>
  );
}

export default App;
