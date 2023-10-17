import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSideBar }) => {
  const { toggleSideBar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            onClick={isBigSideBar ? null : toggleSideBar}
            end
            to={path}
            key={text}
            className="nav-link"
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
