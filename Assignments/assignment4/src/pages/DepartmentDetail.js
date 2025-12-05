import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DepartmentDetail() {
  const { id } = useParams();
  const [dept, setDept] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/src/data/departments.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(d => d.id.toLowerCase() === id.toLowerCase());
        setDept(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading department:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading department details...</p>;

  if (!dept) return <p className="text-danger">Department not found.</p>;

  return (
    <>
      <section className="mb-4">
        <h2 className="fw-bold">{dept.name}</h2>
        <p className="text-muted">{dept.fullDescription}</p>
      </section>

      <section className="mb-4">
        <h4 className="fw-semibold">Courses Offered</h4>
        <p className="text-muted">Programs designed to build strong academic and practical foundations.</p>
        <ul className="list-group mb-3">
          {dept.courses.map((c, i) => (
            <li key={i} className="list-group-item">
              🎓 {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h4 className="fw-semibold">Faculty Team</h4>
        <p className="text-muted">
          Experienced, research-driven faculty dedicated to student growth and innovation.
        </p>
        <ul className="list-group mb-3">
          {dept.faculty.map((f, i) => (
            <li key={i} className="list-group-item">
              👨‍🏫 {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h4 className="fw-semibold">Labs & Facilities</h4>
        <p className="text-muted">
          Advanced laboratories and infrastructure supporting hands-on learning and research.
        </p>
        <ul className="list-group mb-3">
          {dept.labs.map((l, i) => (
            <li key={i} className="list-group-item">
              🔬 {l}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h4 className="fw-semibold">Department Achievements</h4>
        <ul className="list-group">
          <li className="list-group-item">
            🏆 Consistent university rank holders every year.
          </li>
          <li className="list-group-item">
            🔍 Faculty with publications in national and international journals.
          </li>
          <li className="list-group-item">
            💡 Student teams participate in hackathons, technical symposiums, and research competitions.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h4 className="fw-semibold">Placement Highlights</h4>
        <ul className="list-group">
          <li className="list-group-item">💼 Strong placement support with top recruiters.</li>
          <li className="list-group-item">📈 Training on aptitude, coding, soft skills & industry tools.</li>
          <li className="list-group-item">🤝 Alumni guidance & mentorship programs.</li>
        </ul>
      </section>
    </>
  );
}
