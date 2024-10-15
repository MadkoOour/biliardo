import DropdownMenu from "./DropDownMenu";
import "../../style/Navbar.css";
import logo from "./../../Assets/Logo.png";
import EN from "./../../Assets/EN.png";
import LanguageArrow from "./../../Assets/Language Arrow.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <DropdownMenu />
      <button className="btn language-selection">
        <img src={EN} width={15} />
        <img src={LanguageArrow} width={15} />
      </button>
    </nav>
  );
}

export default Navbar;
