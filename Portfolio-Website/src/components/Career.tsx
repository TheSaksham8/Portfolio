import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Zylife Smartcare</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Executed a customer segmentation project by visualizing gender and age distributions and analyzing their income and spending scores. Applied clustering (K-Means, Hierarchical) to segment users and improve campaign targeting by 25%. Created dashboards in Power BI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. Data Science and Application</h4>
                <h5>IIT Madras</h5>
              </div>
              <h3>2024-27</h3>
            </div>
            <p>
              Undergraduate program focusing on data structures, statistics, machine learning, and data-driven problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech. Computer Science</h4>
                <h5>Dr. A.P.J Abdul Kalam Technical University</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Core engineering degree with focus on computer architecture, algorithms, database management, and modern software development pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
