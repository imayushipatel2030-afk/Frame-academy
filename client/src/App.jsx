import "./App.css";
import About from "./components/About";
import Courses from "./components/Courses";
import Inquiry from "./components/Inquiry";
import Admission from "./components/Admission";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          FRAME<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#inquiry">Admission</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-tag">FRAME ACADEMY • EST. 2026</p>

          <h1>
            Capture.
            <br />
            Create.
            <br />
            <span>Tell Stories.</span>
          </h1>

          <p className="hero-description">
            Learn professional photography and cinematography through
            practical training, creative projects and industry-focused
            techniques.
          </p>

          <div className="hero-buttons">
            <a href="#courses" className="primary-btn">
              Explore Courses →
            </a>

            <a href="#inquiry" className="secondary-btn">
              Apply Now
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          SCROLL TO EXPLORE ↓
        </div>
      </section>
      <About />
      <Courses />
      <Admission />
      <Inquiry />
    </div>
  );
}

export default App;