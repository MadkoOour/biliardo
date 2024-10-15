import DropdownMenu from "./DropDownMenu";
import '../../style/Navbar.css';
import logo from './../../Assets/Logo.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <DropdownMenu />
      <button className="btn language-selection">En</button>
    </nav>
  );
}

export default Navbar;
