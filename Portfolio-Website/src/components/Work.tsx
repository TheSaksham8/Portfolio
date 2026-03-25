import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef } from "react";

const Work = () => {
  const flexRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (!flexRef.current) return;
    const boxWidth = document.querySelector(".work-box")?.getBoundingClientRect().width || 600;
    const { scrollLeft, scrollWidth, clientWidth } = flexRef.current;
    
    // If remaining scroll space is less than half a box, jump to start
    if (scrollWidth - clientWidth - scrollLeft < boxWidth / 2) {
      flexRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      flexRef.current.scrollBy({ left: boxWidth, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (!flexRef.current) return;
    const boxWidth = document.querySelector(".work-box")?.getBoundingClientRect().width || 600;
    
    // If current scroll is very close to start, jump to end
    if (flexRef.current.scrollLeft < boxWidth / 2) {
      flexRef.current.scrollTo({ left: flexRef.current.scrollWidth, behavior: "smooth" });
    } else {
      flexRef.current.scrollBy({ left: -boxWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: "wrap", zIndex: 10, position: "relative" }}>
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-nav-buttons" style={{ display: 'flex', gap: '15px' }}>
            <button className="slider-btn" onClick={handleScrollLeft}>&lt;</button>
            <button className="slider-btn" onClick={handleScrollRight}>&gt;</button>
          </div>
        </div>
        <div className="work-flex" ref={flexRef}>
          {[
            {
              name: "Customer Churn Prediction",
              category: "Machine Learning",
              tools: "Python, Excel, Data Cleaning, Statistical Analysis, Feature Extraction, Logistic Regression, XGBoost Model",
              link: "https://github.com/TheSaksham8",
              image: "/images/customer-churn.png"
            },
            {
              name: "IPL Data Analysis",
              category: "Data Analytics Dashboard",
              tools: "SQL, Python ETL, Power BI, DAX, Excel, API, Pandas, PyArrow/Parquet",
              link: "https://github.com/TheSaksham8",
              image: "/images/ipl.jpg"
            },
            {
              name: "OLA Data Analysis",
              category: "Data Analytics Dashboard",
              tools: "SQL, Power BI, Excel",
              link: "https://github.com/TheSaksham8",
              image: "/images/ola.png"
            },
            {
              name: "Movie Recommendation System",
              category: "Machine Learning",
              tools: "Python, Pandas, Scikit-learn, xgBoost, EDA, Feature Engineering, SVD, KNN",
              link: "https://github.com/TheSaksham8/Movie-Recommendation-System",
              image: "/images/movie-rec.jpg"
            },
            {
              name: "Cotton Plant Disease Detection",
              category: "Computer Vision",
              tools: "Python, TensorFlow, OpenCV, Pandas, Matplot",
              link: "https://github.com/TheSaksham8/Cotton-Plant-Disease-Detection",
              image: "/images/cotton.jpg"
            },
            {
              name: "Dev Blog WebApp",
              category: "Full Stack Web App",
              tools: "React, Node.js, Express, MongoDB, React Router DOM, Tailwind CSS, Redux Toolkit, Appwrite",
              link: "https://github.com/TheSaksham8/Dev-Blog-WebApp",
              image: "/images/dev-blog.jpg"
            },
            {
              name: "Currency Converter",
              category: "Web Application",
              tools: "React, Vite, JavaScript (ES6+), HTML5, CSS3, Node.js, npm",
              link: "https://github.com/TheSaksham8/Currency-Converter",
              image: "/images/currency.png"
            },
            {
              name: "Netflix Data Analysis",
              category: "Data Analytics",
              tools: "SQL, Python, Excel, API, EDA, Data Visualization",
              link: "https://github.com/TheSaksham8/Netflix-Data-Analysis",
              image: "/images/netflix.png"
            },
            {
              name: "Energy Consumption Forecasting",
              category: "Coming Soon...",
              tools: "Coming Soon...",
              link: "#",
              image: "/images/energy.jpg"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>
                      <a href={project.link} target="_blank" rel="noreferrer" style={{color: "inherit", textDecoration: "none"}}>
                        {project.name}
                      </a>
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
