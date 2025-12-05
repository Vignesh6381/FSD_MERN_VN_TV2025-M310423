import React from 'react';
import { Link } from 'react-router-dom';

// Example icons (replace with your icon library if needed)
const highlights = [
  { icon: "🎓", text: "NBA & NAAC Accredited Programs" },
  { icon: "🤝", text: "Industry Collaboration & Internship Support" },
  { icon: "🧪", text: "Smart Classrooms & Modern Research Labs" },
  { icon: "🏢", text: "200+ Recruiting Companies for Placements" },
  { icon: "🎉", text: "Student Clubs, Hackathons & Cultural Events" },
];

const testimonials = [
  {
    quote: "The college provided me with immense opportunities to grow academically and personally. The faculty and placement support are excellent!",
    author: "Final Year Student, CSE"
  },
  {
    quote: "Amazing campus life and exposure to real-world projects. Highly recommend!",
    author: "Alumnus, ECE"
  },
  {
    quote: "The MBA program shaped my leadership skills and career.",
    author: "MBA Graduate"
  }
];

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = React.useState(0);

  const nextTestimonial = () =>
    setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative mb-5"
        style={{
          background: "url('/images/college-hero.jpg') center/cover no-repeat",
          minHeight: "350px",
          borderRadius: "1rem",
          overflow: "hidden"
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0, 53, 102, 0.7)",
            zIndex: 1
          }}
        />
        <div className="container position-relative text-white py-5" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-3">Welcome to Our Institution</h1>
          <p className="lead mb-4">
            Empowering students through quality education, research excellence, and real-world exposure.
          </p>
          <Link to="/departments" className="btn btn-light btn-lg shadow">
            Explore Departments
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="mb-5">
        <div className="container">
          <h2 className="fw-semibold mb-3 text-primary">Why Choose Our College?</h2>
          <p className="text-muted fs-5">
            Our institution is committed to nurturing future-ready professionals by offering an 
            industry-aligned curriculum, state-of-the-art laboratories, experienced faculty, and 
            outstanding placement opportunities. We focus on holistic student development, innovation, 
            and leadership skills.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mb-5 bg-light py-4 rounded">
        <div className="container">
          <h2 className="fw-semibold mb-3 text-primary">Our Vision</h2>
          <p className="text-muted fs-5">
            To be recognized as a premier educational institution that produces globally competent 
            graduates equipped with strong technical knowledge, ethical values, and a passion for 
            lifelong learning.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-5">
        <div className="container">
          <h2 className="fw-semibold mb-4 text-primary">College Highlights</h2>
          <div className="row g-3">
            {highlights.map((h, idx) => (
              <div className="col-md-4 col-6" key={idx}>
                <div className="card border-0 shadow-sm text-center py-4 h-100">
                  <span style={{ fontSize: "2.5rem" }}>{h.icon}</span>
                  <div className="mt-3 fw-semibold">{h.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="mb-4">
        <div className="container">
          <h3 className="fw-semibold mb-3 text-primary">Top Departments</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-4 shadow-lg border-0 h-100">
                <div className="mb-2" style={{ fontSize: "2rem" }}>💻</div>
                <h5 className="fw-bold">Computer Science Engineering (CSE)</h5>
                <p className="text-muted">
                  Leading department with focus on AI, Machine Learning, Data Science, 
                  and Full Stack Development.
                </p>
                <Link to="/departments/cse" className="btn btn-outline-primary btn-sm mt-auto">
                  View Details
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow-lg border-0 h-100">
                <div className="mb-2" style={{ fontSize: "2rem" }}>📡</div>
                <h5 className="fw-bold">Electronics & Communication Engineering (ECE)</h5>
                <p className="text-muted">
                  Excellent laboratories, research culture, and specialization in IoT, 
                  VLSI, Embedded Systems, and Communication Networks.
                </p>
                <Link to="/departments/ece" className="btn btn-outline-primary btn-sm mt-auto">
                  View Details
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow-lg border-0 h-100">
                <div className="mb-2" style={{ fontSize: "2rem" }}>📈</div>
                <h5 className="fw-bold">Master of Business Administration (MBA)</h5>
                <p className="text-muted">
                  Industry-focused management program with leadership training, 
                  case studies, and corporate interactions.
                </p>
                <Link to="/departments/mba" className="btn btn-outline-primary btn-sm mt-auto">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="my-5">
        <div className="container">
          <h3 className="fw-semibold mb-3 text-primary">What Our Students Say</h3>
          <div className="bg-light rounded shadow-sm p-4 position-relative">
            <blockquote className="blockquote fs-5 mb-3">
              “{testimonials[testimonialIdx].quote}”
            </blockquote>
            <footer className="blockquote-footer">{testimonials[testimonialIdx].author}</footer>
            <button
              className="btn btn-outline-primary position-absolute top-50 start-0 translate-middle-y"
              style={{ left: "10px" }}
              onClick={prevTestimonial}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="btn btn-outline-primary position-absolute top-50 end-0 translate-middle-y"
              style={{ right: "10px" }}
              onClick={nextTestimonial}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
