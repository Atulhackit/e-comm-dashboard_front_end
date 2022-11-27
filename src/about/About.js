import React, { useState } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import CommonTabs from "./Tab"
import "./About.scss";
import TabContent from "./TabContent";

const tabData = [
  { id: 0, name: "event" },
  { id: 2, name: "temperature" },
  { id: 3, name: "humidity" },
  { id: 4, name: "operation" },
  { id: 5, name: "test" },

];

const About = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="aboutMainWrapper">
      <Header />
      <div className="tabsContainer">
      <CommonTabs active={active} setActive={setActive} tabData={tabData} />
      {
        tabData.map((item,i)=>{
         return  (
          <>
          {active == item?.id && <TabContent title={item?.name}/>}
          </>
)
        })
      }

        {/* {active == 2 && <p>temperature</p>}
        {active == 3 && <p>humidity</p>}
        {active == 4 && <p>operation</p>}
        {active == 5 && <p>operation</p>} */}
        </div>
      <Footer />
    </div>
  );
};

export default About;
