import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:neelmvekariya111@gmail.com" data-cursor="disable">
                neelmvekariya111@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+971507079252" data-cursor="disable">
                +971 507079252
              </a>
              <br />
              <a href="tel:+919173271555" data-cursor="disable">
                +91 9173271555
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech (CSE) — Uka Tarsadiya University (2022–2025)
              <br />
              Diploma (CE) — Tapi Diploma Engineering College (2019–2022)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="mailto:neelmvekariya111@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Gmail <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/neelvekariya"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Neel Vekariya</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
