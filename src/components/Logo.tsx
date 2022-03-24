import LogoHeader from "../assets/logoHeader.png";
import GymConnectHeader from "../assets/gymConnectHeader.png";
import "./Logo.css";
import { Parallax } from "react-scroll-parallax";
const Logo = () => {
  return (
    <div className="h-screen flex flex-col justify-center header-content">
      <Parallax className="flex flex-col gap-8 justify-center items-center" speed={-20}>
        <img className="max-w-[162px]" src={LogoHeader} alt="logoHeader" />
        <img
          className="max-w-sm md:max-w-screen-md max-h-[100px] w-full"
          src={GymConnectHeader}
          alt="gymConnectHeader"
        />
      </Parallax>

    </div>
  );
};

export default Logo;
