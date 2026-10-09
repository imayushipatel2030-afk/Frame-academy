
import { useState } from "react";
import axios from "axios";

function Inquiry() {
  // Store form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });

  // Store success and error messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/inquiries",
        formData
      );

      // Show success message
      setMessage(response.data.message);

      // Clear form after successful submission
      setFormData({
        name: "",
        phone: "",
        course: "",
      });
    } catch (error) {
      // Show backend error message
      setError(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <section className="inquiry-section" id="inquiry">

      {/* Section heading */}
      <div className="section-label">
        03 — ADMISSION INQUIRY
      </div>

      <div className="inquiry-content">

        {/* Left side */}
        <div className="inquiry-info">
          <h2>
            Start your
            <span> creative journey.</span>
          </h2>

          <p>
            Interested in learning photography or cinematography?
            Fill out the form and our team will contact you soon.
          </p>
        </div>

        {/* Right side - Form */}
        <form
          className="inquiry-form"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter 10 digit phone number"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>

          {/* Course */}
          <div className="form-group">
            <label htmlFor="course">
              Select Course
            </label>

            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">
                Choose a course
              </option>

              <option value="Photography">
                Photography
              </option>

              <option value="Cinematography">
                Cinematography
              </option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="inquiry-btn"
          >
            Submit Inquiry →
          </button>

          {/* Success message */}
          {message && (
            <p className="success-message">
              {message}
            </p>
          )}

          {/* Error message */}
          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Inquiry;

