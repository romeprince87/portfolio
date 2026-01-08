import { Link } from "react-router-dom";
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./contact.scss";
import { useState } from "react";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  console.log(firstname);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="contact-main-container">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-container-1">
            <div className="contact-1">
              <h3>Let's Work Together</h3>
              <p>
                Have a project in mind or want to discuss how I can help? Feel
                free to reach out using the form below. I’m always open to new
                opportunities, collaborations, and interesting ideas. I’ll get
                back to you as soon as possible.
              </p>
              <MdEmail />
              <a href="mailto:harshjassi47@gmail.com">harshjassi47@gmail.com</a>
              <br />
              <FaPhoneAlt />
              <a href="tel:+1-437-599-0544">+1 (437)-599-0544</a>
              <div className="home-icons">
                <Link
                  to="https://www.linkedin.com/in/harsh-jassi-40b427361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
                <Link to="https://www.instagram.com/_i_harsh99?igsh=eGx6NGg4enhuZzRr">
                  <FaInstagram />
                </Link>
                <Link to="https://www.tiktok.com/@princerome37?_r=1&_t=ZS-92nBKF9Hni0">
                  <FaTiktok />
                </Link>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                name=""
                id=""
                rows="15"
                cols="10"
                placeholder="Enter your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input type="submit" className="submitbtn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
