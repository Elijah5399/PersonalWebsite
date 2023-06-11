import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import LeetCode from "./LeetCode";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <div id="skills-section">
      <div ref={skillsTabRef} fluid className="m-0" id="skills">
        <Container className="p-5 ">
          <h2
            ref={skillsTabRef}
            className="display-4 pb-5 text-center skillsHeader"
          >
            {heading}
          </h2>
          <Tabs
            className="skills-tabs"
            defaultActiveKey="hard-skills"
            id="skills-tabs"
            fill
          >
            <Tab
              tabClassName="skills-tab lead"
              eventKey="hard-skills"
              title="Technical Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
              </Row>
            </Tab>
            <Tab
              tabClassName="skills-tab lead"
              eventKey="soft-skills"
              title="Soft Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={softSkills} isScrolled={isScrolled} />
              </Row>
            </Tab>
          </Tabs>
          <h2 className="leetcodeHeader">Check out my Leetcode progress!</h2>
          <LeetCode />
        </Container>
      </div>
    </div>
  );
});

export default Skills;
