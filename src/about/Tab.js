import React from "react";
import "./About.scss";

const About = (props) => {
  const { active, setActive, tabData } = props;
  return (
    <ul className="TabsWrapper">
      {tabData.map((item, i) => {
        return (
          <li key={i}
            className={active === item.id ? "item active" : "item"}
            onClick={() => setActive(item?.id)}
          >{item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default About;
