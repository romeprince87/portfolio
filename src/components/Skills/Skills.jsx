import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./skills.scss";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      text: "HTML",
      progress: 90,
      color: "rgb(255, 0, 0)",
    },
    {
      icon: <FaCss3Alt />,
      text: "CSS",
      progress: 70,
      color: "rgba(88, 18, 219, 1)",
    },
    {
      icon: <IoLogoJavascript />,
      text: "JAVASCRIPT",
      progress: 85,
      color: "rgb(240, 219, 79)",
    },
    {
      icon: <FaReact />,
      text: "REACT",
      progress: 80,
      color: "rgb(97, 219, 251)",
    },
    {
      icon: <FaNodeJs />,
      text: "NODEJS/EXPRESSJS",
      progress: 75,
      color: "rgb(33, 87, 50)",
    },
    {
      icon: <SiMongodb />,
      text: "MONGOOSE",
      progress: 95,
      color: "rgb(77, 179, 61)",
    },
  ];

  return (
    <div className="skills-main-container">
      <div>
        <h2>Technical skills</h2>
      </div>

      {skills.map((skill, i) => (
        <div className="progress-container">
          <div>
            <p
              style={{
                backgroundColor: skill.color,
                padding: "10px",
                width: "55px",
                margin: "5px",
                color: "white",
              }}
            >
              {skill.icon}
            </p>
            <h4>{skill.text}</h4>
            <ProgressBar
              completed={skill.progress}
              maxCompleted={100}
              bgColor="aqua"
              height="18px"
              labelColor="black"
              baseBgColor="black"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
