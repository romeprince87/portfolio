import profile from "../images/profile.jpeg";
import "./about.scss";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="img-container">
          <img src={profile} alt="profile-pic" />
        </div>
        <div className="about-container-main">
          <p>
            I’m a Full Stack Developer with 4 years of hands-on experience
            building scalable, user-focused web applications. I specialize in
            developing end-to-end solutions using modern frontend and backend
            technologies, with a strong focus on performance, clean
            architecture, and maintainable code. I enjoy solving complex
            problems, collaborating with cross-functional teams, and
            continuously learning new tools and frameworks to deliver impactful
            digital products.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
