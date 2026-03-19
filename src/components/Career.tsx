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
                <h4>Flutter Developer Intern</h4>
                <h5>Codebyte Infotech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed cross-platform mobile applications using Flutter (Android & iOS).
              Collaborated with UI/UX designers, integrated third-party APIs, optimized
              performance, and debugged issues in an Agile environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Byteztech</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built and maintained cross-platform apps with Flutter & Dart, integrated
              REST APIs and Firebase for real-time data handling, and collaborated with
              the team to improve stability and performance across multiple live projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Coordinator / Flutter Developer</h4>
                <h5>Anagha General Trading CO L.L.C — Dubai</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Coordinating with external development agency (Litrix Media UAE), managing
              requirements, timelines, testing, bug tracking, and post-deployment updates.
              Key project: stockpulsefxltd.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
