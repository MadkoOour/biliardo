import { NavLink } from "react-router-dom";
import "../../style/Navbar.css";

const DropdownMenu = () => {
  return (
    <ul className="navbar-menu">
      {/* Main Menu Items */}
      <li className="menu-item">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          {"الرئيسية"}
        </NavLink>
      </li>

      {/* Dropdown for "عن البطولة" */}
      <li className="menu-item menu-item-has-children">
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          {"عن البطولة"}
        </NavLink>
        <ul className="sub-menu">
          <li className="">
            <NavLink to={"/aboutTour"}>{"عن البطولة"}</NavLink>
          </li>
          <li>
            <NavLink to={"/visas"}>{"التأشيرات"}</NavLink>
          </li>
          <li>
            <NavLink to={"/players"}>{"اللاعبين"}</NavLink>
          </li>
          <li>
            <NavLink to={"/event-location"}>{"موقع الحدث"}</NavLink>
          </li>
          <li>
            <NavLink to={"/live"}>{"مباشر"}</NavLink>
          </li>
          <li>
            <NavLink to={"/tickets"}>{"التذاكر"}</NavLink>
          </li>
          <li>
            <NavLink to={"/organizers"}>{"المنظمين"}</NavLink>
          </li>
          <li>
            <NavLink to={"/partners"}>{"الشركاء"}</NavLink>
          </li>
        </ul>
      </li>

      {/* Dropdown for "الحياة في جدة" */}
      <li className="menu-item menu-item-has-children">
        <NavLink
          to={"/jeddah-life"}
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          {"الحياة في جدة"}
        </NavLink>
        <ul className="sub-menu">
          <li>
            <NavLink to={"/weather"}>{"الطقس"}</NavLink>
          </li>
          <li>
            <NavLink to={"/markets"}>{"الأسواق"}</NavLink>
          </li>
          <li>
            <NavLink to={"/entertainment"}>{"الترفية"}</NavLink>
          </li>
          <li>
            <NavLink to={"/jeddah-airport"}>{"مطار جدة"}</NavLink>
          </li>
          <li>
            <NavLink to={"/hotels"}>{"الفنادق"}</NavLink>
          </li>
          <li>
            <NavLink to={"/transportation"}>{"التنقلات"}</NavLink>
          </li>
        </ul>
      </li>

      {/* "المركز الإعلامي" without a dropdown */}
      <li className="menu-item">
        <NavLink
          to={"/mediaCenter"}
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          {"المركز الإعلامي"}
        </NavLink>
      </li>

      {/* Dropdown for "التحديات" */}
      <li className="menu-item menu-item-has-children">
        <NavLink
          to={"/matches"}
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          {"التحديات"}
        </NavLink>
        <ul className="sub-menu">
          <li>
            <NavLink to={"/bliarod"}>{"بلياردو"}</NavLink>
          </li>
          <li>
            <NavLink to={"/snoker"}>{"سنوكر"}</NavLink>
          </li>
        </ul>
      </li>

      {/*Contact Us */}
      <li className="menu-item">
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          {"تواصل معنا"}
        </NavLink>
      </li>
    </ul>
  );
};

export default DropdownMenu;
