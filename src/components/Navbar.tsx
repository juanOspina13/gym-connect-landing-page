import LanguageIcon from "../assets/languageIcon.svg";
import logoHeader from "../assets/logoHeader.png";
const Navbar = () => {
  return (
    <div className="w-full fixed top bg-black flex flex-row justify-between gap-1 py-4 px-8">
      <div className="flex items-center uppercase">
        <img className="max-h-20" src={logoHeader} alt="logoIcon" />
        <div className="flex flex-col">
          <h1>Gym</h1>
          <h1> Connect</h1>
        </div>
      </div>
      <div className="flex gap-4 uppercase underline-offset-1">
        <h3>Inicio</h3>
        <h3>Blog</h3>
        <h3>Membresías</h3>
        <h3>Aliados</h3>
        <h3>Contacto</h3>
      </div>
    </div>
  );
};

export default Navbar;
