import { useRef, useState } from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import Entrenamientos from "./Entrenamientos";
import Header from "./Header";
import Intro from "./Intro";
import Logo from "./Logo";
import { MainContainer, MainWrapper } from "./MainStyles";
import NavigationPoints from "./NavigationPoints";

const Main = () => {
  const introSection = useRef(null);
  const [steps, setSteps] = useState([
    {
      key: "logo",
    },
    {
      key: "intro",
      reference: introSection,
    },
    {
      key: "entrenamientos",
    },
  ]);
  return (
    <ParallaxProvider>
      <MainWrapper>
        <Header></Header>
        <NavigationPoints stepsParent={steps}></NavigationPoints>
        <div>
          <Logo></Logo>
          <div ref={introSection}>
            <Intro></Intro>
          </div>
          <Entrenamientos></Entrenamientos>

          {/*
        <Crossfit></Crossfit>
        */}
        </div>
      </MainWrapper>
    </ParallaxProvider>
  );
};

export default Main;
