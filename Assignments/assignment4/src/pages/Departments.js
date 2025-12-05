import React, { useEffect, useState } from 'react';
import DepartmentCard from '../components/DepartmentCard';

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [filteredDepts, setFilteredDepts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/src/data/departments.json')
      .then(res => res.json())
      .then(data => {
        setDepartments(data);
        setFilteredDepts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed loading departments', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let results = departments;

    if (category !== "All") {
      results = results.filter(dept => dept.category === category);
    }

    if (search.trim() !== "") {
      results = results.filter(dept =>
        dept.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredDepts(results);
  }, [search, category, departments]);

  return (
    <>
      <section className="mb-4">
        <h2 className="fw-bold">Our Departments</h2>
        <p className="text-muted">
          Explore the various academic departments that shape future engineers, innovators, researchers, 
          and leaders. Each department is equipped with expert faculty, advanced laboratories, and 
          industry-aligned curriculum.
        </p>
      </section>

      <div className="d-flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search departments..."
          className="form-control"
          style={{ maxWidth: "260px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          style={{ maxWidth: "220px" }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Engineering">Engineering</option>
          <option value="Management">Management</option>
          <option value="Science">Science</option>
        </select>
      </div>

      {loading && <p>Loading departments...</p>}

      {!loading && filteredDepts.length === 0 && (
        <p className="text-danger">No departments match your search or filter.</p>
      )}

      {!loading && (
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {filteredDepts.map(dept => (
            <div className="col" key={dept.id}>
              <DepartmentCard dept={dept} />
            </div>
          ))}
        </div>
      )}

      <section className="mt-5">
        <h3 className="fw-semibold">Why Study Here?</h3>
        <ul className="list-group mb-4">
          <li className="list-group-item">✔️ Experienced faculty with industry and research background</li>
          <li className="list-group-item">✔️ Modern laboratories & innovation centers</li>
          <li className="list-group-item">✔️ Internships, workshops, and hands-on learning</li>
          <li className="list-group-item">✔️ 200+ recruiters visiting every year</li>
          <li className="list-group-item">✔️ Holistic development through clubs & technical forums</li>
        </ul>
      </section>
    </>
  );
}
