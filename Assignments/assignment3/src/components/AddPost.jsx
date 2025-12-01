import { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const [status, setStatus] = useState(""); // "", "success", "error", "loading"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await axios.post("https://dummyjson.com/posts", {
        title: formData.title,
        body: formData.body,
        userId: 1, 
      });

      console.log("Response:", res.data);
      setStatus("success");
      setFormData({ title: "", body: "" });
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Add New Post</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />

        <textarea
          name="body"
          placeholder="Enter body"
          value={formData.body}
          onChange={handleChange}
          rows={4}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />

        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Add Post"}
        </button>
      </form>

      {status === "success" && (
        <p style={{ color: "green", marginTop: "15px", fontWeight: "bold" }}>
          Post Added!
        </p>
      )}

      {status === "error" && (
        <p style={{ color: "red", marginTop: "15px" }}>
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
};

export default AddPost;
