import LogoHeader from "../assets/logoHeader.png";
import GymConnectHeader from "../assets/gymConnectHeader.png";
import "./Logo.css";
import { Parallax } from "react-scroll-parallax";
const Logo = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center header-content">
     <Parallax speed={-20}>
           <img className="max-w-[120px]" src={LogoHeader} alt="logoHeader" />
      <img
        className="max-w-screen-sm max-h-[100px] w-full"
        src={GymConnectHeader}
        alt="gymConnectHeader"
      />
          </Parallax>

    </div>
  );
};

export default Logo;
