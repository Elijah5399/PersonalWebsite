import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DropDown from "./DropDown";

const links = [
  { title: "Home", url: "#home", anchor: "home" },
  { title: "About Me", url: "#about", anchor: "about" },
  { title: "Projects", url: "#projects", anchor: "projects" },
  { title: "Skills", url: "#skills", anchor: "skills" },
];

//this function allows for the smooth scrolling to each link
const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function NavBar() {
  const [toggled, setToggled] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    setToggled(!toggled);
  }

  return (
    <div className="navbarWrapper">
      <nav>
        <div className="navbarList">
          <a href="#home" onClick={handleClick("home")}>
            <h3 className="myName">{"<Elijah/>"}</h3>
          </a>
          {links.map((link) => {
            return (
              <a
                key={link.title}
                href={link.url}
                onClick={handleClick(link.anchor)}
              >
                <h3 className="intLink">{link.title}</h3>
              </a>
            );
          })}
        </div>
        <div className="navToggle">
          {!toggled ? (
            <button className="toggleButton" onClick={handleToggle}>
              <FontAwesomeIcon className="toggleIcon" icon={faBars} size="2x" />
            </button>
          ) : (
            <></>
          )}
          <DropDown data={links} toggled={toggled} setToggled={setToggled} />
        </div>
      </nav>
    </div>
  );
}
