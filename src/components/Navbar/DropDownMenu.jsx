import { NavLink } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      <li className={`menu-item-has-children two-columns current-menu-item`}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "sf-with-ul" : "")}
          end
        >
          <span>{"Home"}</span>
        </NavLink>
      </li>
      <li className={`menu-item-has-children`}>
        <NavLink
          to={"/about-us"}
          className={({ isActive }) => (isActive ? "sf-with-ul" : "")}
          end
        >
          <span>{"About us"}</span>
        </NavLink>
      </li>
      <li className={`menu-item-has-children`}>
        <NavLink
          to={"/brands"}
          className={({ isActive }) => (isActive ? "sf-with-ul" : "")}
          end
        >
          <span>{"Partners"}</span>
        </NavLink>
      </li>
      <li className={`menu-item-has-children`}>
        <NavLink
          to={"/projects"}
          className={({ isActive }) => (isActive ? "sf-with-ul" : "")}
          end
        >
          <span>{"Projects"}</span>
        </NavLink>
        <ul className="sub-menu">
          <li>
            <NavLink to={"/case-studies"}>
              <span>{"Case Studies"}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>
              <span>{"Reference List"}</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to={"/retail"}
          className={({ isActive }) => (isActive ? "sf-with-ul" : "")}
          end
        >
          <span>{"Retail"}</span>
        </NavLink>
      </li>
      <li className={`menu-item-has-children`}>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "sf-with-ul" : "")}
          end
        >
          <span>{"Contact us"}</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default DropdownMenu;
