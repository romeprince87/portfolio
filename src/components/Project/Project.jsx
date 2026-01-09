import React from "react";
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import "./Project.scss";
import { Link } from "react-router-dom";

const Project = () => {
  const project = [
    {
      image: Project1,
      gitLink: "https://github.com/romeprince87/Full-Stack",
    },
    {
      image: Project2,
      gitLink: "https://github.com/romeprince87/portfolio",
    },
  ];
  return (
    <>
      <div className="Project-container">
        <h2>Projects On Github</h2>

        <div className="Project-main-container">
          {project &&
            project.map((project) => {
              return (
                <Link to={project.gitLink}>
                  <img
                    src={project.image}
                    alt="pic1"
                    style={{ height: "300px", width: "300px" }}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Project;
