import * as React from "react";
import "../App.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./SocialMedia";
import TypingAnimation from "./TypingAnimation";

const socials = [
  { iconName: faLinkedin, url: "https://www.linkedin.com/in/elijah-chia/" },
  { iconName: faGithub, url: "https://github.com/Elijah5399" },
  { iconName: faLaptopCode, url: "https://leetcode.com/ElijahChia/" },
];

export default function LandingPage() {
  return (
    <div id="home-section" className="homeContainer">
      {/*<div className="laptopWrap">
        <LaptopAnimation />
      </div>
      */}

      <div className="homeBody">
        <div className="homeText">
          <h1
            style={{
              fontFamily: `'Roboto', sans-serif`,
              fontWeight: "100",
              color: "white",
            }}
          >
            Hi, I'm Elijah
          </h1>
          <h3
            style={{
              fontFamily: `'Roboto', sans-serif`,
              fontWeight: "300",
              color: "#6ee7b7",
            }}
          >
            Full Stack Software Developer
          </h3>
          <span style={{ fontWeight: "bold" }}>
            <p
              id="textArea"
              style={{
                color: "white",
                fontFamily: `'Roboto', sans-serif`,
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              <TypingAnimation />
            </p>
          </span>
          <div className="socialIcons">
            <SocialMedia arr={socials} />
          </div>
        </div>
      </div>
    </div>
  );
}
