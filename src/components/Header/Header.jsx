import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Header.module.css";

// стилізація активного лінка
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
