import LogoHeader from "../assets/logoHeader.png";
import GymConnectHeader from "../assets/gymConnectHeader.png";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="pt-4 flex flex-col justify-between content-center items-center header-content max-h-96">
      <img className="max-w-[120px]" src={LogoHeader} alt="logoHeader" />
      <img
        className="max-w-screen-sm max-h-[100px] w-full"
        src={GymConnectHeader}
        alt="gymConnectHeader"
      />

    </div>
  );
};

export default Logo;
