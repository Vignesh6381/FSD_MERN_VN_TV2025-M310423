import React from 'react';

export default function About() {
  return (
    <>
      <section className="mb-4">
        <h2 className="fw-bold">About the College</h2>
        <p className="text-muted">
          Established in 1990, our institution has grown into a premier center of higher education 
          known for academic excellence, research contributions, and strong partnerships with industry leaders.
          Over three decades, we have continuously evolved to meet the needs of modern education and global progress.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="fw-semibold">Our Journey</h3>
        <p className="text-muted">
          Starting from a small campus with a single engineering department, the college has expanded into 
          a multidisciplinary institution offering undergraduate, postgraduate, and research programs across 
          engineering, management, and science domains. Our alumni today work in leading companies across the world.
        </p>
      </section>

      <section className="mb-4">
        <h3 className="fw-semibold">Mission & Vision</h3>
        <p><strong>Mission:</strong> To impart quality education, foster innovation, and develop socially responsible individuals 
        equipped for lifelong learning and leadership roles.</p>

        <p><strong>Vision:</strong> To emerge as a global center of excellence in education, research, and technological advancements, 
        contributing positively to industry and society.</p>
      </section>

      <section className="mb-4">
        <h3 className="fw-semibold">Our Core Values</h3>
        <ul className="list-group mb-3">
          <li className="list-group-item">✔️ Integrity & Ethics</li>
          <li className="list-group-item">✔️ Innovation & Creativity</li>
          <li className="list-group-item">✔️ Academic Excellence</li>
          <li className="list-group-item">✔️ Inclusivity & Diversity</li>
          <li className="list-group-item">✔️ Community Engagement</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="fw-semibold mb-3">Major Achievements</h3>

        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 mb-3 shadow-sm">
              <h5 className="fw-bold">National Accreditation</h5>
              <p className="text-muted">Accredited by leading national bodies for excellence in education, infrastructure, and student outcomes.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 mb-3 shadow-sm">
              <h5 className="fw-bold">Research Excellence</h5>
              <p className="text-muted">Awarded numerous research grants and recognized for contributions in engineering, technology, and applied sciences.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 mb-3 shadow-sm">
              <h5 className="fw-bold">Placement Success</h5>
              <p className="text-muted">Consistent placement record with top recruiters offering competitive salaries and career opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h3 className="fw-semibold">World-Class Facilities</h3>
        <p className="text-muted">The college provides an ecosystem that encourages learning, collaboration, and innovation.</p>

        <ul className="list-group mb-3">
          <li className="list-group-item">🏫 Smart classrooms & modern laboratories</li>
          <li className="list-group-item">💻 Advanced research centers & innovation labs</li>
          <li className="list-group-item">🏋️‍♂️ Sports facilities & student activity centers</li>
          <li className="list-group-item">📚 Central library with digital resources</li>
          <li className="list-group-item">🚍 Transportation, hostels, and cafeteria</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="fw-semibold">Message from the Principal</h3>
        <div className="p-4 bg-light rounded shadow-sm">
          <blockquote className="blockquote text-dark">
            “Our vision is to develop well-rounded professionals who are academically strong,
            ethically grounded, and capable of contributing meaningfully to society. 
            We strive to create an environment that inspires innovation, research, and collaboration.”
          </blockquote>
          <footer className="blockquote-footer mt-2">Principal, Our College</footer>
        </div>
      </section>
    </>
  );
}
