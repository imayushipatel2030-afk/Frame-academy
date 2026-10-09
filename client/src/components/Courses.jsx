
import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log("Error fetching courses:", error);
      });
  }, []);

  return (
    <section className="courses-section" id="courses">
      <div className="section-label">02 — OUR COURSES</div>

      <div className="courses-heading">
        <h2>Choose your medium.</h2>

        <p>
          Learn from fundamentals to professional techniques through
          hands-on training.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-number">
              0{course.id}
            </div>

            <div>
              <h3>{course.name}</h3>

              <p>{course.description}</p>
            </div>

            <div className="course-bottom">
              <span>{course.duration}</span>

              <a href="#inquiry">Apply →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

