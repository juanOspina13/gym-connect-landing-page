import LanguageIcon from "../assets/languageIcon.svg";
import ProfileIcon from "../assets/profileIcon.svg";
const Navbar = () => {
  return (
    <div className="w-full fixed pr-3 pt-4 pb-4 top bg-black flex flex-row justify-end gap-1">
      <img className="max-h-6" src={LanguageIcon} alt="languageIcon" />
      <img className="max-h-6" src={ProfileIcon} alt="languageIcon" />
    </div>
  );
};

export default Navbar;
