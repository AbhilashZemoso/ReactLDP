import React from "react";
import MainView from "../components/templates/MainView/MainView";
import AboutMe from "../components/templates/AboutMe/AboutMe";
import Gallery from "../components/templates/Gallery/Gallery";


const Primary = (props) => {
  return (
    <div>
      <MainView />
      <AboutMe />
      <Gallery />
    </div>
  );
};

export default Primary;
