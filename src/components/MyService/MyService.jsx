// import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase, FaLock } from "react-icons/fa";
import { CiCloud } from "react-icons/ci";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { SiTestinglibrary } from "react-icons/si";
import { FcSupport } from "react-icons/fc";
import { GiLifeSupport } from "react-icons/gi";
import "./myservice.scss";

const MyService = () => {
  const service = [
    {
      icon: <TbWorld />,
      heading: "Full Stack Web Development",
      description:
        "End-to-end web application development using the MERN stack (MongoDB, Express.js, React.js, Node.js). I build scalable, secure, and high-performance applications tailored to business needs.",
    },
    {
      icon: <FaReact />,
      heading: "Frontend Development (React.js)",
      description:
        "Modern, responsive, and user-friendly interfaces built with React.js. I focus on clean UI, smooth user experience, performance optimization, and cross-browser compatibility.",
    },
    {
      icon: <FaNodeJs />,
      heading: "Backend Development (Node.js & Express)",
      description:
        "Robust backend systems with RESTful APIs, authentication, authorization, and server-side logic. Designed for scalability, security, and seamless frontend integration.",
    },
    {
      icon: <FaDatabase />,
      heading: "Database Design & Management",
      description:
        "Efficient database architecture using MongoDB. I handle schema design, data optimization, indexing, and secure data handling for fast and reliable applications.",
    },
    {
      icon: <FaLock />,
      heading: "Authentication & Authorization",
      description:
        "Secure login systems using JWT, OAuth, and role-based access control. I ensure user data protection and safe access across applications.",
    },
    {
      icon: <CiCloud />,
      heading: "Deployment & Cloud Integration",
      description:
        "Application deployment on platforms like AWS, Vercel, Netlify, and Render. I manage CI/CD pipelines, environment configurations, and performance monitoring.",
    },
    {
      icon: <MdOutlineIntegrationInstructions />,
      heading: "API Development & Integration",
      description:
        "Custom REST API development and third-party API integrations (payment gateways, maps, analytics, etc.) for seamless system communication.",
    },
    {
      icon: <SiTestinglibrary />,
      heading: "Testing & Performance Optimization",
      description:
        "Bug fixing, code optimization, and performance tuning to ensure fast load times, reliability, and smooth user experience.",
    },
    {
      icon: <GiLifeSupport />,
      heading: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, feature enhancements, and technical support to keep applications running smoothly.",
    },
  ];

  return (
    <>
      <div className="myService-whole-container">
        <h2 className="service-heading">My Services</h2>
        <div className="main-container-service">
          {service.map((service, i) => {
            return (
              <div className="myservice-container">
                <div className="myservice-card">
                  <h3>{service.icon}</h3>
                  <div>
                    <h2>{service.heading}</h2>
                  </div>
                  <div>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyService;
