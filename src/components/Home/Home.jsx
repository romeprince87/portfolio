import "./Home.scss";
import profile from "../images/profile.jpeg";
import { FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
import cv from "./cv.pdf";

const Home = () => {
  console.log(profile);
  return (
    <>
      <div className="home-container">
        <div className="home-container-main">
          <div>
            <h3>Hello! i'm</h3>
            <h1>Harsh Jassi</h1>
            <h2>
              a Full-stack developer who enjoys turning ideas into clean,
              responsive websites.
            </h2>
          </div>
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
          <div className="home-btn">
            {/* <a href="/cv.pdf" download>
              <button>Download CV</button>
            </a> */}
            <a href={cv} download="cv">
              <button>Download CV</button>
            </a>
          </div>
        </div>
        <div className="home-conatiner-main-2">
          <img src={profile} alt="profilepic" />
        </div>
      </div>
    </>
  );
};

export default Home;
