import s from "./Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
