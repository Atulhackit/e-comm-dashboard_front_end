import React, { useState } from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import "./About.scss";

const tabData = [
  { id: 0, name: "event" },
  { id: 2, name: "temperature" },
  { id: 3, name: "humidity" }
];
const CommonTabs = (props) => {
  
  const { active, setActive } = props;
  return (
    <div className="tabsContainer">
          <ul className="TabsWrapper">
            {
              tabData.map((item,i)=>{
                return(
                  <li className={ active===item.id? "item active" :'item'} onClick={()=>setActive(item?.id)}> {item.name} </li>
                )
              })
            }
            {/* <li className='item' > tab1 </li> */}
          </ul>
    </div>
  );
};

const About = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="aboutMainWrapper">
      <Header />

      <CommonTabs active={active} setActive={setActive}/>
      {
        active==0 && (<p>tab1</p>) 
      }
      {
        active==2 && (<p>temperature</p>) 
      }
      {
        active==3 && (<p>humidity</p>) 
      }
      <Footer />
    </div>
  );
};

export default About;
