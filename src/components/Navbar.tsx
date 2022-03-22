import LanguageIcon from "../assets/languageIcon.svg";
import ProfileIcon from "../assets/profileIcon.svg";
const Navbar = () => {
  return (
    <div className="w-full pr-3 pt-1 pb-1 flex flex-row justify-end">
      <img className="max-h-8" src={LanguageIcon} alt="languageIcon" />
      <img className="max-h-8" src={ProfileIcon} alt="languageIcon" />
    </div>
  );
};

export default Navbar;
