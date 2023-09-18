import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import Entrenamientos from "./Entrenamientos";
import Header from "./Header";
import Intro from "./Intro";
import Logo from "./Logo";
import { MainContainer, MainWrapper } from "./MainStyles";

const Main = () => {
  return (
    <ParallaxProvider>
      <MainWrapper>
        <Header></Header>
        <div>
          <Logo></Logo>
          <Intro></Intro>
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
