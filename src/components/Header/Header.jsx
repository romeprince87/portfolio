import { Link } from "react-router";
import { IoColorPaletteOutline } from "react-icons/io5";
import "./header.scss";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossedSabres } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const navigationOn = () => {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "block";
  };

  const navigationOff = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  const colorChanger = (color) => {
    const bg1 = document.querySelector("body");
    bg1.style.background = color;
  };

  return (
    <>
      <div className="header-container">
        <div>
          <h2>Portfolio</h2>
        </div>
        <div className="header-main">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
            </Link>
            <Link to="/project">
              <li>Project</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>

          <ul className="sidebar">
            <GiCrossedSabres
              className="threebars-end"
              onClick={() => {
                return navigationOff();
              }}
            />
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/skills">
              <li>Skills</li>
            </Link>
            <Link to="/project">
              <li>Project</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <RxHamburgerMenu
            className="threebars"
            onClick={() => {
              return navigationOn();
            }}
          />
        </div>
        <div className="change-color">
          <IoColorPaletteOutline onClick={() => toggleDropdown()} />

          {isOpen && (
            <div className="color-change">
              <Link onClick={() => colorChanger("#164d63ff")}>
                <p>#164d63ff</p>
              </Link>
              <Link onClick={() => colorChanger("#052430ff")}>
                <p>#052430ff</p>
              </Link>
              <Link onClick={() => colorChanger("#142942")}>
                <p>#142942</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
